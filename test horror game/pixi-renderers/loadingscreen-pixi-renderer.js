var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  let LoadingScreenState;
  (function(LoadingScreenState2) {
    LoadingScreenState2[LoadingScreenState2["NOT_STARTED"] = 0] = "NOT_STARTED";
    LoadingScreenState2[LoadingScreenState2["STARTED"] = 1] = "STARTED";
    LoadingScreenState2[LoadingScreenState2["FINISHED"] = 2] = "FINISHED";
  })(LoadingScreenState || (LoadingScreenState = {}));
  const fadeIn = (object, duration, deltaTimeInMs) => {
    if (!object)
      return;
    if (duration > 0) {
      object.alpha += 1 / duration * deltaTimeInMs / 1e3;
      if (object.alpha > 1)
        object.alpha = 1;
    } else {
      object.alpha = 1;
    }
  };
  const hasFadedIn = (object) => {
    return !object || object.alpha >= 1;
  };
  class LoadingScreenPixiRenderer {
    constructor(runtimeGamePixiRenderer, imageManager, loadingScreenData) {
      this._backgroundSprite = null;
      this._gdevelopLogoSprite = null;
      this._progressBarGraphics = null;
      this._state = 0;
      this._startTimeInMs = 0;
      this._backgroundReadyTimeInMs = 0;
      this._lastFrameTimeInMs = 0;
      this._progressPercent = 0;
      this._loadingScreenData = loadingScreenData;
      this._loadingScreenContainer = new PIXI.Container();
      this._pixiRenderer = runtimeGamePixiRenderer.getPIXIRenderer();
      if (!this._pixiRenderer) {
        return;
      }
      this._pixiRenderer.backgroundColor = this._loadingScreenData.backgroundColor;
      const backgroundTexture = imageManager.getPIXITexture(loadingScreenData.backgroundImageResourceName);
      if (backgroundTexture !== imageManager.getInvalidPIXITexture()) {
        this._backgroundSprite = PIXI.Sprite.from(backgroundTexture);
        this._backgroundSprite.alpha = 0;
        this._backgroundSprite.anchor.x = 0.5;
        this._backgroundSprite.anchor.y = 0.5;
        this._loadingScreenContainer.addChild(this._backgroundSprite);
      }
      if (loadingScreenData.showGDevelopSplash) {
        this._gdevelopLogoSprite = PIXI.Sprite.from(gdjs2.gdevelopLogo);
        this._gdevelopLogoSprite.alpha = 0;
        this._gdevelopLogoSprite.anchor.x = 0.5;
        this._gdevelopLogoSprite.anchor.y = 0.5;
        this._loadingScreenContainer.addChild(this._gdevelopLogoSprite);
      }
      if (loadingScreenData.showProgressBar) {
        this._progressBarGraphics = new PIXI.Graphics();
        this._progressBarGraphics.alpha = 0;
        this._loadingScreenContainer.addChild(this._progressBarGraphics);
      }
      this._render(performance.now());
    }
    setPercent(percent) {
      this._progressPercent = percent;
    }
    _startLoadingScreen() {
      if (!this._pixiRenderer)
        return;
      this._state = 1;
      this._startTimeInMs = performance.now();
    }
    _updatePositions() {
      if (!this._pixiRenderer)
        return;
      if (this._backgroundSprite && this._backgroundSprite.texture.valid) {
        this._backgroundSprite.position.x = this._pixiRenderer.width / 2;
        this._backgroundSprite.position.y = this._pixiRenderer.height / 2;
        const scale = Math.max(this._pixiRenderer.width / this._backgroundSprite.texture.width, this._pixiRenderer.height / this._backgroundSprite.texture.height);
        this._backgroundSprite.scale.x = scale;
        this._backgroundSprite.scale.y = scale;
      }
      if (this._gdevelopLogoSprite) {
        this._gdevelopLogoSprite.position.x = this._pixiRenderer.width / 2;
        this._gdevelopLogoSprite.position.y = this._pixiRenderer.height / 2;
        const logoWidth = 680;
        const border = this._pixiRenderer.width > this._pixiRenderer.height && this._pixiRenderer.width > 500 ? 150 : 35;
        const desiredWidth = Math.min(logoWidth, Math.max(1, this._pixiRenderer.width - border * 2));
        const scale = desiredWidth / logoWidth;
        this._gdevelopLogoSprite.scale.x = scale;
        this._gdevelopLogoSprite.scale.y = scale;
        this._gdevelopLogoSprite.visible = this._pixiRenderer.width > 200 && this._pixiRenderer.height > 200;
      }
    }
    _render(timeInMs) {
      if (!this._pixiRenderer) {
        return;
      }
      if (this._state !== 2) {
        requestAnimationFrame(() => this._render(performance.now()));
      }
      const deltaTimeInMs = this._lastFrameTimeInMs ? timeInMs - this._lastFrameTimeInMs : 0;
      this._lastFrameTimeInMs = timeInMs;
      this._updatePositions();
      if (this._state == 0) {
        if (!this._backgroundSprite || this._backgroundSprite.texture.valid) {
          this._startLoadingScreen();
        }
      } else if (this._state == 1) {
        const backgroundFadeInDuration = this._loadingScreenData.backgroundFadeInDuration;
        fadeIn(this._backgroundSprite, backgroundFadeInDuration, deltaTimeInMs);
        if (hasFadedIn(this._backgroundSprite)) {
          if (!this._backgroundReadyTimeInMs)
            this._backgroundReadyTimeInMs = timeInMs;
          const logoAndProgressFadeInDuration = this._loadingScreenData.logoAndProgressFadeInDuration;
          const logoAndProgressLogoFadeInDelay = this._loadingScreenData.logoAndProgressLogoFadeInDelay;
          if (timeInMs - this._backgroundReadyTimeInMs > logoAndProgressLogoFadeInDelay * 1e3) {
            fadeIn(this._gdevelopLogoSprite, logoAndProgressFadeInDuration, deltaTimeInMs);
            fadeIn(this._progressBarGraphics, logoAndProgressFadeInDuration, deltaTimeInMs);
          }
        }
        if (this._progressBarGraphics) {
          const color = this._loadingScreenData.progressBarColor;
          let progressBarWidth = this._loadingScreenData.progressBarWidthPercent / 100 * this._pixiRenderer.width;
          if (this._loadingScreenData.progressBarMaxWidth > 0) {
            if (progressBarWidth > this._loadingScreenData.progressBarMaxWidth)
              progressBarWidth = this._loadingScreenData.progressBarMaxWidth;
          }
          if (this._loadingScreenData.progressBarMinWidth > 0) {
            if (progressBarWidth < this._loadingScreenData.progressBarMinWidth)
              progressBarWidth = this._loadingScreenData.progressBarMinWidth;
          }
          const progressBarHeight = this._loadingScreenData.progressBarHeight;
          const progressBarX = Math.floor(this._pixiRenderer.width / 2 - progressBarWidth / 2);
          const progressBarY = this._pixiRenderer.height < 350 ? Math.floor(this._pixiRenderer.height - 10 - progressBarHeight) : Math.floor(this._pixiRenderer.height - 90 - progressBarHeight);
          const lineWidth = 1;
          const progress = Math.min(1, (this._progressPercent + 1) / 100);
          this._progressBarGraphics.clear();
          this._progressBarGraphics.lineStyle(lineWidth, color, 1, 0);
          this._progressBarGraphics.drawRect(progressBarX, progressBarY, progressBarWidth, progressBarHeight);
          this._progressBarGraphics.beginFill(color, 1);
          this._progressBarGraphics.lineStyle(0, color, 1);
          this._progressBarGraphics.drawRect(progressBarX + lineWidth, progressBarY + lineWidth, progressBarWidth * progress - lineWidth * 2, progressBarHeight - lineWidth * 2);
          this._progressBarGraphics.endFill();
        }
      }
      this._pixiRenderer.render(this._loadingScreenContainer);
    }
    unload() {
      const totalElapsedTime = (performance.now() - this._startTimeInMs) / 1e3;
      const remainingTime = this._loadingScreenData.minDuration - totalElapsedTime;
      this.setPercent(100);
      if (remainingTime <= 0) {
        this._state = 2;
        return Promise.resolve();
      }
      return new Promise((resolve) => setTimeout(() => {
        this._state = 2;
        resolve();
      }, remainingTime * 1e3));
    }
  }
  gdjs2.LoadingScreenRenderer = LoadingScreenPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=loadingscreen-pixi-renderer.js.map

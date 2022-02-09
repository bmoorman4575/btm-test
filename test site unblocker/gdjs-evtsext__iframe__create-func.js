gdjs.evtsExt__Iframe__Create = {};

gdjs.evtsExt__Iframe__Create.conditionTrue_0 = {val:false};
gdjs.evtsExt__Iframe__Create.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Iframe__Create.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Iframe__Create.conditionTrue_1 = {val:false};
gdjs.evtsExt__Iframe__Create.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Iframe__Create.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__Iframe__Create.userFunc0x7910f8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const iframe = document.createElement("iframe");

iframe.src = eventsFunctionContext.getArgument("WebsiteURL");
iframe.id = eventsFunctionContext.getArgument("Name");
iframe.setAttribute("width", eventsFunctionContext.getArgument("Width"));
iframe.setAttribute("height", eventsFunctionContext.getArgument("Height"));
iframe.style.top = eventsFunctionContext.getArgument("PositionY") + "px";
iframe.style.left = eventsFunctionContext.getArgument("PositionX") + "px";
iframe.frameBorder = eventsFunctionContext.getArgument("Border");
iframe.frameBorder == "true" ? iframe.frameBorder = "yes" : iframe.frameBorder = "no";
iframe.scrolling = eventsFunctionContext.getArgument("Scrolling");
iframe.scrolling == "true" ? iframe.scrolling = "yes" : iframe.scrolling = "no";
iframe.style.position = "absolute";

iframe.style.cssText += eventsFunctionContext.getArgument("ExtraCSS");


document.body.appendChild(iframe);

};
gdjs.evtsExt__Iframe__Create.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Iframe__Create.userFunc0x7910f8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Iframe__Create.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Iframe__Create.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Iframe__Create.conditionTrue_1 = gdjs.evtsExt__Iframe__Create.condition0IsTrue_0;
gdjs.evtsExt__Iframe__Create.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(6966028);
}
}if (gdjs.evtsExt__Iframe__Create.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Iframe__Create.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Iframe__Create.func = function(runtimeScene, Name, WebsiteURL, Width, Height, PositionX, PositionY, Scrolling, Border, ExtraCSS, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Name") return Name;
if (argName === "WebsiteURL") return WebsiteURL;
if (argName === "Width") return Width;
if (argName === "Height") return Height;
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "Scrolling") return Scrolling;
if (argName === "Border") return Border;
if (argName === "ExtraCSS") return ExtraCSS;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Iframe__Create.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

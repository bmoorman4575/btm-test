gdjs.endCode = {};
gdjs.endCode.GDNewObjectObjects1= [];
gdjs.endCode.GDNewObjectObjects2= [];
gdjs.endCode.GDstaticObjects1= [];
gdjs.endCode.GDstaticObjects2= [];

gdjs.endCode.conditionTrue_0 = {val:false};
gdjs.endCode.condition0IsTrue_0 = {val:false};
gdjs.endCode.condition1IsTrue_0 = {val:false};
gdjs.endCode.conditionTrue_1 = {val:false};
gdjs.endCode.condition0IsTrue_1 = {val:false};
gdjs.endCode.condition1IsTrue_1 = {val:false};


gdjs.endCode.eventsList0 = function(runtimeScene) {

{


gdjs.endCode.condition0IsTrue_0.val = false;
{
gdjs.endCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.endCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.randomFloatInRange(0.9, 1.1), "", 0);
}}

}


{


gdjs.endCode.condition0IsTrue_0.val = false;
{
{gdjs.endCode.conditionTrue_1 = gdjs.endCode.condition0IsTrue_0;
gdjs.endCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15333428);
}
}if (gdjs.endCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "maintheme.mp3", true, 100, 1.2);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "BeepBox-Song (1).mp3", true, 100, 1.2);
}}

}


};

gdjs.endCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endCode.GDNewObjectObjects1.length = 0;
gdjs.endCode.GDNewObjectObjects2.length = 0;
gdjs.endCode.GDstaticObjects1.length = 0;
gdjs.endCode.GDstaticObjects2.length = 0;

gdjs.endCode.eventsList0(runtimeScene);
return;

}

gdjs['endCode'] = gdjs.endCode;

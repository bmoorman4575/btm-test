gdjs.logoCode = {};
gdjs.logoCode.GDlogoObjects1= [];
gdjs.logoCode.GDlogoObjects2= [];

gdjs.logoCode.conditionTrue_0 = {val:false};
gdjs.logoCode.condition0IsTrue_0 = {val:false};
gdjs.logoCode.condition1IsTrue_0 = {val:false};


gdjs.logoCode.eventsList0 = function(runtimeScene) {

{


gdjs.logoCode.condition0IsTrue_0.val = false;
{
gdjs.logoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.logoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.logoCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.logoCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.logoCode.GDlogoObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loading");
}}

}


{


gdjs.logoCode.condition0IsTrue_0.val = false;
{
gdjs.logoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "loading");
}if (gdjs.logoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.logoCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.logoCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.logoCode.GDlogoObjects1[i].setOpacity(gdjs.logoCode.GDlogoObjects1[i].getOpacity() + (50));
}
}}

}


{


gdjs.logoCode.condition0IsTrue_0.val = false;
{
gdjs.logoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "loading");
}if (gdjs.logoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "loading");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "choose service", true);
}}

}


};

gdjs.logoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.logoCode.GDlogoObjects1.length = 0;
gdjs.logoCode.GDlogoObjects2.length = 0;

gdjs.logoCode.eventsList0(runtimeScene);
return;

}

gdjs['logoCode'] = gdjs.logoCode;

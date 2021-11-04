gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDsansObjects1= [];
gdjs.New_32sceneCode.GDsansObjects2= [];
gdjs.New_32sceneCode.GDtextboxObjects1= [];
gdjs.New_32sceneCode.GDtextboxObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7671668);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("textbox"), gdjs.New_32sceneCode.GDtextboxObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDtextboxObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDtextboxObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sans"), gdjs.New_32sceneCode.GDsansObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.randomFloatInRange(0.9, 1.1), "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].rotate(50, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].setPosition(gdjs.randomFloatInRange(200, 500),gdjs.randomFloatInRange(30, 340));
}
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 1920489, 2, 0, 0.001, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.5);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sans"), gdjs.New_32sceneCode.GDsansObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.randomFloatInRange(0.7, 1.9), "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].rotate(5674, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].setPosition(gdjs.randomFloatInRange(200, 500),gdjs.randomFloatInRange(30, 340));
}
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 1920489, 2, 0, 0.001, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 2);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 6;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sans"), gdjs.New_32sceneCode.GDsansObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.randomFloatInRange(0.7, 1.9), "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].rotate(783507834, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].setPosition(gdjs.randomFloatInRange(200, 500),gdjs.randomFloatInRange(30, 340));
}
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 1920489, 2, 0, 0.001, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 2.5);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 7;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sans"), gdjs.New_32sceneCode.GDsansObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.randomFloatInRange(0.7, 1.9), "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].rotate(783507834, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].setPosition(gdjs.randomFloatInRange(200, 500),gdjs.randomFloatInRange(30, 340));
}
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 1920489, 2, 0, 0.001, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 4);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 8;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sans"), gdjs.New_32sceneCode.GDsansObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.randomFloatInRange(0.7, 1.9), "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].rotate(783507834, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].setPosition(gdjs.randomFloatInRange(200, 500),gdjs.randomFloatInRange(30, 340));
}
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 1920489, 2, 0, 0.001, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 5);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 9;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sans"), gdjs.New_32sceneCode.GDsansObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.randomFloatInRange(0.7, 1.9), "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].rotate(783507834, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].setPosition(gdjs.randomFloatInRange(200, 500),gdjs.randomFloatInRange(30, 340));
}
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 1920489, 2, 0, 0.001, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 7);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 10;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sans"), gdjs.New_32sceneCode.GDsansObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.randomFloatInRange(0.7, 1.9), "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].rotate(783507834, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDsansObjects1[i].setPosition(gdjs.randomFloatInRange(200, 500),gdjs.randomFloatInRange(30, 340));
}
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 1920489, 2, 0, 0.001, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 7);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDsansObjects1.length = 0;
gdjs.New_32sceneCode.GDsansObjects2.length = 0;
gdjs.New_32sceneCode.GDtextboxObjects1.length = 0;
gdjs.New_32sceneCode.GDtextboxObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;

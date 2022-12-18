gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDwoodengtri6tObjects1= [];
gdjs.Untitled_32sceneCode.GDwoodengtri6tObjects2= [];
gdjs.Untitled_32sceneCode.GDfunnyObjects1= [];
gdjs.Untitled_32sceneCode.GDfunnyObjects2= [];
gdjs.Untitled_32sceneCode.GDusearrowkeystomoveObjects1= [];
gdjs.Untitled_32sceneCode.GDusearrowkeystomoveObjects2= [];
gdjs.Untitled_32sceneCode.GDplayerObjects1= [];
gdjs.Untitled_32sceneCode.GDplayerObjects2= [];
gdjs.Untitled_32sceneCode.GDgetipgrabedObjects1= [];
gdjs.Untitled_32sceneCode.GDgetipgrabedObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.asyncCallback13105780 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "funy", "https://imghost.pics/image.php?video=UOLS4C.mp4", 0, 0, -(100), -(100), false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback13105780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hi");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("funny"), gdjs.Untitled_32sceneCode.GDfunnyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDfunnyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDfunnyObjects1[i].setString("wait 10 sec's\n " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "hi"))) + " sec's gone bye");
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDplayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDplayerObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDwoodengtri6tObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwoodengtri6tObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfunnyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfunnyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDusearrowkeystomoveObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDusearrowkeystomoveObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDgetipgrabedObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgetipgrabedObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;

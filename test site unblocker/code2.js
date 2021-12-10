gdjs.iframeCode = {};
gdjs.iframeCode.GDpasteObjects1_1final = [];

gdjs.iframeCode.GDpasyetObjects1_1final = [];

gdjs.iframeCode.GDrunObjects1_1final = [];

gdjs.iframeCode.GDruntObjects1_1final = [];

gdjs.iframeCode.GDrunObjects1= [];
gdjs.iframeCode.GDrunObjects2= [];
gdjs.iframeCode.GDpasteObjects1= [];
gdjs.iframeCode.GDpasteObjects2= [];
gdjs.iframeCode.GDruntObjects1= [];
gdjs.iframeCode.GDruntObjects2= [];
gdjs.iframeCode.GDpasyetObjects1= [];
gdjs.iframeCode.GDpasyetObjects2= [];
gdjs.iframeCode.GDurlboxObjects1= [];
gdjs.iframeCode.GDurlboxObjects2= [];
gdjs.iframeCode.GDurlObjects1= [];
gdjs.iframeCode.GDurlObjects2= [];
gdjs.iframeCode.GDinfoObjects1= [];
gdjs.iframeCode.GDinfoObjects2= [];

gdjs.iframeCode.conditionTrue_0 = {val:false};
gdjs.iframeCode.condition0IsTrue_0 = {val:false};
gdjs.iframeCode.condition1IsTrue_0 = {val:false};
gdjs.iframeCode.condition2IsTrue_0 = {val:false};
gdjs.iframeCode.conditionTrue_1 = {val:false};
gdjs.iframeCode.condition0IsTrue_1 = {val:false};
gdjs.iframeCode.condition1IsTrue_1 = {val:false};
gdjs.iframeCode.condition2IsTrue_1 = {val:false};


gdjs.iframeCode.mapOfGDgdjs_46iframeCode_46GDpasteObjects2Objects = Hashtable.newFrom({"paste": gdjs.iframeCode.GDpasteObjects2});gdjs.iframeCode.mapOfGDgdjs_46iframeCode_46GDpasyetObjects2Objects = Hashtable.newFrom({"pasyet": gdjs.iframeCode.GDpasyetObjects2});gdjs.iframeCode.mapOfGDgdjs_46iframeCode_46GDrunObjects2Objects = Hashtable.newFrom({"run": gdjs.iframeCode.GDrunObjects2});gdjs.iframeCode.mapOfGDgdjs_46iframeCode_46GDruntObjects2Objects = Hashtable.newFrom({"runt": gdjs.iframeCode.GDruntObjects2});gdjs.iframeCode.eventsList0 = function(runtimeScene) {

{


gdjs.iframeCode.condition0IsTrue_0.val = false;
{
gdjs.iframeCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.iframeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("url"), gdjs.iframeCode.GDurlObjects1);
gdjs.copyArray(runtimeScene.getObjects("urlbox"), gdjs.iframeCode.GDurlboxObjects1);
{for(var i = 0, len = gdjs.iframeCode.GDurlboxObjects1.length ;i < len;++i) {
    gdjs.iframeCode.GDurlboxObjects1[i].setWidth((( gdjs.iframeCode.GDurlObjects1.length === 0 ) ? 0 :gdjs.iframeCode.GDurlObjects1[0].getWidth()) + 20);
}
}{for(var i = 0, len = gdjs.iframeCode.GDurlObjects1.length ;i < len;++i) {
    gdjs.iframeCode.GDurlObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.iframeCode.GDpasteObjects1.length = 0;

gdjs.iframeCode.GDpasyetObjects1.length = 0;


gdjs.iframeCode.condition0IsTrue_0.val = false;
gdjs.iframeCode.condition1IsTrue_0.val = false;
{
{gdjs.iframeCode.conditionTrue_1 = gdjs.iframeCode.condition0IsTrue_0;
gdjs.iframeCode.GDpasteObjects1_1final.length = 0;gdjs.iframeCode.GDpasyetObjects1_1final.length = 0;gdjs.iframeCode.condition0IsTrue_1.val = false;
gdjs.iframeCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("paste"), gdjs.iframeCode.GDpasteObjects2);
gdjs.iframeCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.iframeCode.mapOfGDgdjs_46iframeCode_46GDpasteObjects2Objects, runtimeScene, true, false);
if( gdjs.iframeCode.condition0IsTrue_1.val ) {
    gdjs.iframeCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.iframeCode.GDpasteObjects2.length;j<jLen;++j) {
        if ( gdjs.iframeCode.GDpasteObjects1_1final.indexOf(gdjs.iframeCode.GDpasteObjects2[j]) === -1 )
            gdjs.iframeCode.GDpasteObjects1_1final.push(gdjs.iframeCode.GDpasteObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("pasyet"), gdjs.iframeCode.GDpasyetObjects2);
gdjs.iframeCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.iframeCode.mapOfGDgdjs_46iframeCode_46GDpasyetObjects2Objects, runtimeScene, true, false);
if( gdjs.iframeCode.condition1IsTrue_1.val ) {
    gdjs.iframeCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.iframeCode.GDpasyetObjects2.length;j<jLen;++j) {
        if ( gdjs.iframeCode.GDpasyetObjects1_1final.indexOf(gdjs.iframeCode.GDpasyetObjects2[j]) === -1 )
            gdjs.iframeCode.GDpasyetObjects1_1final.push(gdjs.iframeCode.GDpasyetObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.iframeCode.GDpasteObjects1_1final, gdjs.iframeCode.GDpasteObjects1);
gdjs.copyArray(gdjs.iframeCode.GDpasyetObjects1_1final, gdjs.iframeCode.GDpasyetObjects1);
}
}
}if ( gdjs.iframeCode.condition0IsTrue_0.val ) {
{
gdjs.iframeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.iframeCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__Clipboard__ReadTextCrossPlaform.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.VariablesContainer.badVariable.setString("");
}}

}


{

gdjs.iframeCode.GDrunObjects1.length = 0;

gdjs.iframeCode.GDruntObjects1.length = 0;


gdjs.iframeCode.condition0IsTrue_0.val = false;
gdjs.iframeCode.condition1IsTrue_0.val = false;
{
{gdjs.iframeCode.conditionTrue_1 = gdjs.iframeCode.condition0IsTrue_0;
gdjs.iframeCode.GDrunObjects1_1final.length = 0;gdjs.iframeCode.GDruntObjects1_1final.length = 0;gdjs.iframeCode.condition0IsTrue_1.val = false;
gdjs.iframeCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("run"), gdjs.iframeCode.GDrunObjects2);
gdjs.iframeCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.iframeCode.mapOfGDgdjs_46iframeCode_46GDrunObjects2Objects, runtimeScene, true, false);
if( gdjs.iframeCode.condition0IsTrue_1.val ) {
    gdjs.iframeCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.iframeCode.GDrunObjects2.length;j<jLen;++j) {
        if ( gdjs.iframeCode.GDrunObjects1_1final.indexOf(gdjs.iframeCode.GDrunObjects2[j]) === -1 )
            gdjs.iframeCode.GDrunObjects1_1final.push(gdjs.iframeCode.GDrunObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("runt"), gdjs.iframeCode.GDruntObjects2);
gdjs.iframeCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.iframeCode.mapOfGDgdjs_46iframeCode_46GDruntObjects2Objects, runtimeScene, true, false);
if( gdjs.iframeCode.condition1IsTrue_1.val ) {
    gdjs.iframeCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.iframeCode.GDruntObjects2.length;j<jLen;++j) {
        if ( gdjs.iframeCode.GDruntObjects1_1final.indexOf(gdjs.iframeCode.GDruntObjects2[j]) === -1 )
            gdjs.iframeCode.GDruntObjects1_1final.push(gdjs.iframeCode.GDruntObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.iframeCode.GDrunObjects1_1final, gdjs.iframeCode.GDrunObjects1);
gdjs.copyArray(gdjs.iframeCode.GDruntObjects1_1final, gdjs.iframeCode.GDruntObjects1);
}
}
}if ( gdjs.iframeCode.condition0IsTrue_0.val ) {
{
gdjs.iframeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.iframeCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "iframe", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.window.getWindowInnerWidth(), gdjs.evtTools.window.getWindowInnerHeight(), 0, 0, true, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
}

}


};

gdjs.iframeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.iframeCode.GDrunObjects1.length = 0;
gdjs.iframeCode.GDrunObjects2.length = 0;
gdjs.iframeCode.GDpasteObjects1.length = 0;
gdjs.iframeCode.GDpasteObjects2.length = 0;
gdjs.iframeCode.GDruntObjects1.length = 0;
gdjs.iframeCode.GDruntObjects2.length = 0;
gdjs.iframeCode.GDpasyetObjects1.length = 0;
gdjs.iframeCode.GDpasyetObjects2.length = 0;
gdjs.iframeCode.GDurlboxObjects1.length = 0;
gdjs.iframeCode.GDurlboxObjects2.length = 0;
gdjs.iframeCode.GDurlObjects1.length = 0;
gdjs.iframeCode.GDurlObjects2.length = 0;
gdjs.iframeCode.GDinfoObjects1.length = 0;
gdjs.iframeCode.GDinfoObjects2.length = 0;

gdjs.iframeCode.eventsList0(runtimeScene);
return;

}

gdjs['iframeCode'] = gdjs.iframeCode;

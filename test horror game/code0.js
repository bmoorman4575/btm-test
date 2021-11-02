gdjs._49Code = {};
gdjs._49Code.forEachCount0_3 = 0;

gdjs._49Code.forEachCount1_3 = 0;

gdjs._49Code.forEachIndex3 = 0;

gdjs._49Code.forEachObjects3 = [];

gdjs._49Code.forEachTotalCount3 = 0;

gdjs._49Code.GDPlayerObjects1= [];
gdjs._49Code.GDPlayerObjects2= [];
gdjs._49Code.GDPlayerObjects3= [];
gdjs._49Code.GDendingObjects1= [];
gdjs._49Code.GDendingObjects2= [];
gdjs._49Code.GDendingObjects3= [];
gdjs._49Code.GDPlatformObjects1= [];
gdjs._49Code.GDPlatformObjects2= [];
gdjs._49Code.GDPlatformObjects3= [];
gdjs._49Code.GDJumpthruObjects1= [];
gdjs._49Code.GDJumpthruObjects2= [];
gdjs._49Code.GDJumpthruObjects3= [];
gdjs._49Code.GDTiledGrassPlatformObjects1= [];
gdjs._49Code.GDTiledGrassPlatformObjects2= [];
gdjs._49Code.GDTiledGrassPlatformObjects3= [];
gdjs._49Code.GDTiledCastlePlatformObjects1= [];
gdjs._49Code.GDTiledCastlePlatformObjects2= [];
gdjs._49Code.GDTiledCastlePlatformObjects3= [];
gdjs._49Code.GDMovingPlatformObjects1= [];
gdjs._49Code.GDMovingPlatformObjects2= [];
gdjs._49Code.GDMovingPlatformObjects3= [];
gdjs._49Code.GDGoLeftObjects1= [];
gdjs._49Code.GDGoLeftObjects2= [];
gdjs._49Code.GDGoLeftObjects3= [];
gdjs._49Code.GDGoRightObjects1= [];
gdjs._49Code.GDGoRightObjects2= [];
gdjs._49Code.GDGoRightObjects3= [];
gdjs._49Code.GDLadderObjects1= [];
gdjs._49Code.GDLadderObjects2= [];
gdjs._49Code.GDLadderObjects3= [];
gdjs._49Code.GDPlayerHitBoxObjects1= [];
gdjs._49Code.GDPlayerHitBoxObjects2= [];
gdjs._49Code.GDPlayerHitBoxObjects3= [];
gdjs._49Code.GDSlimeWalkObjects1= [];
gdjs._49Code.GDSlimeWalkObjects2= [];
gdjs._49Code.GDSlimeWalkObjects3= [];
gdjs._49Code.GDFlyObjects1= [];
gdjs._49Code.GDFlyObjects2= [];
gdjs._49Code.GDFlyObjects3= [];
gdjs._49Code.GDBackgroundObjectsObjects1= [];
gdjs._49Code.GDBackgroundObjectsObjects2= [];
gdjs._49Code.GDBackgroundObjectsObjects3= [];
gdjs._49Code.GDScoreObjects1= [];
gdjs._49Code.GDScoreObjects2= [];
gdjs._49Code.GDScoreObjects3= [];
gdjs._49Code.GDCoinObjects1= [];
gdjs._49Code.GDCoinObjects2= [];
gdjs._49Code.GDCoinObjects3= [];
gdjs._49Code.GDCoinIconObjects1= [];
gdjs._49Code.GDCoinIconObjects2= [];
gdjs._49Code.GDCoinIconObjects3= [];
gdjs._49Code.GDLeftButtonObjects1= [];
gdjs._49Code.GDLeftButtonObjects2= [];
gdjs._49Code.GDLeftButtonObjects3= [];
gdjs._49Code.GDRightButtonObjects1= [];
gdjs._49Code.GDRightButtonObjects2= [];
gdjs._49Code.GDRightButtonObjects3= [];
gdjs._49Code.GDJumpButtonObjects1= [];
gdjs._49Code.GDJumpButtonObjects2= [];
gdjs._49Code.GDJumpButtonObjects3= [];
gdjs._49Code.GDArrowButtonsBgObjects1= [];
gdjs._49Code.GDArrowButtonsBgObjects2= [];
gdjs._49Code.GDArrowButtonsBgObjects3= [];
gdjs._49Code.GDTiledForestBackgroundObjects1= [];
gdjs._49Code.GDTiledForestBackgroundObjects2= [];
gdjs._49Code.GDTiledForestBackgroundObjects3= [];
gdjs._49Code.GDCheckpointObjects1= [];
gdjs._49Code.GDCheckpointObjects2= [];
gdjs._49Code.GDCheckpointObjects3= [];
gdjs._49Code.GDTopButtonObjects1= [];
gdjs._49Code.GDTopButtonObjects2= [];
gdjs._49Code.GDTopButtonObjects3= [];
gdjs._49Code.GDBottomButtonObjects1= [];
gdjs._49Code.GDBottomButtonObjects2= [];
gdjs._49Code.GDBottomButtonObjects3= [];
gdjs._49Code.GDFadeInObjects1= [];
gdjs._49Code.GDFadeInObjects2= [];
gdjs._49Code.GDFadeInObjects3= [];
gdjs._49Code.GDNewObjectObjects1= [];
gdjs._49Code.GDNewObjectObjects2= [];
gdjs._49Code.GDNewObjectObjects3= [];

gdjs._49Code.conditionTrue_0 = {val:false};
gdjs._49Code.condition0IsTrue_0 = {val:false};
gdjs._49Code.condition1IsTrue_0 = {val:false};
gdjs._49Code.condition2IsTrue_0 = {val:false};
gdjs._49Code.conditionTrue_1 = {val:false};
gdjs._49Code.condition0IsTrue_1 = {val:false};
gdjs._49Code.condition1IsTrue_1 = {val:false};
gdjs._49Code.condition2IsTrue_1 = {val:false};


gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs._49Code.GDPlayerHitBoxObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDendingObjects1Objects = Hashtable.newFrom({"ending": gdjs._49Code.GDendingObjects1});gdjs._49Code.eventsList0 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition0IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15217756);
}
}if (gdjs._49Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "https://resources.gdevelop-app.com/examples/platformer/jump.wav", false, 100, 1);
}}

}


};gdjs._49Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._49Code.GDPlayerHitBoxObjects1, gdjs._49Code.GDPlayerHitBoxObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs._49Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDPlayerHitBoxObjects2[k] = gdjs._49Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs._49Code.GDPlayerHitBoxObjects1 */

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDPlayerHitBoxObjects1[k] = gdjs._49Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs._49Code.GDGoLeftObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs._49Code.GDMovingPlatformObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs._49Code.GDGoRightObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs._49Code.GDMovingPlatformObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDGoLeftObjects2Objects = Hashtable.newFrom({"GoLeft": gdjs._49Code.GDGoLeftObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDSlimeWalkObjects2ObjectsGDgdjs_46_9549Code_46GDFlyObjects2Objects = Hashtable.newFrom({"SlimeWalk": gdjs._49Code.GDSlimeWalkObjects2, "Fly": gdjs._49Code.GDFlyObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDGoRightObjects2Objects = Hashtable.newFrom({"GoRight": gdjs._49Code.GDGoRightObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDSlimeWalkObjects2ObjectsGDgdjs_46_9549Code_46GDFlyObjects2Objects = Hashtable.newFrom({"SlimeWalk": gdjs._49Code.GDSlimeWalkObjects2, "Fly": gdjs._49Code.GDFlyObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs._49Code.GDPlayerHitBoxObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46_9549Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs._49Code.GDSlimeWalkObjects1, "Fly": gdjs._49Code.GDFlyObjects1});gdjs._49Code.eventsList2 = function(runtimeScene) {

};gdjs._49Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs._49Code.GDFlyObjects2 */
/* Reuse gdjs._49Code.GDSlimeWalkObjects2 */

gdjs._49Code.forEachTotalCount3 = 0;
gdjs._49Code.forEachObjects3.length = 0;
gdjs._49Code.forEachCount0_3 = gdjs._49Code.GDSlimeWalkObjects2.length;
gdjs._49Code.forEachTotalCount3 += gdjs._49Code.forEachCount0_3;
gdjs._49Code.forEachObjects3.push.apply(gdjs._49Code.forEachObjects3,gdjs._49Code.GDSlimeWalkObjects2);
gdjs._49Code.forEachCount1_3 = gdjs._49Code.GDFlyObjects2.length;
gdjs._49Code.forEachTotalCount3 += gdjs._49Code.forEachCount1_3;
gdjs._49Code.forEachObjects3.push.apply(gdjs._49Code.forEachObjects3,gdjs._49Code.GDFlyObjects2);
for(gdjs._49Code.forEachIndex3 = 0;gdjs._49Code.forEachIndex3 < gdjs._49Code.forEachTotalCount3;++gdjs._49Code.forEachIndex3) {
gdjs._49Code.GDFlyObjects3.length = 0;

gdjs._49Code.GDSlimeWalkObjects3.length = 0;


if (gdjs._49Code.forEachIndex3 < gdjs._49Code.forEachCount0_3) {
    gdjs._49Code.GDSlimeWalkObjects3.push(gdjs._49Code.forEachObjects3[gdjs._49Code.forEachIndex3]);
}
else if (gdjs._49Code.forEachIndex3 < gdjs._49Code.forEachCount0_3+gdjs._49Code.forEachCount1_3) {
    gdjs._49Code.GDFlyObjects3.push(gdjs._49Code.forEachObjects3[gdjs._49Code.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}}
}

}


};gdjs._49Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._49Code.GDPlayerHitBoxObjects1, gdjs._49Code.GDPlayerHitBoxObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDPlayerHitBoxObjects2[k] = gdjs._49Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs._49Code.GDFlyObjects1, gdjs._49Code.GDFlyObjects2);

/* Reuse gdjs._49Code.GDPlayerHitBoxObjects2 */
gdjs.copyArray(gdjs._49Code.GDSlimeWalkObjects1, gdjs._49Code.GDSlimeWalkObjects2);

{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "https://resources.gdevelop-app.com/examples/platformer/jump.wav", false, 100, 1);
}
{ //Subevents
gdjs._49Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs._49Code.GDPlayerHitBoxObjects1 */

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDPlayerHitBoxObjects1[k] = gdjs._49Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


};gdjs._49Code.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs._49Code.GDFlyObjects1, gdjs._49Code.GDFlyObjects2);

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs._49Code.GDGoLeftObjects2);
gdjs.copyArray(gdjs._49Code.GDSlimeWalkObjects1, gdjs._49Code.GDSlimeWalkObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDGoLeftObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDSlimeWalkObjects2ObjectsGDgdjs_46_9549Code_46GDFlyObjects2Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDFlyObjects2 */
/* Reuse gdjs._49Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects2[i].returnVariable(gdjs._49Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].returnVariable(gdjs._49Code.GDFlyObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDFlyObjects1, gdjs._49Code.GDFlyObjects2);

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs._49Code.GDGoRightObjects2);
gdjs.copyArray(gdjs._49Code.GDSlimeWalkObjects1, gdjs._49Code.GDSlimeWalkObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDGoRightObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDSlimeWalkObjects2ObjectsGDgdjs_46_9549Code_46GDFlyObjects2Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDFlyObjects2 */
/* Reuse gdjs._49Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects2[i].returnVariable(gdjs._49Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].returnVariable(gdjs._49Code.GDFlyObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDFlyObjects1, gdjs._49Code.GDFlyObjects2);

gdjs.copyArray(gdjs._49Code.GDSlimeWalkObjects1, gdjs._49Code.GDSlimeWalkObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs._49Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDSlimeWalkObjects2[k] = gdjs._49Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDFlyObjects2[i].getVariableNumber(gdjs._49Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDFlyObjects2[k] = gdjs._49Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDFlyObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDFlyObjects2 */
/* Reuse gdjs._49Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDFlyObjects1, gdjs._49Code.GDFlyObjects2);

gdjs.copyArray(gdjs._49Code.GDSlimeWalkObjects1, gdjs._49Code.GDSlimeWalkObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs._49Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDSlimeWalkObjects2[k] = gdjs._49Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDFlyObjects2[i].getVariableNumber(gdjs._49Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDFlyObjects2[k] = gdjs._49Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDFlyObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDFlyObjects2 */
/* Reuse gdjs._49Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs._49Code.GDFlyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);
/* Reuse gdjs._49Code.GDSlimeWalkObjects1 */

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDPlayerHitBoxObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46_9549Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs._49Code.GDPlayerHitBoxObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs._49Code.GDCoinObjects1});gdjs._49Code.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs._49Code.GDScoreObjects1);
{for(var i = 0, len = gdjs._49Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs._49Code.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDLeftButtonObjects2Objects = Hashtable.newFrom({"LeftButton": gdjs._49Code.GDLeftButtonObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDRightButtonObjects2Objects = Hashtable.newFrom({"RightButton": gdjs._49Code.GDRightButtonObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTopButtonObjects2Objects = Hashtable.newFrom({"TopButton": gdjs._49Code.GDTopButtonObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBottomButtonObjects2Objects = Hashtable.newFrom({"BottomButton": gdjs._49Code.GDBottomButtonObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs._49Code.GDJumpButtonObjects1});gdjs._49Code.eventsList7 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._49Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.copyArray(gdjs._49Code.GDLeftButtonObjects1, gdjs._49Code.GDLeftButtonObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDLeftButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDRightButtonObjects1, gdjs._49Code.GDRightButtonObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDRightButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDTopButtonObjects1, gdjs._49Code.GDTopButtonObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTopButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDBottomButtonObjects1, gdjs._49Code.GDBottomButtonObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBottomButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{

/* Reuse gdjs._49Code.GDJumpButtonObjects1 */

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs._49Code.eventsList8 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs._49Code.GDArrowButtonsBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottomButton"), gdjs._49Code.GDBottomButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs._49Code.GDJumpButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs._49Code.GDLeftButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs._49Code.GDRightButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs._49Code.GDTopButtonObjects2);
{for(var i = 0, len = gdjs._49Code.GDLeftButtonObjects2.length ;i < len;++i) {
    gdjs._49Code.GDLeftButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDRightButtonObjects2.length ;i < len;++i) {
    gdjs._49Code.GDRightButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs._49Code.GDJumpButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDArrowButtonsBgObjects2.length ;i < len;++i) {
    gdjs._49Code.GDArrowButtonsBgObjects2[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDTopButtonObjects2.length ;i < len;++i) {
    gdjs._49Code.GDTopButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDBottomButtonObjects2.length ;i < len;++i) {
    gdjs._49Code.GDBottomButtonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs._49Code.GDArrowButtonsBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomButton"), gdjs._49Code.GDBottomButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs._49Code.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs._49Code.GDLeftButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs._49Code.GDRightButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs._49Code.GDTopButtonObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDLeftButtonObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDLeftButtonObjects1[i].isVisible() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDLeftButtonObjects1[k] = gdjs._49Code.GDLeftButtonObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDLeftButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDRightButtonObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDRightButtonObjects1[i].isVisible() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDRightButtonObjects1[k] = gdjs._49Code.GDRightButtonObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDRightButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDJumpButtonObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDJumpButtonObjects1[i].isVisible() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDJumpButtonObjects1[k] = gdjs._49Code.GDJumpButtonObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDJumpButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDArrowButtonsBgObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDArrowButtonsBgObjects1[i].isVisible() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDArrowButtonsBgObjects1[k] = gdjs._49Code.GDArrowButtonsBgObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDArrowButtonsBgObjects1.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDTopButtonObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDTopButtonObjects1[i].isVisible() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDTopButtonObjects1[k] = gdjs._49Code.GDTopButtonObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDTopButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDBottomButtonObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDBottomButtonObjects1[i].isVisible() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDBottomButtonObjects1[k] = gdjs._49Code.GDBottomButtonObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDBottomButtonObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDPlayerHitBoxObjects2Objects = Hashtable.newFrom({"PlayerHitBox": gdjs._49Code.GDPlayerHitBoxObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCheckpointObjects2Objects = Hashtable.newFrom({"Checkpoint": gdjs._49Code.GDCheckpointObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDFadeInObjects2Objects = Hashtable.newFrom({"FadeIn": gdjs._49Code.GDFadeInObjects2});gdjs._49Code.eventsList9 = function(runtimeScene) {

{



}


{


{
gdjs._49Code.GDFadeInObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDFadeInObjects2Objects, 0, 0, "GUI");
}{for(var i = 0, len = gdjs._49Code.GDFadeInObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFadeInObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs._49Code.GDFadeInObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFadeInObjects2[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs._49Code.GDFadeInObjects2.length ;i < len;++i) {
    gdjs._49Code.GDFadeInObjects2[i].getBehavior("Tween").addObjectOpacityTween("FadeIn", 0, "easeInQuad", 1500, true);
}
}}

}


};gdjs._49Code.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs._49Code.GDCheckpointObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects2);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDPlayerHitBoxObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCheckpointObjects2Objects, false, runtimeScene, false);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition1IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15242868);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCheckpointObjects2 */
{runtimeScene.getVariables().getFromIndex(1).setNumber((( gdjs._49Code.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs._49Code.GDCheckpointObjects2[0].getPointX("")));
}{runtimeScene.getVariables().getFromIndex(2).setNumber((( gdjs._49Code.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs._49Code.GDCheckpointObjects2[0].getPointY("")));
}}

}


{



}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) - (gdjs._49Code.GDPlayerHitBoxObjects2[i].getHeight()));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "life lost sound.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}
{ //Subevents
gdjs._49Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects2);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerHitBoxObjects2[i].getY() > 1000 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDPlayerHitBoxObjects2[k] = gdjs._49Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{



}


};gdjs._49Code.eventsList11 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerHitBoxObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "maintheme.mp3", true, 100, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].setCenterPositionInScene((( gdjs._49Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs._49Code.GDPlayerHitBoxObjects1[0].getCenterXInScene()),(( gdjs._49Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs._49Code.GDPlayerHitBoxObjects1[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("ending"), gdjs._49Code.GDendingObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDPlayerHitBoxObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDendingObjects1Objects, false, runtimeScene, false);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition1IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15215868);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDPlayerHitBoxObjects1[k] = gdjs._49Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}
{ //Subevents
gdjs._49Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDPlayerHitBoxObjects1[k] = gdjs._49Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDPlayerHitBoxObjects1[k] = gdjs._49Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDPlayerHitBoxObjects1[k] = gdjs._49Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs._49Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._49Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs._49Code.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs._49Code.GDGoRightObjects1);
{for(var i = 0, len = gdjs._49Code.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs._49Code.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._49Code.GDGoRightObjects1.length ;i < len;++i) {
    gdjs._49Code.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs._49Code.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs._49Code.GDMovingPlatformObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDGoLeftObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs._49Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs._49Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs._49Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs._49Code.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs._49Code.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs._49Code.GDMovingPlatformObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDGoRightObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDMovingPlatformObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs._49Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs._49Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs._49Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs._49Code.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs._49Code.GDFlyObjects1);
{for(var i = 0, len = gdjs._49Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs._49Code.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs._49Code.GDSlimeWalkObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDSlimeWalkObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDSlimeWalkObjects1[k] = gdjs._49Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDFlyObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDFlyObjects1[k] = gdjs._49Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDFlyObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs._49Code.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs._49Code.GDSlimeWalkObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDSlimeWalkObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDSlimeWalkObjects1[k] = gdjs._49Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDFlyObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDFlyObjects1[k] = gdjs._49Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDFlyObjects1.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDSlimeWalkObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDSlimeWalkObjects1[k] = gdjs._49Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs._49Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDFlyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDFlyObjects1[k] = gdjs._49Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDFlyObjects1.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDFlyObjects1 */
/* Reuse gdjs._49Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs._49Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs._49Code.GDSlimeWalkObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
for(var i = 0, len = gdjs._49Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDFlyObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs._49Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs._49Code.GDPlayerHitBoxObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDPlayerHitBoxObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCoinObjects1[k] = gdjs._49Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCoinObjects1.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "https://resources.gdevelop-app.com/examples/platformer/coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs._49Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCoinObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeInQuad", 700, true);
}
}{for(var i = 0, len = gdjs._49Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCoinObjects1[i].getBehavior("Tween").addObjectPositionYTween("MoveUp", (gdjs._49Code.GDCoinObjects1[i].getPointY("")) - 50, "easeOutQuad", 700, false);
}
}}

}


{


gdjs._49Code.eventsList6(runtimeScene);
}


{


gdjs._49Code.eventsList8(runtimeScene);
}


{


gdjs._49Code.eventsList10(runtimeScene);
}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDPlayerObjects1.length = 0;
gdjs._49Code.GDPlayerObjects2.length = 0;
gdjs._49Code.GDPlayerObjects3.length = 0;
gdjs._49Code.GDendingObjects1.length = 0;
gdjs._49Code.GDendingObjects2.length = 0;
gdjs._49Code.GDendingObjects3.length = 0;
gdjs._49Code.GDPlatformObjects1.length = 0;
gdjs._49Code.GDPlatformObjects2.length = 0;
gdjs._49Code.GDPlatformObjects3.length = 0;
gdjs._49Code.GDJumpthruObjects1.length = 0;
gdjs._49Code.GDJumpthruObjects2.length = 0;
gdjs._49Code.GDJumpthruObjects3.length = 0;
gdjs._49Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs._49Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs._49Code.GDTiledGrassPlatformObjects3.length = 0;
gdjs._49Code.GDTiledCastlePlatformObjects1.length = 0;
gdjs._49Code.GDTiledCastlePlatformObjects2.length = 0;
gdjs._49Code.GDTiledCastlePlatformObjects3.length = 0;
gdjs._49Code.GDMovingPlatformObjects1.length = 0;
gdjs._49Code.GDMovingPlatformObjects2.length = 0;
gdjs._49Code.GDMovingPlatformObjects3.length = 0;
gdjs._49Code.GDGoLeftObjects1.length = 0;
gdjs._49Code.GDGoLeftObjects2.length = 0;
gdjs._49Code.GDGoLeftObjects3.length = 0;
gdjs._49Code.GDGoRightObjects1.length = 0;
gdjs._49Code.GDGoRightObjects2.length = 0;
gdjs._49Code.GDGoRightObjects3.length = 0;
gdjs._49Code.GDLadderObjects1.length = 0;
gdjs._49Code.GDLadderObjects2.length = 0;
gdjs._49Code.GDLadderObjects3.length = 0;
gdjs._49Code.GDPlayerHitBoxObjects1.length = 0;
gdjs._49Code.GDPlayerHitBoxObjects2.length = 0;
gdjs._49Code.GDPlayerHitBoxObjects3.length = 0;
gdjs._49Code.GDSlimeWalkObjects1.length = 0;
gdjs._49Code.GDSlimeWalkObjects2.length = 0;
gdjs._49Code.GDSlimeWalkObjects3.length = 0;
gdjs._49Code.GDFlyObjects1.length = 0;
gdjs._49Code.GDFlyObjects2.length = 0;
gdjs._49Code.GDFlyObjects3.length = 0;
gdjs._49Code.GDBackgroundObjectsObjects1.length = 0;
gdjs._49Code.GDBackgroundObjectsObjects2.length = 0;
gdjs._49Code.GDBackgroundObjectsObjects3.length = 0;
gdjs._49Code.GDScoreObjects1.length = 0;
gdjs._49Code.GDScoreObjects2.length = 0;
gdjs._49Code.GDScoreObjects3.length = 0;
gdjs._49Code.GDCoinObjects1.length = 0;
gdjs._49Code.GDCoinObjects2.length = 0;
gdjs._49Code.GDCoinObjects3.length = 0;
gdjs._49Code.GDCoinIconObjects1.length = 0;
gdjs._49Code.GDCoinIconObjects2.length = 0;
gdjs._49Code.GDCoinIconObjects3.length = 0;
gdjs._49Code.GDLeftButtonObjects1.length = 0;
gdjs._49Code.GDLeftButtonObjects2.length = 0;
gdjs._49Code.GDLeftButtonObjects3.length = 0;
gdjs._49Code.GDRightButtonObjects1.length = 0;
gdjs._49Code.GDRightButtonObjects2.length = 0;
gdjs._49Code.GDRightButtonObjects3.length = 0;
gdjs._49Code.GDJumpButtonObjects1.length = 0;
gdjs._49Code.GDJumpButtonObjects2.length = 0;
gdjs._49Code.GDJumpButtonObjects3.length = 0;
gdjs._49Code.GDArrowButtonsBgObjects1.length = 0;
gdjs._49Code.GDArrowButtonsBgObjects2.length = 0;
gdjs._49Code.GDArrowButtonsBgObjects3.length = 0;
gdjs._49Code.GDTiledForestBackgroundObjects1.length = 0;
gdjs._49Code.GDTiledForestBackgroundObjects2.length = 0;
gdjs._49Code.GDTiledForestBackgroundObjects3.length = 0;
gdjs._49Code.GDCheckpointObjects1.length = 0;
gdjs._49Code.GDCheckpointObjects2.length = 0;
gdjs._49Code.GDCheckpointObjects3.length = 0;
gdjs._49Code.GDTopButtonObjects1.length = 0;
gdjs._49Code.GDTopButtonObjects2.length = 0;
gdjs._49Code.GDTopButtonObjects3.length = 0;
gdjs._49Code.GDBottomButtonObjects1.length = 0;
gdjs._49Code.GDBottomButtonObjects2.length = 0;
gdjs._49Code.GDBottomButtonObjects3.length = 0;
gdjs._49Code.GDFadeInObjects1.length = 0;
gdjs._49Code.GDFadeInObjects2.length = 0;
gdjs._49Code.GDFadeInObjects3.length = 0;
gdjs._49Code.GDNewObjectObjects1.length = 0;
gdjs._49Code.GDNewObjectObjects2.length = 0;
gdjs._49Code.GDNewObjectObjects3.length = 0;

gdjs._49Code.eventsList11(runtimeScene);
return;

}

gdjs['_49Code'] = gdjs._49Code;

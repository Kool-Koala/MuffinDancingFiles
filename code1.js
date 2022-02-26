gdjs.MuffinDancingCode = {};
gdjs.MuffinDancingCode.GDMuffinDancingObjects1= [];
gdjs.MuffinDancingCode.GDMuffinDancingObjects2= [];
gdjs.MuffinDancingCode.GDQuitButtonObjects1= [];
gdjs.MuffinDancingCode.GDQuitButtonObjects2= [];
gdjs.MuffinDancingCode.GDFollowObjects1= [];
gdjs.MuffinDancingCode.GDFollowObjects2= [];

gdjs.MuffinDancingCode.conditionTrue_0 = {val:false};
gdjs.MuffinDancingCode.condition0IsTrue_0 = {val:false};
gdjs.MuffinDancingCode.condition1IsTrue_0 = {val:false};


gdjs.MuffinDancingCode.mapOfGDgdjs_46MuffinDancingCode_46GDQuitButtonObjects1Objects = Hashtable.newFrom({"QuitButton": gdjs.MuffinDancingCode.GDQuitButtonObjects1});gdjs.MuffinDancingCode.eventsList0 = function(runtimeScene) {

{


gdjs.MuffinDancingCode.condition0IsTrue_0.val = false;
{
gdjs.MuffinDancingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MuffinDancingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MuffinDancingCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MuffinDancingCode.GDQuitButtonObjects1);

gdjs.MuffinDancingCode.condition0IsTrue_0.val = false;
{
gdjs.MuffinDancingCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MuffinDancingCode.mapOfGDgdjs_46MuffinDancingCode_46GDQuitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MuffinDancingCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MuffinDancingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MuffinDancingCode.condition0IsTrue_0.val = false;
{
gdjs.MuffinDancingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MuffinDancingCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MuffinDancing"), gdjs.MuffinDancingCode.GDMuffinDancingObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "Freddy Fazbear's Pizzeria Simulator OST - Just Add Water.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.MuffinDancingCode.GDMuffinDancingObjects1.length ;i < len;++i) {
    gdjs.MuffinDancingCode.GDMuffinDancingObjects1[i].setLoop(true);
}
}{for(var i = 0, len = gdjs.MuffinDancingCode.GDMuffinDancingObjects1.length ;i < len;++i) {
    gdjs.MuffinDancingCode.GDMuffinDancingObjects1[i].play();
}
}}

}


};

gdjs.MuffinDancingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MuffinDancingCode.GDMuffinDancingObjects1.length = 0;
gdjs.MuffinDancingCode.GDMuffinDancingObjects2.length = 0;
gdjs.MuffinDancingCode.GDQuitButtonObjects1.length = 0;
gdjs.MuffinDancingCode.GDQuitButtonObjects2.length = 0;
gdjs.MuffinDancingCode.GDFollowObjects1.length = 0;
gdjs.MuffinDancingCode.GDFollowObjects2.length = 0;

gdjs.MuffinDancingCode.eventsList1(runtimeScene);
return;

}

gdjs['MuffinDancingCode'] = gdjs.MuffinDancingCode;

gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDNOTICEObjects1= [];
gdjs.MainMenuCode.GDNOTICEObjects2= [];
gdjs.MainMenuCode.GDExitObjects1= [];
gdjs.MainMenuCode.GDExitObjects2= [];
gdjs.MainMenuCode.GDPlayObjects1= [];
gdjs.MainMenuCode.GDPlayObjects2= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MainMenuCode.GDPlayObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "MuffinDancing");
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.MainMenuCode.GDExitObjects1});gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDNOTICEObjects1.length = 0;
gdjs.MainMenuCode.GDNOTICEObjects2.length = 0;
gdjs.MainMenuCode.GDExitObjects1.length = 0;
gdjs.MainMenuCode.GDExitObjects2.length = 0;
gdjs.MainMenuCode.GDPlayObjects1.length = 0;
gdjs.MainMenuCode.GDPlayObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;

gdjs.MainMenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;

gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDRegresarObjects1= [];
gdjs.GameOverCode.GDRegresarObjects2= [];
gdjs.GameOverCode.GDNewRecordObjects1= [];
gdjs.GameOverCode.GDNewRecordObjects2= [];
gdjs.GameOverCode.GDPuntosObjects1= [];
gdjs.GameOverCode.GDPuntosObjects2= [];
gdjs.GameOverCode.GDFondoObjects1= [];
gdjs.GameOverCode.GDFondoObjects2= [];


gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDRegresarObjects1Objects = Hashtable.newFrom({"Regresar": gdjs.GameOverCode.GDRegresarObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Regresar"), gdjs.GameOverCode.GDRegresarObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDRegresarObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRegresarObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.GameOverCode.GDFondoObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFondoObjects1[i].setYOffset(gdjs.GameOverCode.GDFondoObjects1[i].getYOffset() - (3));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Puntos"), gdjs.GameOverCode.GDPuntosObjects1);
gdjs.GameOverCode.GDRegresarObjects1.length = 0;

{for(var i = 0, len = gdjs.GameOverCode.GDPuntosObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPuntosObjects1[i].getBehavior("Text").setText("Tu puntuación es de: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine() + "Mayor Puntuación: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDRegresarObjects1Objects, 224, 384, "");
}
{for(var i = 0, len = gdjs.GameOverCode.GDRegresarObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRegresarObjects1[i].getBehavior("Resizable").setHeight(gdjs.GameOverCode.GDRegresarObjects1[i].getBehavior("Resizable").getHeight() + (40));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Regresar"), gdjs.GameOverCode.GDRegresarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDRegresarObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDRegresarObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDRegresarObjects1[k] = gdjs.GameOverCode.GDRegresarObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDRegresarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Audio\\Efectos Sonoros\\iniciarjuego.ogg", false, 100, 1.5);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", true);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11421900);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewRecord"), gdjs.GameOverCode.GDNewRecordObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("record", "puntos", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameOverCode.GDNewRecordObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDNewRecordObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameOverCode.GDNewRecordObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDNewRecordObjects1[i].getBehavior("Flash").Flash(0, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() <= runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11469860);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewRecord"), gdjs.GameOverCode.GDNewRecordObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDNewRecordObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDNewRecordObjects1[i].hide();
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 0, 2);
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDRegresarObjects1.length = 0;
gdjs.GameOverCode.GDRegresarObjects2.length = 0;
gdjs.GameOverCode.GDNewRecordObjects1.length = 0;
gdjs.GameOverCode.GDNewRecordObjects2.length = 0;
gdjs.GameOverCode.GDPuntosObjects1.length = 0;
gdjs.GameOverCode.GDPuntosObjects2.length = 0;
gdjs.GameOverCode.GDFondoObjects1.length = 0;
gdjs.GameOverCode.GDFondoObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDRegresarObjects1.length = 0;
gdjs.GameOverCode.GDRegresarObjects2.length = 0;
gdjs.GameOverCode.GDNewRecordObjects1.length = 0;
gdjs.GameOverCode.GDNewRecordObjects2.length = 0;
gdjs.GameOverCode.GDPuntosObjects1.length = 0;
gdjs.GameOverCode.GDPuntosObjects2.length = 0;
gdjs.GameOverCode.GDFondoObjects1.length = 0;
gdjs.GameOverCode.GDFondoObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;

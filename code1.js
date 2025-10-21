gdjs.Escena1Code = {};
gdjs.Escena1Code.localVariables = [];
gdjs.Escena1Code.idToCallbackMap = new Map();
gdjs.Escena1Code.GDNave_9595pjObjects1= [];
gdjs.Escena1Code.GDNave_9595pjObjects2= [];
gdjs.Escena1Code.GDNave_9595pjObjects3= [];
gdjs.Escena1Code.GDNave_9595pjObjects4= [];
gdjs.Escena1Code.GDBloqueObjects1= [];
gdjs.Escena1Code.GDBloqueObjects2= [];
gdjs.Escena1Code.GDBloqueObjects3= [];
gdjs.Escena1Code.GDBloqueObjects4= [];
gdjs.Escena1Code.GDProyectil_9595pjObjects1= [];
gdjs.Escena1Code.GDProyectil_9595pjObjects2= [];
gdjs.Escena1Code.GDProyectil_9595pjObjects3= [];
gdjs.Escena1Code.GDProyectil_9595pjObjects4= [];
gdjs.Escena1Code.GDFondo_9595EstrellasObjects1= [];
gdjs.Escena1Code.GDFondo_9595EstrellasObjects2= [];
gdjs.Escena1Code.GDFondo_9595EstrellasObjects3= [];
gdjs.Escena1Code.GDFondo_9595EstrellasObjects4= [];
gdjs.Escena1Code.GDAsteroideObjects1= [];
gdjs.Escena1Code.GDAsteroideObjects2= [];
gdjs.Escena1Code.GDAsteroideObjects3= [];
gdjs.Escena1Code.GDAsteroideObjects4= [];
gdjs.Escena1Code.GDTimerObjects1= [];
gdjs.Escena1Code.GDTimerObjects2= [];
gdjs.Escena1Code.GDTimerObjects3= [];
gdjs.Escena1Code.GDTimerObjects4= [];
gdjs.Escena1Code.GDAsteroide_9595menorObjects1= [];
gdjs.Escena1Code.GDAsteroide_9595menorObjects2= [];
gdjs.Escena1Code.GDAsteroide_9595menorObjects3= [];
gdjs.Escena1Code.GDAsteroide_9595menorObjects4= [];
gdjs.Escena1Code.GDExplosionObjects1= [];
gdjs.Escena1Code.GDExplosionObjects2= [];
gdjs.Escena1Code.GDExplosionObjects3= [];
gdjs.Escena1Code.GDExplosionObjects4= [];
gdjs.Escena1Code.GDBarra_9595vidaObjects1= [];
gdjs.Escena1Code.GDBarra_9595vidaObjects2= [];
gdjs.Escena1Code.GDBarra_9595vidaObjects3= [];
gdjs.Escena1Code.GDBarra_9595vidaObjects4= [];
gdjs.Escena1Code.GDPuntosObjects1= [];
gdjs.Escena1Code.GDPuntosObjects2= [];
gdjs.Escena1Code.GDPuntosObjects3= [];
gdjs.Escena1Code.GDPuntosObjects4= [];
gdjs.Escena1Code.GDFondoObjects1= [];
gdjs.Escena1Code.GDFondoObjects2= [];
gdjs.Escena1Code.GDFondoObjects3= [];
gdjs.Escena1Code.GDFondoObjects4= [];


gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDBloqueObjects1Objects = Hashtable.newFrom({"Bloque": gdjs.Escena1Code.GDBloqueObjects1});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDProyectil_95959595pjObjects3Objects = Hashtable.newFrom({"Proyectil_pj": gdjs.Escena1Code.GDProyectil_9595pjObjects3});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDProyectil_95959595pjObjects2Objects = Hashtable.newFrom({"Proyectil_pj": gdjs.Escena1Code.GDProyectil_9595pjObjects2});
gdjs.Escena1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Escena1Code.GDNave_9595pjObjects2, gdjs.Escena1Code.GDNave_9595pjObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena1Code.GDNave_9595pjObjects3.length;i<l;++i) {
    if ( gdjs.Escena1Code.GDNave_9595pjObjects3[i].getVariableBoolean(gdjs.Escena1Code.GDNave_9595pjObjects3[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Escena1Code.GDNave_9595pjObjects3[k] = gdjs.Escena1Code.GDNave_9595pjObjects3[i];
        ++k;
    }
}
gdjs.Escena1Code.GDNave_9595pjObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena1Code.GDNave_9595pjObjects3 */
gdjs.Escena1Code.GDProyectil_9595pjObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDProyectil_95959595pjObjects3Objects, (( gdjs.Escena1Code.GDNave_9595pjObjects3.length === 0 ) ? 0 :gdjs.Escena1Code.GDNave_9595pjObjects3[0].getPointX("DisparoIzq")), (( gdjs.Escena1Code.GDNave_9595pjObjects3.length === 0 ) ? 0 :gdjs.Escena1Code.GDNave_9595pjObjects3[0].getPointY("DisparoIzq")), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDProyectil_9595pjObjects3.length ;i < len;++i) {
    gdjs.Escena1Code.GDProyectil_9595pjObjects3[i].addForce(0, -(300), 1);
}
}
{for(var i = 0, len = gdjs.Escena1Code.GDProyectil_9595pjObjects3.length ;i < len;++i) {
    gdjs.Escena1Code.GDProyectil_9595pjObjects3[i].resetTimer("disparo");
}
}
{for(var i = 0, len = gdjs.Escena1Code.GDProyectil_9595pjObjects3.length ;i < len;++i) {
    gdjs.Escena1Code.GDProyectil_9595pjObjects3[i].getBehavior("FlashOpacity").Flash("Tween", 0, 100, null);
}
}
}

}


{

/* Reuse gdjs.Escena1Code.GDNave_9595pjObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena1Code.GDNave_9595pjObjects2.length;i<l;++i) {
    if ( gdjs.Escena1Code.GDNave_9595pjObjects2[i].getVariableBoolean(gdjs.Escena1Code.GDNave_9595pjObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Escena1Code.GDNave_9595pjObjects2[k] = gdjs.Escena1Code.GDNave_9595pjObjects2[i];
        ++k;
    }
}
gdjs.Escena1Code.GDNave_9595pjObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena1Code.GDNave_9595pjObjects2 */
gdjs.Escena1Code.GDProyectil_9595pjObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDProyectil_95959595pjObjects2Objects, (( gdjs.Escena1Code.GDNave_9595pjObjects2.length === 0 ) ? 0 :gdjs.Escena1Code.GDNave_9595pjObjects2[0].getPointX("DisparoDer")), (( gdjs.Escena1Code.GDNave_9595pjObjects2.length === 0 ) ? 0 :gdjs.Escena1Code.GDNave_9595pjObjects2[0].getPointY("DisparoDer")), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDProyectil_9595pjObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDProyectil_9595pjObjects2[i].addForce(0, -(300), 1);
}
}
{for(var i = 0, len = gdjs.Escena1Code.GDProyectil_9595pjObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDProyectil_9595pjObjects2[i].getBehavior("FlashOpacity").Flash("Tween", 0, 100, null);
}
}
{for(var i = 0, len = gdjs.Escena1Code.GDProyectil_9595pjObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDProyectil_9595pjObjects2[i].resetTimer("disparo");
}
}
}

}


};gdjs.Escena1Code.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11399324);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Nave_pj"), gdjs.Escena1Code.GDNave_9595pjObjects2);
{for(var i = 0, len = gdjs.Escena1Code.GDNave_9595pjObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDNave_9595pjObjects2[i].returnVariable(gdjs.Escena1Code.GDNave_9595pjObjects2[i].getVariables().getFromIndex(0)).toggle();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Audio\\Efectos Sonoros\\disparo.wav", false, 100, 1);
}

{ //Subevents
gdjs.Escena1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Proyectil_pj"), gdjs.Escena1Code.GDProyectil_9595pjObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena1Code.GDProyectil_9595pjObjects1.length;i<l;++i) {
    if ( gdjs.Escena1Code.GDProyectil_9595pjObjects1[i].getTimerElapsedTimeInSecondsOrNaN("disparo") >= 0.7 ) {
        isConditionTrue_0 = true;
        gdjs.Escena1Code.GDProyectil_9595pjObjects1[k] = gdjs.Escena1Code.GDProyectil_9595pjObjects1[i];
        ++k;
    }
}
gdjs.Escena1Code.GDProyectil_9595pjObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena1Code.GDProyectil_9595pjObjects1 */
{for(var i = 0, len = gdjs.Escena1Code.GDProyectil_9595pjObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDProyectil_9595pjObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects3Objects = Hashtable.newFrom({"Asteroide": gdjs.Escena1Code.GDAsteroideObjects3});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects2Objects = Hashtable.newFrom({"Asteroide": gdjs.Escena1Code.GDAsteroideObjects2});
gdjs.Escena1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.Escena1Code.GDAsteroideObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects3Objects, gdjs.randomInRange(43, 587), -(10), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroideObjects3.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroideObjects3[i].addForce(0, gdjs.randomFloatInRange(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 50, runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 1.5), 1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.Escena1Code.GDAsteroideObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects2Objects, gdjs.randomInRange(43, 587), -(10), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroideObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroideObjects2[i].addForce(0, gdjs.randomFloatInRange(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 50, runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 1.5), 1);
}
}
}

}


};gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects2Objects = Hashtable.newFrom({"Asteroide": gdjs.Escena1Code.GDAsteroideObjects2});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects2Objects = Hashtable.newFrom({"Asteroide": gdjs.Escena1Code.GDAsteroideObjects2});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects1Objects = Hashtable.newFrom({"Asteroide": gdjs.Escena1Code.GDAsteroideObjects1});
gdjs.Escena1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.Escena1Code.GDAsteroideObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects2Objects, gdjs.randomInRange(43, 587), -(10), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroideObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroideObjects2[i].addForce(0, gdjs.randomFloatInRange(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 1.5), 1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.Escena1Code.GDAsteroideObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects2Objects, gdjs.randomInRange(43, 587), -(10), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroideObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroideObjects2[i].addForce(0, gdjs.randomFloatInRange(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 50, runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 1.5), 1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.Escena1Code.GDAsteroideObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects1Objects, gdjs.randomInRange(43, 587), -(10), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroideObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroideObjects1[i].addForce(0, gdjs.randomFloatInRange(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 50, runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 1.5), 1);
}
}
}

}


};gdjs.Escena1Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Escena1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Escena1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Escena1Code.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Asteroide");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Escena1Code.GDTimerObjects2);
{for(var i = 0, len = gdjs.Escena1Code.GDTimerObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDTimerObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Asteroide")));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Asteroide") >= runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11410268);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Asteroide");
}
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}

{ //Subevents
gdjs.Escena1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDProyectil_95959595pjObjects1Objects = Hashtable.newFrom({"Proyectil_pj": gdjs.Escena1Code.GDProyectil_9595pjObjects1});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects1Objects = Hashtable.newFrom({"Asteroide": gdjs.Escena1Code.GDAsteroideObjects1});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Escena1Code.GDExplosionObjects1});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects2Objects = Hashtable.newFrom({"Asteroide_menor": gdjs.Escena1Code.GDAsteroide_9595menorObjects2});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects2Objects = Hashtable.newFrom({"Asteroide_menor": gdjs.Escena1Code.GDAsteroide_9595menorObjects2});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects2Objects = Hashtable.newFrom({"Asteroide_menor": gdjs.Escena1Code.GDAsteroide_9595menorObjects2});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects1Objects = Hashtable.newFrom({"Asteroide_menor": gdjs.Escena1Code.GDAsteroide_9595menorObjects1});
gdjs.Escena1Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Escena1Code.GDAsteroideObjects1, gdjs.Escena1Code.GDAsteroideObjects2);

gdjs.Escena1Code.GDAsteroide_9595menorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects2Objects, (( gdjs.Escena1Code.GDAsteroideObjects2.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects2[0].getPointX("")), (( gdjs.Escena1Code.GDAsteroideObjects2.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects2[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroide_9595menorObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroide_9595menorObjects2[i].addForce(-(150), -(150), 1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Escena1Code.GDAsteroideObjects1, gdjs.Escena1Code.GDAsteroideObjects2);

gdjs.Escena1Code.GDAsteroide_9595menorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects2Objects, (( gdjs.Escena1Code.GDAsteroideObjects2.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects2[0].getPointX("")), (( gdjs.Escena1Code.GDAsteroideObjects2.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects2[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroide_9595menorObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroide_9595menorObjects2[i].addForce(-(150), 150, 1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Escena1Code.GDAsteroideObjects1, gdjs.Escena1Code.GDAsteroideObjects2);

gdjs.Escena1Code.GDAsteroide_9595menorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects2Objects, (( gdjs.Escena1Code.GDAsteroideObjects2.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects2[0].getPointX("")), (( gdjs.Escena1Code.GDAsteroideObjects2.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects2[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroide_9595menorObjects2.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroide_9595menorObjects2[i].addForce(150, 150, 1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Escena1Code.GDAsteroideObjects1 */
gdjs.Escena1Code.GDAsteroide_9595menorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects1Objects, (( gdjs.Escena1Code.GDAsteroideObjects1.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects1[0].getPointX("")), (( gdjs.Escena1Code.GDAsteroideObjects1.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroide_9595menorObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroide_9595menorObjects1[i].addForce(150, -(150), 1);
}
}
}

}


};gdjs.Escena1Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 0.1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(0.1);
}
}

}


};gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDNave_95959595pjObjects1Objects = Hashtable.newFrom({"Nave_pj": gdjs.Escena1Code.GDNave_9595pjObjects1});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects1ObjectsGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects1Objects = Hashtable.newFrom({"Asteroide": gdjs.Escena1Code.GDAsteroideObjects1, "Asteroide_menor": gdjs.Escena1Code.GDAsteroide_9595menorObjects1});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Escena1Code.GDExplosionObjects1});
gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Escena1Code.GDExplosionObjects1});
gdjs.Escena1Code.asyncCallback11400788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Escena1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}
gdjs.Escena1Code.localVariables.length = 0;
}
gdjs.Escena1Code.idToCallbackMap.set(11400788, gdjs.Escena1Code.asyncCallback11400788);
gdjs.Escena1Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Escena1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Escena1Code.asyncCallback11400788(runtimeScene, asyncObjectsList)), 11400788, asyncObjectsList);
}
}

}


};gdjs.Escena1Code.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bloque"), gdjs.Escena1Code.GDBloqueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nave_pj"), gdjs.Escena1Code.GDNave_9595pjObjects1);
{for(var i = 0, len = gdjs.Escena1Code.GDNave_9595pjObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDNave_9595pjObjects1[i].separateFromObjectsList(gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDBloqueObjects1Objects, true);
}
}
}

}


{


gdjs.Escena1Code.eventsList1(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.Escena1Code.GDFondoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo_Estrellas"), gdjs.Escena1Code.GDFondo_9595EstrellasObjects1);
{for(var i = 0, len = gdjs.Escena1Code.GDFondoObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDFondoObjects1[i].setYOffset(gdjs.Escena1Code.GDFondoObjects1[i].getYOffset() + (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / 2));
}
}
{for(var i = 0, len = gdjs.Escena1Code.GDFondo_9595EstrellasObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDFondo_9595EstrellasObjects1[i].setYOffset(gdjs.Escena1Code.GDFondo_9595EstrellasObjects1[i].getYOffset() + (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()));
}
}
}

}


{


gdjs.Escena1Code.eventsList5(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroide"), gdjs.Escena1Code.GDAsteroideObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena1Code.GDAsteroideObjects1.length;i<l;++i) {
    if ( gdjs.Escena1Code.GDAsteroideObjects1[i].getY() > 520 ) {
        isConditionTrue_0 = true;
        gdjs.Escena1Code.GDAsteroideObjects1[k] = gdjs.Escena1Code.GDAsteroideObjects1[i];
        ++k;
    }
}
gdjs.Escena1Code.GDAsteroideObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena1Code.GDAsteroideObjects1 */
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroideObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroideObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroide"), gdjs.Escena1Code.GDAsteroideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Proyectil_pj"), gdjs.Escena1Code.GDProyectil_9595pjObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDProyectil_95959595pjObjects1Objects, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11421044);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Escena1Code.GDAsteroideObjects1 */
/* Reuse gdjs.Escena1Code.GDProyectil_9595pjObjects1 */
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroideObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroideObjects1[i].returnVariable(gdjs.Escena1Code.GDAsteroideObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.Escena1Code.GDProyectil_9595pjObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDProyectil_9595pjObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroide"), gdjs.Escena1Code.GDAsteroideObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena1Code.GDAsteroideObjects1.length;i<l;++i) {
    if ( gdjs.Escena1Code.GDAsteroideObjects1[i].getVariableNumber(gdjs.Escena1Code.GDAsteroideObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Escena1Code.GDAsteroideObjects1[k] = gdjs.Escena1Code.GDAsteroideObjects1[i];
        ++k;
    }
}
gdjs.Escena1Code.GDAsteroideObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11422460);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Escena1Code.GDAsteroideObjects1 */
gdjs.Escena1Code.GDExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.Escena1Code.GDAsteroideObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroideObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDExplosionObjects1Objects, (( gdjs.Escena1Code.GDAsteroideObjects1.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects1[0].getPointX("")), (( gdjs.Escena1Code.GDAsteroideObjects1.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Audio\\Efectos Sonoros\\explosion.wav", false, 100, 1);
}

{ //Subevents
gdjs.Escena1Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Escena1Code.GDExplosionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena1Code.GDExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Escena1Code.GDExplosionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Escena1Code.GDExplosionObjects1[k] = gdjs.Escena1Code.GDExplosionObjects1[i];
        ++k;
    }
}
gdjs.Escena1Code.GDExplosionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena1Code.GDExplosionObjects1 */
{for(var i = 0, len = gdjs.Escena1Code.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDExplosionObjects1[i].deleteFromScene(runtimeScene);
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11406572);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dificultad");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dificultad") >= 8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10417804);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dificultad");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(10);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(0.5);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(50);
}

{ //Subevents
gdjs.Escena1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Barra_vida"), gdjs.Escena1Code.GDBarra_9595vidaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Puntos"), gdjs.Escena1Code.GDPuntosObjects1);
{for(var i = 0, len = gdjs.Escena1Code.GDBarra_9595vidaObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDBarra_9595vidaObjects1[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.Escena1Code.GDPuntosObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDPuntosObjects1[i].getBehavior("Text").setText("Record: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + gdjs.evtTools.string.newLine() + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroide"), gdjs.Escena1Code.GDAsteroideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Asteroide_menor"), gdjs.Escena1Code.GDAsteroide_9595menorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nave_pj"), gdjs.Escena1Code.GDNave_9595pjObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDNave_95959595pjObjects1Objects, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDAsteroideObjects1ObjectsGDgdjs_9546Escena1Code_9546GDAsteroide_95959595menorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena1Code.GDNave_9595pjObjects1.length;i<l;++i) {
    if ( !(gdjs.Escena1Code.GDNave_9595pjObjects1[i].getBehavior("Flash").IsFlashing(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Escena1Code.GDNave_9595pjObjects1[k] = gdjs.Escena1Code.GDNave_9595pjObjects1[i];
        ++k;
    }
}
gdjs.Escena1Code.GDNave_9595pjObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11420588);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Escena1Code.GDAsteroideObjects1 */
/* Reuse gdjs.Escena1Code.GDAsteroide_9595menorObjects1 */
/* Reuse gdjs.Escena1Code.GDNave_9595pjObjects1 */
gdjs.Escena1Code.GDExplosionObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}
{for(var i = 0, len = gdjs.Escena1Code.GDNave_9595pjObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDNave_9595pjObjects1[i].getBehavior("Flash").Flash(2.5, null);
}
}
{for(var i = 0, len = gdjs.Escena1Code.GDAsteroideObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroideObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Escena1Code.GDAsteroide_9595menorObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDAsteroide_9595menorObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDExplosionObjects1Objects, (( gdjs.Escena1Code.GDAsteroide_9595menorObjects1.length === 0 ) ? (( gdjs.Escena1Code.GDAsteroideObjects1.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects1[0].getPointX("")) :gdjs.Escena1Code.GDAsteroide_9595menorObjects1[0].getPointX("")), (( gdjs.Escena1Code.GDAsteroide_9595menorObjects1.length === 0 ) ? (( gdjs.Escena1Code.GDAsteroideObjects1.length === 0 ) ? 0 :gdjs.Escena1Code.GDAsteroideObjects1[0].getPointY("")) :gdjs.Escena1Code.GDAsteroide_9595menorObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Audio\\Efectos Sonoros\\colisionnave.wav", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11400604);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Nave_pj"), gdjs.Escena1Code.GDNave_9595pjObjects1);
gdjs.Escena1Code.GDExplosionObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Audio\\Efectos Sonoros\\explosion.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.Escena1Code.GDNave_9595pjObjects1.length ;i < len;++i) {
    gdjs.Escena1Code.GDNave_9595pjObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Escena1Code.mapOfGDgdjs_9546Escena1Code_9546GDExplosionObjects1Objects, (( gdjs.Escena1Code.GDNave_9595pjObjects1.length === 0 ) ? 0 :gdjs.Escena1Code.GDNave_9595pjObjects1[0].getPointX("")), (( gdjs.Escena1Code.GDNave_9595pjObjects1.length === 0 ) ? 0 :gdjs.Escena1Code.GDNave_9595pjObjects1[0].getPointY("")), "");
}

{ //Subevents
gdjs.Escena1Code.eventsList8(runtimeScene);} //End of subevents
}

}


};

gdjs.Escena1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena1Code.GDNave_9595pjObjects1.length = 0;
gdjs.Escena1Code.GDNave_9595pjObjects2.length = 0;
gdjs.Escena1Code.GDNave_9595pjObjects3.length = 0;
gdjs.Escena1Code.GDNave_9595pjObjects4.length = 0;
gdjs.Escena1Code.GDBloqueObjects1.length = 0;
gdjs.Escena1Code.GDBloqueObjects2.length = 0;
gdjs.Escena1Code.GDBloqueObjects3.length = 0;
gdjs.Escena1Code.GDBloqueObjects4.length = 0;
gdjs.Escena1Code.GDProyectil_9595pjObjects1.length = 0;
gdjs.Escena1Code.GDProyectil_9595pjObjects2.length = 0;
gdjs.Escena1Code.GDProyectil_9595pjObjects3.length = 0;
gdjs.Escena1Code.GDProyectil_9595pjObjects4.length = 0;
gdjs.Escena1Code.GDFondo_9595EstrellasObjects1.length = 0;
gdjs.Escena1Code.GDFondo_9595EstrellasObjects2.length = 0;
gdjs.Escena1Code.GDFondo_9595EstrellasObjects3.length = 0;
gdjs.Escena1Code.GDFondo_9595EstrellasObjects4.length = 0;
gdjs.Escena1Code.GDAsteroideObjects1.length = 0;
gdjs.Escena1Code.GDAsteroideObjects2.length = 0;
gdjs.Escena1Code.GDAsteroideObjects3.length = 0;
gdjs.Escena1Code.GDAsteroideObjects4.length = 0;
gdjs.Escena1Code.GDTimerObjects1.length = 0;
gdjs.Escena1Code.GDTimerObjects2.length = 0;
gdjs.Escena1Code.GDTimerObjects3.length = 0;
gdjs.Escena1Code.GDTimerObjects4.length = 0;
gdjs.Escena1Code.GDAsteroide_9595menorObjects1.length = 0;
gdjs.Escena1Code.GDAsteroide_9595menorObjects2.length = 0;
gdjs.Escena1Code.GDAsteroide_9595menorObjects3.length = 0;
gdjs.Escena1Code.GDAsteroide_9595menorObjects4.length = 0;
gdjs.Escena1Code.GDExplosionObjects1.length = 0;
gdjs.Escena1Code.GDExplosionObjects2.length = 0;
gdjs.Escena1Code.GDExplosionObjects3.length = 0;
gdjs.Escena1Code.GDExplosionObjects4.length = 0;
gdjs.Escena1Code.GDBarra_9595vidaObjects1.length = 0;
gdjs.Escena1Code.GDBarra_9595vidaObjects2.length = 0;
gdjs.Escena1Code.GDBarra_9595vidaObjects3.length = 0;
gdjs.Escena1Code.GDBarra_9595vidaObjects4.length = 0;
gdjs.Escena1Code.GDPuntosObjects1.length = 0;
gdjs.Escena1Code.GDPuntosObjects2.length = 0;
gdjs.Escena1Code.GDPuntosObjects3.length = 0;
gdjs.Escena1Code.GDPuntosObjects4.length = 0;
gdjs.Escena1Code.GDFondoObjects1.length = 0;
gdjs.Escena1Code.GDFondoObjects2.length = 0;
gdjs.Escena1Code.GDFondoObjects3.length = 0;
gdjs.Escena1Code.GDFondoObjects4.length = 0;

gdjs.Escena1Code.eventsList9(runtimeScene);
gdjs.Escena1Code.GDNave_9595pjObjects1.length = 0;
gdjs.Escena1Code.GDNave_9595pjObjects2.length = 0;
gdjs.Escena1Code.GDNave_9595pjObjects3.length = 0;
gdjs.Escena1Code.GDNave_9595pjObjects4.length = 0;
gdjs.Escena1Code.GDBloqueObjects1.length = 0;
gdjs.Escena1Code.GDBloqueObjects2.length = 0;
gdjs.Escena1Code.GDBloqueObjects3.length = 0;
gdjs.Escena1Code.GDBloqueObjects4.length = 0;
gdjs.Escena1Code.GDProyectil_9595pjObjects1.length = 0;
gdjs.Escena1Code.GDProyectil_9595pjObjects2.length = 0;
gdjs.Escena1Code.GDProyectil_9595pjObjects3.length = 0;
gdjs.Escena1Code.GDProyectil_9595pjObjects4.length = 0;
gdjs.Escena1Code.GDFondo_9595EstrellasObjects1.length = 0;
gdjs.Escena1Code.GDFondo_9595EstrellasObjects2.length = 0;
gdjs.Escena1Code.GDFondo_9595EstrellasObjects3.length = 0;
gdjs.Escena1Code.GDFondo_9595EstrellasObjects4.length = 0;
gdjs.Escena1Code.GDAsteroideObjects1.length = 0;
gdjs.Escena1Code.GDAsteroideObjects2.length = 0;
gdjs.Escena1Code.GDAsteroideObjects3.length = 0;
gdjs.Escena1Code.GDAsteroideObjects4.length = 0;
gdjs.Escena1Code.GDTimerObjects1.length = 0;
gdjs.Escena1Code.GDTimerObjects2.length = 0;
gdjs.Escena1Code.GDTimerObjects3.length = 0;
gdjs.Escena1Code.GDTimerObjects4.length = 0;
gdjs.Escena1Code.GDAsteroide_9595menorObjects1.length = 0;
gdjs.Escena1Code.GDAsteroide_9595menorObjects2.length = 0;
gdjs.Escena1Code.GDAsteroide_9595menorObjects3.length = 0;
gdjs.Escena1Code.GDAsteroide_9595menorObjects4.length = 0;
gdjs.Escena1Code.GDExplosionObjects1.length = 0;
gdjs.Escena1Code.GDExplosionObjects2.length = 0;
gdjs.Escena1Code.GDExplosionObjects3.length = 0;
gdjs.Escena1Code.GDExplosionObjects4.length = 0;
gdjs.Escena1Code.GDBarra_9595vidaObjects1.length = 0;
gdjs.Escena1Code.GDBarra_9595vidaObjects2.length = 0;
gdjs.Escena1Code.GDBarra_9595vidaObjects3.length = 0;
gdjs.Escena1Code.GDBarra_9595vidaObjects4.length = 0;
gdjs.Escena1Code.GDPuntosObjects1.length = 0;
gdjs.Escena1Code.GDPuntosObjects2.length = 0;
gdjs.Escena1Code.GDPuntosObjects3.length = 0;
gdjs.Escena1Code.GDPuntosObjects4.length = 0;
gdjs.Escena1Code.GDFondoObjects1.length = 0;
gdjs.Escena1Code.GDFondoObjects2.length = 0;
gdjs.Escena1Code.GDFondoObjects3.length = 0;
gdjs.Escena1Code.GDFondoObjects4.length = 0;


return;

}

gdjs['Escena1Code'] = gdjs.Escena1Code;

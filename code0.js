gdjs.InicioCode = {};
gdjs.InicioCode.localVariables = [];
gdjs.InicioCode.idToCallbackMap = new Map();
gdjs.InicioCode.GDBotonObjects1= [];
gdjs.InicioCode.GDBotonObjects2= [];
gdjs.InicioCode.GDPuntosObjects1= [];
gdjs.InicioCode.GDPuntosObjects2= [];
gdjs.InicioCode.GDFondoObjects1= [];
gdjs.InicioCode.GDFondoObjects2= [];


gdjs.InicioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.InicioCode.GDFondoObjects1);
{for(var i = 0, len = gdjs.InicioCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDFondoObjects1[i].setYOffset(gdjs.InicioCode.GDFondoObjects1[i].getYOffset() - (3));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boton"), gdjs.InicioCode.GDBotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InicioCode.GDBotonObjects1.length;i<l;++i) {
    if ( gdjs.InicioCode.GDBotonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.InicioCode.GDBotonObjects1[k] = gdjs.InicioCode.GDBotonObjects1[i];
        ++k;
    }
}
gdjs.InicioCode.GDBotonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10716596);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Audio\\Efectos Sonoros\\iniciarjuego.ogg", false, 100, 1.5);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena1", true);
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Puntos"), gdjs.InicioCode.GDPuntosObjects1);
{for(var i = 0, len = gdjs.InicioCode.GDPuntosObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDPuntosObjects1[i].getBehavior("Text").setText("Record: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("record", "puntos", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Audio\\Musica\\musica tema.ogg", 1, true, 50, 1);
}
}

}


};

gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InicioCode.GDBotonObjects1.length = 0;
gdjs.InicioCode.GDBotonObjects2.length = 0;
gdjs.InicioCode.GDPuntosObjects1.length = 0;
gdjs.InicioCode.GDPuntosObjects2.length = 0;
gdjs.InicioCode.GDFondoObjects1.length = 0;
gdjs.InicioCode.GDFondoObjects2.length = 0;

gdjs.InicioCode.eventsList0(runtimeScene);
gdjs.InicioCode.GDBotonObjects1.length = 0;
gdjs.InicioCode.GDBotonObjects2.length = 0;
gdjs.InicioCode.GDPuntosObjects1.length = 0;
gdjs.InicioCode.GDPuntosObjects2.length = 0;
gdjs.InicioCode.GDFondoObjects1.length = 0;
gdjs.InicioCode.GDFondoObjects2.length = 0;


return;

}

gdjs['InicioCode'] = gdjs.InicioCode;

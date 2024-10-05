 function dibujo(){
    var acepta = retornarRecuadro("canvas");
    if(acepta){
        acepta.font = "bold 1.5625rem Sans-serif";
        acepta.textAlign = "left";
        acepta.fillText("La sociedad Fandom Wiki", 10, 30);
    }
 }
 function retornarRecuadro(x){
    var canvas = document.getElementById(x);
    if(canvas.getContext){
        var acepta = canvas.getContext("2d");
        return acepta;
    }else{
        return false;
    }
 }
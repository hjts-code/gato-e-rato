var gato;
var bgImg;
function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("garden.png");
    gatoImg1 = loadImage("cat1.png");
    gatoImg2 = loadAnimation("cat2.png","cat3.png");
    ratoImg1 = loadImage("mouse1.png");
    ratoImg2 = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);

    gato = createSprite(870,600);
    gato.addAnimation("gatoSentado",gatoImg1);
    gato.changeAnimation("gatoSentado");
    gato.scale = 0.2;
}

function draw() {

    background(bgImage);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x < (gato.width + rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation("ultimaImgGato",gatoImg3);
        gato.changeAnimation("ultimaImgGato");
        gato.x = 300;
        gato.scale = 0.2;
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode ===LEFT_ARROW){
        rato.addAnimation("ratoProvocando",ratoImg2);
        rato.changeAnimation("ratoProvocando");
        rato.frameDelay = 25;

        gato.velocityX = -5;
    }


}

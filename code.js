var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var raqueteJogador= createSprite(390,200,10,100);
var raqueteComputador= createSprite(10,200,10,100);
var bola= createSprite(200,200,10,10);

  raqueteJogador.shapeColor="blue";
  raqueteComputador.shapeColor="red";
  bola.shapeColor="green";
    
  
    
function draw() {
 background("white");
 
if (keyDown("UP_ARROW")) {
  raqueteJogador.y= raqueteJogador.y-10;
}
if (keyDown("DOWN_ARROW")) {
  raqueteJogador.y= raqueteJogador.y+10;
  }
  if (keyDown("space")) {
  bola.velocityY=5;
  bola.velocityX=2;
    
  }
raqueteComputador.y= bola.y;

for (var i = 0; i < 400; i=i+20) {
line(200, i, 200, i+10);
    
}

  createEdgeSprites();

  bola.bounceOff(topEdge);
  bola.bounceOff(bottomEdge);
  bola.bounceOff(raqueteJogador);
  bola.bounceOff(raqueteComputador);
  
 
  drawSprites();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

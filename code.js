var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3e56d538-c457-4394-b4b2-93b94c9b4993","b628998a-751d-417f-a778-c0763643a22f","3e868559-61cf-404f-9490-a426bf0c595b"],"propsByKey":{"3e56d538-c457-4394-b4b2-93b94c9b4993":{"name":"sports_billards","sourceUrl":"assets/api/v1/animation-library/gamelab/bf053G1veJ_hBin18xrCLIXWpbQYCGqb/category_backgrounds/sports_billards.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"bf053G1veJ_hBin18xrCLIXWpbQYCGqb","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bf053G1veJ_hBin18xrCLIXWpbQYCGqb/category_backgrounds/sports_billards.png"},"b628998a-751d-417f-a778-c0763643a22f":{"name":"eightball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0g3OdHzUFOX2YJG_syVQcF2OsFD9taIo/category_sports/eightball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"0g3OdHzUFOX2YJG_syVQcF2OsFD9taIo","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0g3OdHzUFOX2YJG_syVQcF2OsFD9taIo/category_sports/eightball.png"},"3e868559-61cf-404f-9490-a426bf0c595b":{"name":"stick.jpeg_1","sourceUrl":"assets/v3/animations/Xj5J-I9arbalpOdTKmUGN-o-IpAKPYz66u4KnnGiEMQ/3e868559-61cf-404f-9490-a426bf0c595b.png","frameSize":{"x":144,"y":351},"frameCount":1,"looping":true,"frameDelay":4,"version":"y1m7xcp2uM0jVbNGdFvtOHKntilLRPzn","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":351},"rootRelativePath":"assets/v3/animations/Xj5J-I9arbalpOdTKmUGN-o-IpAKPYz66u4KnnGiEMQ/3e868559-61cf-404f-9490-a426bf0c595b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = true;
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

background("white");
var back = createSprite(200,200); 
back.setAnimation("sports_billards");
var poolball = createSprite(168,328);
poolball.setAnimation("eightball_1");
poolball.scale = 0.13;
var shoot = true;
var stick = createSprite(168, 510);
stick.setAnimation("stick.jpeg_1");
var yes = 200;
function draw() {
  var shootx = World.mouseX - poolball.x;
  var shooty = World.mouseY - poolball.y;
poolball.pointTo(World.mouseX,World.mouseY );
  if(shoot === true){
  if(mouseWentDown("leftButton")||keyDown("e")){
    playSpeech("pool ball", "male", "English");
    
    poolball.rotation = stick.rotation;
   poolball.setVelocity(shootx/(20), shooty/(20));
    shoot = false;
  
   shoot = true;
  
  }
  }
back.setFrame(1);
//collions
if(poolball.y < 43){
  poolball.velocityY = 7;
}
if(poolball.y > 353){
  poolball.velocityY = -7;
}  
if(poolball.x > 350){
  poolball.velocityX = -7;
}  
if(poolball.x < 50){
  poolball.velocityX = 7;
}  
yes = yes + 0.5;
stick.rotation = randomNumber(0,360);
stick.x = yes;
  
  drawSprites();
  textSize(20);
  fill("Red");
  text("Click to play pool", 100, 100);
  
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

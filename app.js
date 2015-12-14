var player; 
var player2;
var ball;
var defender;
var defender2;
var goal;
var goal2;
var upwall;
var leftwall;
var rightwall;
var downwall;


function setup() { 
  upwall = createSprite(250, 0, 500, 10);
  leftwall = createSprite(0, 250, 10, 500);
  rightwall = createSprite(500, 250, 10, 500);
  downwall = createSprite(250, 500, 500, 10);
  createCanvas(500, 500);    
  player = createSprite(250, 400, 50, 50);
  player2 = createSprite(250, 100, 50, 50);
  ball = createSprite(75, 250, 10, 10);
  goal = createSprite(250, 12.5, 200, 25);
  goal2 = createSprite(250, 487.5, 200, 25);
  defender = createSprite(250, 255, 100, 10);
  defender2 = createSprite(250, 245, 100, 10);
  defender.direction = 'right';
  defender2.direction = 'right';
  ball.direction = 'up';
}

function draw() {                            
  background(255, 240, 220);                 
  drawSprites();  

    if (keyDown('s')) {
    player2.position.y = player2.position.y + 8;
    }
    if (keyDown('d')) {
    player2.position.x = player2.position.x + 8;
    }
    if (keyDown('a')) {
    player2.position.x = player2.position.x - 8;
    }
    if (keyDown('w')) {
    player2.position.y = player2.position.y - 8;
    }
  
    if (keyDown(DOWN_ARROW)) {
    player.position.y = player.position.y + 8;
    }
    if (keyDown(RIGHT_ARROW)) {
    player.position.x = player.position.x + 8;
    }
    if (keyDown(LEFT_ARROW)) {
    player.position.x = player.position.x - 8;
    }
    if (keyDown(UP_ARROW)) {
    player.position.y = player.position.y - 8;
    }
  
  
  
    if (ball.direction === 'up') {
             ball.position.y = ball.position.y - 5;
      }
        else {
          ball.position.y = ball.position.y + 5;
      }
        if (ball.overlap(player2)) {
          ball.direction = 'down';
        }

        if (ball.overlap(player)) {
          ball.direction = 'up';
        }
        
        if (ball.overlap(defender)) {
          ball.direction = 'down';
        }
  
        if (ball.overlap(defender2)) {
          ball.direction = 'up';
        }
  
  
  
        if (ball.overlap(upwall)) {
          ball.direction = 'down';
        }
        if (ball.overlap(downwall)) {
          ball.direction = 'up';
        }
  
  
  
  
  

  
  

  

    if (ball.overlap(goal)) {
  ball.remove();
    if (ball.overlap(goal2)){
      ball.remove();
    }
  }
    if (ball.position.x < 0) {
      ball.position.x = 5;
    }
      if (ball.position.x > 495) {
      ball.position.x = 495;
    }
      if (ball.position.y < 0) {
      ball.position.y = 5;
    }
        if (ball.position.y > 495) {
      ball.position.y = 495;
    }
        if (player.position.y < 25) {
      player.position.y = 25;
    }
          if (player.position.y > 475) {
      player.position.y = 475;
    }
          if (player.position.x < 25) {
      player.position.x = 25;
    }
          if (player.position.x > 475) {
      player.position.x = 475;
    }
          if (player.position.y < 275) {
            player.position.y = 275;
          }
              if (player2.position.y < 25) {
      player2.position.y = 25;
    }
          if (player2.position.y > 475) {
      player2.position.y = 475;
    }
          if (player2.position.x < 25) {
      player2.position.x = 25;
    }
          if (player2.position.x > 475) {
      player2.position.x = 475;
    }
          if (player2.position.y > 225) {
            player2.position.y = 225;
          }

  
  if (defender.direction === 'right') {
             defender.position.x = defender.position.x + 10;
      }
        else {
          defender.position.x = defender.position.x - 10;
      }
        if (defender.position.x > 525) {
          defender.direction = 'left';
        }

        if (defender.position.x < 0) {
          defender.direction = 'right';
        }
  
  
    if (defender2.direction === 'right') {
             defender2.position.x = defender2.position.x + 10;
      }
        else {
          defender2.position.x = defender2.position.x - 10;
      }
        if (defender2.position.x > 525) {
          defender2.direction = 'left';
        }

        if (defender2.position.x < 0) {
          defender2.direction = 'right';
        }
}    

// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
this.x=x;
this.y=y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  //  console.log('hello');
    //MOVEMENT OF ENEMY
    this.speed = Math.random()*200 +50;
    if (this.x<500){
    this.x = this.x + this.speed * dt;
}
  };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    if(this.x>500) {
      this.x=0;
      ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
    }
};

var Player = function (x,y) {
  this.x =x;
  this.y=y;
  this.sprite ='images/char-boy.png';
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function() {
  //console.log('player');
if (this.y === 0){
  this.y = 400;
}
};

Player.prototype.render = function() {
  //console.log('player-render');
ctx.drawImage(Resources.get(this.sprite), this.x,this.y);

};

Player.prototype.handleInput = function(keys) {
  var posy = 70;
  var posx = 100;
if (keys === 'left' && this.x>0 ) {
  this.x= this.x-posx;
}else if (keys==='up' && this.y>0) {
  this.y= this.y-posy;
}else if(keys ==='right' && this.x<400) {
  this.x= this.x + posx;
}else if(keys === 'down' && this.y<350) {
  this.y = this.y + posy;
}
};

Player.prototype.collision = function (x,y) {
  var Bx =x;
  var By =y;
  Bwidth=60;
  Bheight=80;
  Pwidth=50;
  Pheight=70;

  if (this.x < Bx + Bwidth &&
   this.x + Pwidth >Bx &&
   this.y < By + Bheight &&
   Pheight + this.y > By) {
    // collision detected!
    this.y=375;
}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(30,50),new Enemy(30,150),new Enemy(30,250)];
var player=new Player(200,400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

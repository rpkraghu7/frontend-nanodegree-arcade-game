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

      //MOVEMENT OF ENEMY
      this.speed = Math.random()*100 +150;
      this.x = this.x + this.speed * dt;
    };


  // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
      //ENEMY LOOPING
      if(this.x>500) {
        this.x=0;
        ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
      }
  };


  //PLAYER FUNCTION
    var Player = function (x,y) {
        this.x =x;
        this.y=y;
        this.sprite ='images/char-boy.png';
    };


  // Now write your own player class
  // This class requires an update(), render() and
  // a handleInput() method.

  //UPDATE FUNCTION OF PLAYER
  Player.prototype.update = function() {
      if (this.y <0)
      {
        this.y = 400;
      }
  };


  //RENDER FUNCTION OF PLAYER
  Player.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x,this.y);
  };


  //KEYCONTROLS OF PLAYER
  Player.prototype.handleInput = function(keys) {
        var posy = 70;
        var posx = 120;

  //LOOP FOR MOVEMENT OF PLAYER
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


  //COLLISION FUNCTION OF PLAYER
  Player.prototype.collision = function (x,y) {
      var Bx =x;
      var By =y;
      var Bwidth=60;
      var Bheight=80;
      var Pwidth=50;
      var Pheight=70;

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
  var allEnemies = [
        new Enemy(30,310),
        new Enemy(30,50),
        new Enemy(30,140),
        new Enemy(30,230)
  ];
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


  'use strict';
  var Board  = require('../prefabs/board');

  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.add.image(this.game.width/2, this.game.height/2, 'bg').anchor.setTo(0.5, 0.5);

//      this.game.physics.startSystem(Phaser.Physics.ARCADE);
//      this.sprite = this.game.add.sprite(this.game.width/2, this.game.height/2, 'yeoman');
      // this.sprite.inputEnabled = true;
      //
      // this.game.physics.arcade.enable(this.sprite);
      // this.sprite.body.collideWorldBounds = true;
      // this.sprite.body.bounce.setTo(1,1);
      // this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500,500);
      // this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500,500);
      //
      // this.sprite.events.onInputDown.add(this.clickListener, this);


      //this.game.add.existing(new Diamond(this.game, 200, 200));
      var board = new Board(this.game);
      



      board.position.setTo(this.game.width, 100);
      board.build([[1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]]);

      this.game.add.tween(board).to({x: (this.game.width-board.width)/2, y: 10}, 1000, Phaser.Easing.Bounce.Out, true);
      this.game.add.existing(board);
    },
    update: function() {

    },
    clickListener: function() {
      this.game.state.start('gameover');
    }
  };

  module.exports = Play;

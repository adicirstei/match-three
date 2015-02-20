'use strict';
var images = ['blue-d.png', 'green-d.png', 'orange-d.png', 'purple-d.png', 'red-d.png', 'yellow-d.png'];



var Diamond = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'images', images[frame]);

  // initialize your prefab here
  this.color = frame;
  this.inputEnabled = true;
};

Diamond.prototype = Object.create(Phaser.Sprite.prototype);
Diamond.prototype.constructor = Diamond;

Diamond.prototype.update = function() {

  // write your prefab's specific update code here

};

module.exports = Diamond;

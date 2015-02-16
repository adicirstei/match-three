'use strict';

var Diamond = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'diamond' + Math.floor(6*Math.random()), frame);

  // initialize your prefab here

};

Diamond.prototype = Object.create(Phaser.Sprite.prototype);
Diamond.prototype.constructor = Diamond;

Diamond.prototype.update = function() {

  // write your prefab's specific update code here

};

module.exports = Diamond;

'use strict';
var Diamond = require('./diamond');


var DiamondGroup = function(game, matrix) {
  Phaser.Group.call(this, game);

  // initialize your prefab here
  this.matrix = matrix;

  var rows = (matrix && matrix.length) || 0;
  var cols = (rows && matrix[0].length) || 0;

  for (var j = 0; j<rows; j++) {
    for (var i = 0; i<cols; i++) {
      if (matrix[j][i]) {
        this.add(new Diamond(this.game, i*50, j*50, matrix[j][i]));
      }
    }
  }
  
};

DiamondGroup.prototype = Object.create(Phaser.Group.prototype);
DiamondGroup.prototype.constructor = DiamondGroup;

DiamondGroup.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = DiamondGroup;

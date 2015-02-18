'use strict';
var DiamondGroup = require('./diamond-group');


var Board = function(game) {
  Phaser.Group.call(this, game);

};

Board.prototype = Object.create(Phaser.Group.prototype);
Board.prototype.constructor = Board;

Board.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

Board.prototype.build = function(matrix) {
  this.matrix = matrix;

  var rows, cols, tb, lb, rb, bb;
  var tmp;

  rows = (matrix && matrix.length) || 0;
  cols = (rows && matrix[0].length) || 0;

  this.width = cols*50;

  for (var j = 0; j<rows; j++) {
    for (var i = 0; i<cols; i++) {

      tb = matrix[j][i] && ((j === 0) || (!matrix[j-1][i]));
      bb = matrix[j][i] && ((j+1 === rows) ||(!matrix[j+1][i]));
      lb = matrix[j][i] && ((i === 0) || (!matrix[j][i-1]));
      rb = matrix[j][i] && ((i+1 === cols) || (!matrix[j][i+1]));
      
      if (matrix[j][i]) {
        this.add(this.game.make.image(i * 50, j * 50, 'images', ((i+j)%2 ? 'tile-light.png' : 'tile-dark.png')));
      }
 
      if (tb) {
        tmp = this.game.make.image(i * 50, j * 50, 'images', 'border.png');
        tmp.anchor.setTo(0, 1);
        this.add(tmp);
      }
      if (bb) {
        tmp = this.game.make.image(i * 50, (j+1) * 50, 'images', 'border.png');
        tmp.anchor.setTo(0, 0);
        this.add(tmp);
      }
      if (lb) {
        tmp = this.game.make.image(i * 50, j * 50, 'images', 'border-v.png');
        tmp.anchor.setTo(1, 0);
        this.add(tmp);
      }      
      if (rb) {
        tmp = this.game.make.image((i+1) * 50, j * 50, 'images', 'border-v.png');
        tmp.anchor.setTo(0, 0);
        this.add(tmp);
      }
      if (tb&&lb) {
        tmp = this.game.make.image(i * 50, j * 50, 'images', 'corner-tl.png');
        tmp.anchor.setTo(1, 1);
        this.add(tmp);
      }
      if (tb&&rb) {
        tmp = this.game.make.image((1+i) * 50, j * 50, 'images', 'corner-tr.png');
        tmp.anchor.setTo(0, 1);
        this.add(tmp);
      }
      if (bb&&rb) {
        tmp = this.game.make.image((1+i) * 50, (j+1) * 50, 'images', 'corner-br.png');
        tmp.anchor.setTo(0, 0);
        this.add(tmp);
      }
      if (bb&&lb) {
        tmp = this.game.make.image(i * 50, (j+1) * 50, 'images', 'corner-bl.png');
        tmp.anchor.setTo(1, 0);
        this.add(tmp);
      }
    }
  }
  this.add(new DiamondGroup(this.game, matrix));
};


module.exports = Board;

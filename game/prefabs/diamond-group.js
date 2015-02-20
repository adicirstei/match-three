'use strict';
var Diamond = require('./diamond');


var DiamondGroup = function(game, matrix) {
  Phaser.Group.call(this, game);

  // initialize your prefab here
  this.matrix = matrix;
  var s;

  var rows = this.rows = (matrix && matrix.length) || 0;
  var cols = this.cols = (rows && matrix[0].length) || 0;
  this.boardMatrix = Array(rows);
  do {
    this.generateBoard();
  } while(this.haveMatch());
  for (var j = 0; j<rows; j++) {
    for (var i = 0; i<cols; i++) {
      if (typeof this.boardMatrix[j][i] === 'number') {
        s = this.add(new Diamond(this.game, i*50, j*50, this.boardMatrix[j][i]));
        s.boardPos = {i: i, j: j};
        s.neighbours = {h: 1, v: 1};
        this.boardMatrix[j][i] = s;
      }
    }
  }

};

DiamondGroup.prototype = Object.create(Phaser.Group.prototype);
DiamondGroup.prototype.constructor = DiamondGroup;
DiamondGroup.prototype.update = function() {

  // write your prefab's specific update code here

};


DiamondGroup.prototype.generateBoard = function() {
  var type;

  for (var j = 0; j<this.rows; j++) {
    this.boardMatrix[j] = Array(this.cols);
    for (var i = 0; i<this.cols; i++) {
      type = this.getType(i, j);
      if (typeof type === 'number') {
        this.boardMatrix[j][i] = type;
      }
    }
  }
};

DiamondGroup.prototype.haveMatch = function() {

  for (var j = 0; j<this.rows; j++) {
    for (var i = 0; i<this.cols; i++) {
      if (i<this.cols-2 && (this.boardMatrix[j][i] === this.boardMatrix[j][i+1] && this.boardMatrix[j][i] === this.boardMatrix[j][i+2])) {
        return true;
      }
      if (j<this.rows-2 && (this.boardMatrix[j][i] === this.boardMatrix[j+1][i] && this.boardMatrix[j][i] === this.boardMatrix[j+2][i])) {
        return true;
      }
    }
  }
  return false;
};

DiamondGroup.prototype.getType = function(i, j) {
  var s;
  var type = this.matrix[j][i];
  if (typeof type === 'number') {
    s = type;
  } else {
    switch (type) {
      case 'r':
        s = this.game.rnd.integerInRange(0, 5);
        break;
      default:
        s = null;
    }
  }

  return s
}

DiamondGroup.prototype.human = function() {
  this.game.input.onDown.add(this.startDrag, this);
  this.game.input.onUp.add(this.endDrag, this);
};

DiamondGroup.prototype.computer = function() {
  this.game.input.onDown.remove(this.startDrag, this);
  this.game.input.onUp.remove(this.endDrag, this);


};

DiamondGroup.prototype.startDrag = function(pointer) {

  this.dragCell = {
    i: Math.floor((pointer.x - this.parent.x)/50),
    j: Math.floor((pointer.y-this.parent.y)/50)
  };
  //this.boardMatrix[this.dragCell.j][this.dragCell.i].kill();
};
DiamondGroup.prototype.endDrag = function(pointer) {
  var target = {
    i: Math.floor((pointer.x - this.parent.x)/50),
    j: Math.floor((pointer.y-this.parent.y)/50)
  };
  var dir;

  if (this.dragCell) {
     if (this.dragCell.i === target.i && target.j > this.dragCell.j) {
       dir = 'down';
       //this.swap(dir);
     }



    this.dragCell = null;
  } else {
    return;
  }
};

module.exports = DiamondGroup;

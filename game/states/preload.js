
'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('yeoman', 'assets/yeoman-logo.png');
    this.load.image('diamond0', 'assets/blue-d.png');
    this.load.image('diamond1', 'assets/green-d.png');
    this.load.image('diamond2', 'assets/orange-d.png');
    this.load.image('diamond3', 'assets/purple-d.png');
    this.load.image('diamond4', 'assets/red-d.png');
    this.load.image('diamond5', 'assets/yellow-d.png');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

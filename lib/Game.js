const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const Player = require("./Player");

function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
}

Game.prototype.initializeGame = function () {
  this.enemies.push(new Enemy("goblin", "sword"));
  this.enemies.push(new Enemy("orc", "war axe"));
  this.enemies.push(new Enemy("skeleton", "bow"));
  this.currentEnemy = this.enemies[0];

  inquirer
    .prompt({
      type: "text",
      name: "name",
      message: "What is your name Champion?",
    })
    //destructure name from the prompt object due to ".this" syntax
    .then(({ name }) => {
      this.player = new Player(name);

      this.startNewBattle()
    });
};
module.exports = Game;

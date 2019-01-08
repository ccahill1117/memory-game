import { Card } from './memory';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game() {
  this.picks = []

}

Game.prototype.pickTwo = function(pick) {
  this.picks.push(pick);
  console.log(this.picks);

}

Game.prototype.compare = function() {
  if (this.picks[0] == this.picks[1]) {
    alert("you got a match");
  }
}

$(document).ready(function() {
  var game = new Game;
  $(".gameCard").click(function(event) {
    game.pickTwo($(event.target).attr('alt'));
    if (game.picks.length == 2) {
      game.compare();
      game.picks = [];
    }

  });


});

// $(".cards").click(function() {
//   var selectedCards = [];
//
//   $('#1').click(function() {
//     $(".frontImg1").toggle();
//   });
//
//   $('#2').click(function() {
//     $(".frontImg2").toggle();
//   });
// })
//
//
// var types = ["A","A","B","B","C","C","D","D","E","E"];
// var cards = [1,2,3,4,5,6,7,8,9,10];

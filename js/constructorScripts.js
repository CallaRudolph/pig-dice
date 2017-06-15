function Player() {
  this.roll = 0;
  this.turnTotal = 0;
  this.grandTotal = 0;
}

Player.prototype.diceRoll = function() {
  mini = Math.ceil(1);
  maxi = Math.floor(7);
  this.roll = Math.floor(Math.random() * (maxi - mini)) + mini;
  return this.roll;
};

Player.prototype.turnCounter = function() {
  if (this.roll === 1) {
    this.turnTotal = 0;
  } else {
    this.turnTotal += this.roll
    return this.turnTotal;
  }
};

Player.prototype.grandCounter = function() {
  this.grandTotal += this.turnTotal;
  return this.grandTotal
};

$(document).ready(function() {
  var newPlayer = new Player;
  var newPlayer2 = new Player;
  $("#user1Roll").click(function(event) {
    event.preventDefault();
    var userRoll = (newPlayer.diceRoll())
    var turnTotal = (newPlayer.turnCounter());
    $("#roll1").text(userRoll);
    $("#turn1").text(turnTotal);
    if (userRoll === 1) {
      $("#user1").hide();
      $("#user2").show()
      $("#turn1").empty();
      $("#roll1").empty();
    }

  });
  $("#user1").submit(function(event) {
    event.preventDefault()
    var grandTotal = (newPlayer.grandCounter());
    $("#grand1").text(grandTotal);
    $("#user1").hide();
    $("#user2").show()
    $("#turn1").empty();
    $("#roll1").empty();
    newPlayer.turnTotal = 0;
    if (grandTotal >= 100) {
      alert("Congratz! You have won!")
    }
  });
  $("#user2Roll").click(function(event) {
    event.preventDefault();
    var userRoll = (newPlayer2.diceRoll())
    var turnTotal = (newPlayer2.turnCounter());
    $("#roll2").text(userRoll);
    $("#turn2").text(turnTotal);
    if (userRoll === 1) {
      $("#user2").hide();
      $("#user1").show()
      $("#turn2").empty();
      $("#roll2").empty();
    }

  });
  $("#user2").submit(function(event) {
    event.preventDefault()
    var grandTotal = (newPlayer2.grandCounter());
    $("#grand2").text(grandTotal);
    $("#user2").hide();
    $("#user1").show();
    $("#turn2").empty();
    $("#roll2").empty();
    newPlayer2.turnTotal = 0;
    if (grandTotal >= 100) {
      alert("Congratz! You have won!")
    }
  });
});

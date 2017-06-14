//business logic:

//////////// RANDOM NUMBER GENERATOR /////////
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
//////////////////////////////////////////////

///////////USER 1 TURN TOTAL FUNCTION/////////
var total1 = 0
function getTotal(_roll) {
  if (_roll === 1) {
    total1 = 0;
    $("#user1").hide();
    $("#user2").show();
  } else {
    total1 += _roll;
  }
  return total1;
};
//////////////////////////////////////////////

////////////USER 2 TURN TOTAL FUNCTION/////////
var total2 = 0
function getTotal2(_roll) {
  if (_roll === 1) {
    total2 = 0;
    $("#user2").hide();
    $("#user1").show();
  } else {
    total2 += _roll;
  }
  return total2;
};
//////////////////////////////////////////////

//////////////USER 1 GRAND TOTAL//////////////
newGrandTotal1 = 0;
function grandTotalUser1(_grandTotal1) {
  newGrandTotal1 += grandTotal1
  return newGrandTotal1;
};
/////////////////////////////////////////////


//////////////USER 2 GRAND TOTAL//////////////
newGrandTotal2 = 0;
function grandTotalUser2(_grandTotal2) {
  newGrandTotal2 += grandTotal2
  return newGrandTotal2;
};
/////////////////////////////////////////////

function endGame(one, two) {
  if (one >= 100 || two >= 100) {
    alert("Congratz! You are the winner!")

  }
};

//user logic:
$(document).ready(function() {
  $("#user1Roll").click(function(event) {
    event.preventDefault();
    var roll1 = getRandomInt(1,7);
    $("#roll1").text(roll1)
    turnTotal1 = getTotal(roll1);
    $("#turn1").text(turnTotal1);
  });
  $("#user2Roll").click(function(event) {
    event.preventDefault();
    var roll2 = getRandomInt(1,7);
    $("#roll2").text(roll2)
    turnTotal2 = getTotal2(roll2);
    $("#turn2").text(turnTotal2);
  });
  $("#user1").submit(function(event) {
    event.preventDefault();
    grandTotal1 = turnTotal1;
    updatedGrandTotal1 = grandTotalUser1(grandTotal1);
    $("#grand1").text(updatedGrandTotal1);
    $("#turn1").empty();
    $("#roll1").empty();
    total1 = 0;
    $("#user1").hide();
    $("#user2").show();
    endGame(updatedGrandTotal1, updatedGrandTotal2);
  });
  $("#user2").submit(function(event) {
    event.preventDefault();
    grandTotal2 = turnTotal2;
    updatedGrandTotal2 = grandTotalUser2(grandTotal2);
    $("#grand2").text(updatedGrandTotal2);
    $("#turn2").empty();
    $("#roll2").empty();
    total2 = 0;
    $("#user2").hide();
    $("#user1").show();
    endGame(updatedGrandTotal1, updatedGrandTotal2)
  });


});

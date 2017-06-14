//business logic:
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};




//user logic:
$(document).ready(function() {
  $("#user1Roll").click(function(event) {
    var roll = getRandomInt(1,7);
    $("#roll1").text(roll)
  });
  $("#user2Roll").click(function(event) {
    var roll = getRandomInt(1,7);
    $("#roll2").text(roll)
  });
});

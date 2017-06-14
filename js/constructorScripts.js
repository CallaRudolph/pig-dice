function Random(min, max) {
  this.minimum = min;
  this.maximum = max;
  this.total = 0;
}




Random.prototype.randomInt = function() {
  mini = Math.ceil(this.minimum);
  maxi = Math.floor(this.maximum);
  return Math.floor(Math.random() * (maxi - mini)) + mini;
};


Random.prototype.getTotal = function(roll) {
  console.log(roll);
  this.total += roll;
  return this.total;
}





$(document).ready(function() {
  var newRandom = new Random(1,7);
  $("#user1Roll").click(function(event) {
    event.preventDefault();
    var userRoll = (newRandom.randomInt());
    // var userTotal = (newRandom.getTotal(userRoll))
    $("#roll1").text(userRoll);
    $("#turn1").text(newRandom.getTotal(userRoll));
    console.log(newRandom.getTotal(userRoll));
    console.log(userRoll);
  });
});

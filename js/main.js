var links = document.getElementById("links");
var midden = document.getElementById("midden");
var rechts = document.getElementById("rechts");
var resetBtn = document.getElementById("reset");

links.onclick = function() {
  this.style.backgroundColor = "yellow";
};

midden.onclick = function() {
  this.style.display = "none";
};

rechts.onclick = function() {
  this.style.width = "400px";
  this.style.height = "400px";
};

resetBtn.onclick = function() {
  links.style.backgroundColor = "lightblue";
  midden.style.display = "flex";
  rechts.style.width = "200px";
  rechts.style.height = "200px";
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

setInterval(changeBackgroundColor, 1000);
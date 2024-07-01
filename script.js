let i = 0;
howManyTimes = 30;
let number = 6;

function roll() {
  number = Math.floor(Math.random()* 6 + 1);
  const image = document.getElementById('dice');
  i++;
  
  if(number == 1) {
    image.src = "./source/images/one.png"
  } else if(number == 2) {
    image.src = "./source/images/two.png"
  } else if(number == 3) {
    image.src = "./source/images/three.png"
  } else if(number == 4) {
    image.src = "./source/images/four.png"
  } else if(number == 5) {
    image.src = "./source/images/five.png"
  } else if(number == 6) {
    image.src = "./source/images/six.png"
  }

  if (i < howManyTimes) {
    setTimeout(roll, 50);
  }else {
    setTimeout( function() { 
      alert("You rolled " + number);
    }, 150);
  }
}

function reset() {
    i = 0;
}
var id1= document.getElementById('slider__prev1')
var id2= document.getElementById('slider__next1')
var id3 = document.getElementById('slider__prev2')
var id4 = document.getElementById('slider__next2')
var id5 = document.getElementById('slider__prev3')
var id6 = document.getElementById('slider__next3')
var id7 = document.getElementById('slider__prev4')
var id8 = document.getElementById('slider__next4')
var count = 1
id1.addEventListener('click',slider__prev1)
id2.addEventListener('click',slider__next1)
id3.addEventListener('click',slider__prev2)
id4.addEventListener('click',slider__next2)
id5.addEventListener('click',slider__prev3)
id6.addEventListener('click',slider__next3)
id7.addEventListener('click',slider__prev4)
id8.addEventListener('click',slider__next4)

function slider__next1() {
  count++;
  console.log(count)
}

function slider__next2() {
  count++;
  console.log(count)
}

function slider__next3() {
  count++;
  console.log(count)
}

function slider__next4() {
  count = 1
  console.log(count)
}

function slider__prev1() {
  count = count + 3
  console.log(count)
}

function slider__prev2() {
  count--;
  console.log(count)
}

function slider__prev3() {
  count--;
  console.log(count)
}
function slider__prev4() {
  count--;
  console.log(count)

}

setInterval(AutoSlider, 12000);

function AutoSlider() {
  if (count<4){
    count++;
  }
  else{
    count = 1
  }
  location.href = `#slides__` + count;
  console.log('Executed')
}
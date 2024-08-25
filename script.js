

slides1 = document.querySelector(".slides");
slide2 = document.getElementsByClassName("slide")[0];
next1 = document.getElementById("next");
previous1 = document.getElementById("previous");
var count = 1;
var width = 100;

// Radio button working machanisam

sl_1 = document.getElementsByClassName("sl-1")
sl_2 = document.getElementsByClassName("sl-2")
sl_3 = document.getElementsByClassName("sl-3")
sl_4 = document.getElementsByClassName("sl-4")




next1.addEventListener("click", NextImg);
previous1.addEventListener("click", previousImg);

function previousImg() {
  console.log("Executed Previous");
  if (count > 1) {
    count--;
    slides1.style.left  = `-${count * width}%`;
    // console.log(count);
  } else if ((count = 1)) {
    count = count + 3;  
    slides1.style.left = `-0%`;
    sl_4.checked = true
    // console.log(count);
  }
}

function ratiobtn() {
  console.log('I am working')
  if (count = 1){
    console.log("hello")
    sl_1.checked = true
  }
  else if (count = 2){
    sl_2.checked = true
  }
  else if (count = 3){
    sl_3.checked = true
  }
  else if (count = 4){
    sl_4.checked = true
  }
}

function NextImg() {
  console.log(count);
  console.log("Executed next")
  if (count < 4) {
    slides1.style.left = `-${count * width}%`;
    count++;
    // console.log(count);
  } else if ((count = 4)) {
    slides1.style.left = "0%";
    count = 1;
    // console.log(count);
  }
 }
setInterval(Automation, 12000);

function Automation() {
  // console.log("Exercuted Next Automatic");
  NextImg();
  ratiobtn();
}


// Digital Clock For Today Deals Section



const GetTime = (id) => {
  let time = new Date
  h = time.getHours()
  m = time.getMinutes()
  s = time.getSeconds()
  id.innerHTML = `${h} : ${m} : ${s}`

  // console.log(`${h} : ${m} : ${s}`)
}

var id = document.getElementsByClassName('Timer')[0]



setInterval(GetTime, 1000 ,id)







// https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1

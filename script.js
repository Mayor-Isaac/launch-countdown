"use strict";
const seconds = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const day = document.querySelector(".day");
let counter;
let time = 369438000
const countDownFunc = ()=>{
  day.textContent = `${Math.trunc(time/(24*60*60*1000))}`.padStart(2,0)
  const hrRemainder = (time%(24*60*60*1000))
  hour.textContent = `${Math.trunc(hrRemainder/ (1000*60*60))}`.padStart(2,0)
  const minsRemainder = hrRemainder% (1000*60*60)
  minute.textContent = `${Math.trunc(minsRemainder/(1000*60))}`.padStart(2,0)
  const secondsRemainder = minsRemainder%(1000*60)
  seconds.textContent = `${Math.trunc(secondsRemainder/1000)}`.padStart(2,0)
 if (time === 0) {
        alert("The time has come 😁");
        clearInterval(counter);
      }
      time = time - 1000
}
counter = setInterval(countDownFunc,1000)
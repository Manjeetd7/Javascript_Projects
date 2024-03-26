const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {  // gives time until the program runs
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString(); //updates the time every second
}, 1000);


window.onload = function () {
  let seconds = 0;
  let milliseconds = 0;
  let interval;

  const addseconds = document.querySelector(".seconds");
  const addmilliseconds = document.querySelector(".milliseconds");

  const startbutton = document.querySelector(".start");
  const stopbutton = document.querySelector(".stop");
  const resetbutton = document.querySelector(".reset");

  startbutton.onclick = function () {
    clearInterval(interval);
    interval = setInterval(start, 10);
  };

  stopbutton.onclick = function () {
    clearInterval(interval);
  };

  resetbutton.onclick = function () {
    clearInterval(interval);
    seconds = 0;
    milliseconds = 0;
    addseconds.innerHTML = "00";
    addmilliseconds.innerHTML = "00";
  };

  function start() {
    milliseconds++;

    if (milliseconds < 10) {
      addmilliseconds.innerHTML = "0" + milliseconds;
    } else {
      addmilliseconds.innerHTML = milliseconds;
    }

    if (milliseconds === 100) {
      seconds++;
      addseconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
      milliseconds = 0;
      addmilliseconds.innerHTML = "00";
    }
  }
};

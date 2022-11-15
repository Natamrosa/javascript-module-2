let getFullMinutes = function (minutes) {
  if (minutes< 0) {
    return '0' + minutes;
  }
  return minutes;
};
function setAlarm() {
  let time = document.querySelector("#alarmSet").value;
  const timeRemaining = document.querySelector("#timeRemaining");
  timeRemaining.textContent = "Time Remaining: 00" + getFullMinutes(time);
  const intervalId = setInterval(()=> {
    time = time -1;
    console.log(time);
    timeRemaining.textContent = "Time Reamining: 00:" + getFullMinutes(time);
    if (time === 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 100)
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

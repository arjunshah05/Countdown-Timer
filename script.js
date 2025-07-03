let timer;
let totalSeconds = 0;
let isPaused = false;

function startTimer() {
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  if (totalSeconds === 0 || isPaused === false) {
    totalSeconds = minutes * 60 + seconds;
  }

  if (totalSeconds <= 0) return;

  isPaused = false;

  clearInterval(timer);
  timer = setInterval(() => {
    if (!isPaused && totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    }

    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  totalSeconds = 0;
  isPaused = false;
  updateDisplay();
}

function updateDisplay() {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById("display").textContent = `${mins}:${secs}`;
}

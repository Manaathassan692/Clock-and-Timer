// Clock Functionality
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  }
  setInterval(updateClock, 1000);
  updateClock(); // Initialize immediately
  
  // Timer Functionality
  let timerInterval;
  let timerSeconds = 0;
  
  function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  }
  
  function startTimer() {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        timerSeconds++;
        document.getElementById('timer').textContent = formatTime(timerSeconds);
      }, 1000);
    }
  }
  
  function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  
  function resetTimer() {
    pauseTimer();
    timerSeconds = 0;
    document.getElementById('timer').textContent = formatTime(timerSeconds);
  }
  
  // Event Listeners
  document.getElementById('start-timer').addEventListener('click', startTimer);
  document.getElementById('pause-timer').addEventListener('click', pauseTimer);
  document.getElementById('reset-timer').addEventListener('click', resetTimer);
  
  // Initialize Timer Display
  document.getElementById('timer').textContent = formatTime(timerSeconds);
  
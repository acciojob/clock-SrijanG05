//your JS code here. If required.
function updateTimer() {
    const now = new Date();
    
    const dateTimeString = now.toLocaleString();
    
    document.getElementById('timer').innerHTML = dateTimeString;
  }

  updateTimer();

  setInterval(updateTimer, 1000);

	

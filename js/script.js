const yearEl = document.querySelector(".year");
function updateTime() {
  const now = new Date();
  const options = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short'
  };

  const formattedDateTime = now.toLocaleString('en-GB', options);
  yearEl.textContent = formattedDateTime;
}

// Run the function immediately
updateTime();

// Update the display every 5000ms (5 second)
setInterval(updateTime, 5000);
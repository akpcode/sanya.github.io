function updateDateTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const time = currentDate.toLocaleTimeString('en-US');
  

    document.getElementById('date').textContent = `Current day of the week is ${formattedDate}`;
    document.getElementById('time').textContent = `Current UTC ${time}`;
    document.getElementById('track').textContent = `Front-End Development`;
    document.getElementById('git-link').textContent = `https://github.com/akpcode`;
}


// Call the function to initially display the date and time
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);

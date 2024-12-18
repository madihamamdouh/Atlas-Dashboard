function updateDateTime() {
     const now = new Date(); 

     const hours = String(now.getHours()).padStart(2, '0');
     const minutes = String(now.getMinutes()).padStart(2, '0');
    
     document.getElementById('time').textContent = `${hours}:${minutes}`;

     // Format Date (Day, Month Date, Year)
     const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
     const formattedDate = now.toLocaleDateString('en-US', options);
     document.getElementById('date').textContent = formattedDate;
 }
 
 // Update time and date every second
 setInterval(updateDateTime, 1000);
 updateDateTime();
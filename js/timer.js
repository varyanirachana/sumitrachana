function updateTimer() {
 future = Date.parse("dec 10, 2022 12:00:00");
 now = new Date();
 diff = future - now;

 days = Math.floor(diff / (1000 * 60 * 60 * 24));
 hours = Math.floor(diff / (1000 * 60 * 60));
 mins = Math.floor(diff / (1000 * 60));
 secs = Math.floor(diff / 1000);

 d = days;
 h = hours - days * 24;
 m = mins - hours * 60;
 s = secs - mins * 60;

 document.getElementById("timer")
  .innerHTML =
  d + '<b>Days </b>' + h + '<b>Hours </b>' + m + '<b>Minutes </b>' + s + '<b>Seconds </b>';
  
}
setInterval('updateTimer()', 1000);

//javascript
//LOLCAT Clock!!!

var time = new Date().getHours();
var wakeUp = 8;
var noon = 12;
var napTime = 14;
var evening = 17;
var partyTime = 21;

var partyTimeButton = document.getElementById ("partyTimeButton");

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var luchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function()
{

var messageText;
var timeEvent = document.getElementById ("timeEvent");
var lolcatImage = document.getElementById ("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

if (time < noon){
	messageText = "good morning!";
}

else if (time == noon){
  messageText = "lunch time!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
}

else if (time == wakeUp){
  messageText = "Wake up time!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
}

else if (time == napTime){
  messageText = "nap time!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
}

else if (time >= evening && time < partyTime){
	messageText = "good evening!";
}

else if (time == partyTime){
  messageText = "LET'S PARTY!!!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
}

else{
  messageText = "good afternoon!"
  image = "https://i.ytimg.com/vi/prALrHUJ8Ns/hqdefault.jpg";
}

timeEvent.innerText = messageText;
lolcatImage.src = image;

console.log(messageText);

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById("clock");

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

showCurrentTime();

};

updateClock ();

var oneSecond = 1000;

setInterval (updateClock, oneSecond);

var isPartyTime = false;

var partyEvent = function()
{

  if (isPartyTime == false) {
  isPartyTime = true;
  time = partyTime;
  partyTimeButton.innerText = "PARTY TIME!";
  partyTimeButton.style.background = "#0A8DAB";
   }
  else {
  isPartyTime = false;
  time = new Date() .getHours();
  partyTimeButton.innerText = "PARTY OVER";
  partyTimeButton.style.background = "#222";
   }
};

partyTimeButton.addEventListener("click", partyEvent);

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var wakeUpEvent = function(){
  wakeUpTime = wakeUpTimeSelector.value;
};

var lunchTimeEvent = function (){
  lunchTime = lunchTimeSelector.value;
};

var napTimeEvent = function(){
  napTime = napTimeSelector.value;
};

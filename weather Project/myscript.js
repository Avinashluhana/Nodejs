const date = document.getElementById("date")

const icon = document.getElementById("icon");

const tempStatus = "{%status%}";


if (tempStatus == "Sunny") {
  icon.innerHTML =
    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
} else if (tempStatus == "Clouds") {
  icon.innerHTML =
    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
} else if (tempStatus == "Rainy") {
  icon.innerHTML =
    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
} else {
  icon.innerHTML =
    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
}

  

const getCurrentDay = () => {
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thurs";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  let currentTime = new Date();
  // let day = weekday[currentTime.getDay()];
  let day = weekday[currentTime.getDay()];
  return day;
};


const getCurrentDate = () => {
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
]
 var now = new Date();
 var month = now.getMonth() +1;
 var day = now.getDate();
 let hours = now.getHours();
 let minutes = now.getMinutes();
 var timePeriod = "AM";

 if(hours > 11){
   timePeriod = "PM";
    if(hours > 12 ) hours -=12;
 }

 if (minutes < 10){
   minutes = "0"+minutes;
 }

 return `${months[month-1]} ${day} | ${hours}:${minutes} ${timePeriod}`
};


date.innerHTML = getCurrentDate() + " | " + getCurrentDay();
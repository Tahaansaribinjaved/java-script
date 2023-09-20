var dateInp = document.getElementById("date-input");

var setYears = document.getElementById("years");
var setMonths = document.getElementById("months");
var setDays = document.getElementById("days");
var setHours = document.getElementById("hours");
var setMinutes = document.getElementById("minutes");
var setSeconds = document.getElementById("seconds");

var dob
var getAge
var ageInSeconds ;
var years ;
var months ;
var days ;
var hours;
var minutes ;
var seconds ;




 function ageCalculate (){
    setYears.innerText = "-"
    setMonths.innerText = "-"
    setDays.innerText = "-"
    setHours.innerText = "-"
    setMinutes.innerText = "-"
    setSeconds.innerText = "-"

    if (dateInp.value != "") {
        
   
    var date = new Date();
    var currentDate = date.getTime();
    dob = new Date(dateInp.value);

    if ( currentDate <=  dob.getTime() ) {
    

        
        }else{

            getAge = currentDate - dob.getTime();
    
            ageInSeconds = getAge / 1000;     
            years = Math.floor(ageInSeconds / 31536000);
            ageInSeconds %= 31536000;
            
            months = Math.floor(ageInSeconds / 2592000); 
            ageInSeconds %= 2592000;
            
            days = Math.floor(ageInSeconds / 86400);     
            ageInSeconds %= 86400;
            
            hours = Math.floor(ageInSeconds / 3600); 
            ageInSeconds %= 3600;
            
             minutes = Math.floor(ageInSeconds / 60); 
             seconds = Math.floor(ageInSeconds % 60);
         
            console.log(years, months, days, hours, minutes, seconds);
        
            setYears.innerText = years
            setMonths.innerText = months
            setDays.innerText = days
            setHours.innerText = hours
            setMinutes.innerText = minutes
            setSeconds.innerText = seconds
        }
    }
 }



    setInterval(function () {

        var currentDate = new Date();
        var newDate = currentDate.getTime();

 if ( years !== undefined) {

  if (newDate <=  dob.getTime()) {

    }else{
        getAge = newDate - dob.getTime();

        ageInSeconds = getAge / 1000;     
        years = Math.floor(ageInSeconds / 31536000);
        ageInSeconds %= 31536000;
        
        months = Math.floor(ageInSeconds / 2592000); 
        ageInSeconds %= 2592000;
        
        days = Math.floor(ageInSeconds / 86400);     
        ageInSeconds %= 86400;
        
        hours = Math.floor(ageInSeconds / 3600); 
        ageInSeconds %= 3600;
        
        minutes = Math.floor(ageInSeconds / 60); 
        seconds = Math.floor(ageInSeconds % 60);

        console.log(years, months, days, hours, minutes, seconds);

        setYears.innerText = years
        setMonths.innerText = months
        setDays.innerText = days
        setHours.innerText = hours
        setMinutes.innerText = minutes
        setSeconds.innerText = seconds
    }
   
}

    },1000)

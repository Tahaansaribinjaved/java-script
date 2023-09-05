var obj = new Date()
var convert = obj.toDateString()

var dta = convert.slice(0,15)
document.getElementById('date').innerHTML =  dta

function Time() {
    var date = new Date ()
    var hh = date.getHours() 
    var mm = date.getUTCMinutes()
    var ss= date.getSeconds()
    var session = "AM"
    if(hh == 0 ){
        hh = 12
    }
    
    if(hh > 12 ){
        hh = hh - 12
        session = "PM"
    }
    
    
    var time  = hh + ':' + mm + ":" + ss + " " + session  
    document.getElementById("time").innerText = time;
    var t = setTimeout(function(){Time()},1000)
    
}
Time()
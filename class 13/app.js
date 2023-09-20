// var date = new Date()

// var getDay = date.getTime()

// document.write(getDay)
// var covert = date.toString()
// var copy = covert.slice(16,25)



// document.write(datmili+'<br>')
// document.write(dobMili)
// document.write(minus)

var dob = new Date(document.getElementById('inp').value)
var getYears = document.getElementById('years')
var getMonth = document.getElementById('month')
var getDay = document.getElementById('day')
var getHour = document.getElementById('hour')
var getMinute = document.getElementById('minute')
var getSecond = document.getElementById('second')
function cal() {
    if (dateInp != '') {
        var date = new Date()
        var datmili = date.getTime()
        var dobMili = dob.getTime()
        var minus = datmili - dobMili
        if (datmili <= dobMili) { }
        else {

            var formulaofyear = Math.floor( minus / (1000 * 60 * 60 * 24 * 365))
            var forOfMonth = Math.floor(minus / (1000 * 60 * 60 * 24 * 30))
            var forOfDay = Math.floor( minus / (1000 * 60 * 60 * 24))
            var forOfHour = Math.floor(minus / (3600000))
            var forOfminute = Math.floor(minus / (60000))
            var forOfsec = Math.floor(minus / (1000))
            getYears.innerText = formulaofyear
            getMonth.innerText = forOfMonth
            getDay.innerText = forOfDay
            getHour.innerText = forOfHour
            getMinute.innerText = forOfminute
            getSecond.innerText = forOfsec
        }

    }

}
setInterval(function(){
    var currentDate = new Date();
    var newDate = currentDate.getTime();

    if ( years !== undefined) {

        if (newDate <=  dob.getTime()) {
      
          }else{
// var dob = new Date(document.getElementById('inp').value)

//     var date = new Date()
// var datmili = date.getTime()
// var dobMili = dob.getTime()
// var minus = datmili - dobMili
    var formulaofyear = Math.floor( minus / (1000 * 60 * 60 * 24 * 365))
    var forOfMonth = Math.floor(minus / (1000 * 60 * 60 * 24 * 30))
    var forOfDay = Math.floor( minus / (1000 * 60 * 60 * 24))
    var forOfHour = Math.floor(minus / (3600000))
    var forOfminute = Math.floor(minus / (60000))
    var forOfsec = Math.floor(minus / (1000))
    getYears.innerText = formulaofyear
    getMonth.innerText = forOfMonth
    getDay.innerText = forOfDay
    getHour.innerText = forOfHour
    getMinute.innerText = forOfminute
    getSecond.innerText = forOfsec
}}
},1000)















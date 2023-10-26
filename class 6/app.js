var userInp = prompt('Enter city name')
var f = userInp[0].toUpperCase()
var l = userInp.slice(1).toLowerCase()
var res = f + l

var arr = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta']
var match = false

for (var i = 0; i < arr.length; i++) {
    if (res == arr[i]) {
        match = true
        alert('city found')
        break
    }
}

if(match == false){
    alert('city not found')
}


// if(userInp ==) 



// var arr = ['salman', 'arbaz', 'sohail']
// var arr2 = ['saleem khan', 'asad']


// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j <arr2.length ; j++){
//         document.write(arr[i]+' '+arr2[j] +'<br>')
//     }




// for (var i = 1; i < 100; i = i + 10) {
//     for (var j = i; j < i + 10; j++){
//         document.write(j+" ")

//     }
// document.write("<br>")
        // document.write(i, '<br>')
// }














    // document.write(arr[i] + ' ' + arr2 +"<br>")

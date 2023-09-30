// JSON.stringify()
// JSON.parse()

// var obj = { 

//     firstName :  'Taha' ,
//     lastName : 'Ansari' 
// }
 
// for(var key in obj){
//     document.write(obj[key],'<br>')
// }



// var a = JSON.stringify(obj)
// document.write(a)
//  var b = JSON.parse(a)
// document.write(b)
function Signup(){
    var email = document.getElementById('semail')
    var password = document.getElementById('spass')
    var obj = {
        email : email.value , 
        password : password.value
    }
    // localStorage.setItem('Email',email.value)
    // localStorage.setItem('Password',password.value)

}
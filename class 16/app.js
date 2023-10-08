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
var allUsers = []

var Users = localStorage.getItem('Users')
if(Users !== null){
    allUsers = JSON.parse(Users)

}
var check = document.getElementById('check')
// var b = check.checked
// var c = document.createElement('inp')
// var a = check.getAttribute('type','text')
// if(check = b){
    // alert('a')
    // 
    // console.log(a)
    
// }



function Signup(){
    var email = document.getElementById('semail')
    var password = document.getElementById('spass')
    // var getName =  document.getElementById('stext')
    // var name = document.getElementById('name')
    // getName.value = name.innerText
    var obj = {email : email.value , 
        password : password.value
    }
    allUsers.push(obj)
    localStorage.setItem('Users',JSON.stringify(allUsers))
    localStorage.setItem('Password',password.value)
    email.value = ''
    password.value = ''
    location.href = 'login.html'
    
}
var a = JSON.parse( localStorage.getItem('Users'))
// document.write(a)
function Signin(){
    var email = document.getElementById('lemail').value
    var password = document.getElementById('lpass').value
  
    var filterUsers = allUsers.filter(function(data){
        return data.email === email && data.password === password

        
    })
    email.value = ''    
    password.value = ''    
    if(filterUsers.length){
        localStorage.href = 'index.html'
        // alert('user mil gaya')
    }
    else{
        alert('Sign up karka aoe')
    }
}
function Signu(){
    location.href = 'signup.html'
}function Signi(){
    location.href = 'login.html'
}
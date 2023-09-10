// var obj = {
//     s_id : '01',
//     s_name : 'Taha',
//     s_age : '16',
//     s_rollnumber : '128849',
//     s_department : 'web and app development',

// }
// for(var value in obj){

//     document.write(value," : ",obj[value],"<br>")

// }

// localStorage.setItem("firstName","Taha")
// localStorage.clear()
// sessionStorage.setItem("lastname","ansari")






function signup(){
    var email = document.getElementById('UP').value
    var uppass = document.getElementById('upp').value
    localStorage.setItem('Email',email)
    localStorage.setItem('Password',uppass)
    location.href = './index1.html'
    var name = document.getElementById('name').value
    name = document.getElementById('h3')

}

function signin(){
    var email = document.getElementById('IN').value
    var uppass = document.getElementById('inp').value
    if(localStorage.getItem('Email')==email && localStorage.getItem('Password')==uppass){
        location.href = './wellcome.html'
    }
    else{
        alert('invalid email , password')
        location.href = './index.html'
    }
}





















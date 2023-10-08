var allUsers = []

var Users = localStorage.getItem('Users')
if(Users !== null){
    allUsers = JSON.parse(Users)

}
// var check = document.getElementById('check')
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
        location.href = 'index.html'
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


//   Expense managnent system



var getTr = document.getElementById('td')//tr ko get karlia
var gettotal = document.getElementById('total')

var tAmount = 0;
// tAmount = gettotal.innerText
function addExpense() {
    var getTitle = document.getElementById('title')
    var getAmount = document.getElementById('amount')
    var getDate = document.getElementById('date')
    var tr = document.createElement('tr')
    var amountal = parseInt(getAmount.value);
    
    
    var tdt = document.createElement('td')
    tdt.setAttribute('class', "table-light ntd")
    tdt.textContent = getTitle.value
    
    var tda = document.createElement('td')
    tda.setAttribute('class', "table-light ntd")
    tda.textContent = getAmount.value
    
    var tdd = document.createElement('td')
    tdd.setAttribute('class', "table-light ntd")
    tdd.textContent = getDate.value;
    
    var action = document.createElement('td')
    var deletebtn = document.createElement('button')
    var deletebtntext = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtntext)
    action.appendChild(deletebtn)
    deletebtn.setAttribute('onclick', 'del(this)')
    var editbtn = document.createElement('button')
    var editbtntext = document.createTextNode('Update')
    editbtn.appendChild(editbtntext)
    action.appendChild(editbtn)
    editbtn.setAttribute('onclick', 'editfunc(this)')
    deletebtn.setAttribute('class', 'btn btn-danger')
    editbtn.setAttribute('class', 'btn btn-warning ')
    tr.appendChild(tdt)
    tr.appendChild(tda)
    tr.appendChild(tdd)
    tr.appendChild(action)
    
    
    getTr.appendChild(tr)
    if (getTitle.value == '' || getAmount.value == '' || getDate.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You did not write, please write  ',
        }) 
        tr.style.display = "none"
        
    }
    getAmount.value = ''
    getTitle.value = ''
    getDate.value = ''
    tAmount += amountal
    gettotal.textContent = tAmount 
    // var tta=  tda.textContent + tAmount
    // console.log(tta)
    
//     for(var i = 0 ; i >tr.lenght ; i++  ){
// }

}

function deleteAll() {
    getTr.innerHTML = ''
    tAmount = '00'
    gettotal.textContent = tAmount
}
function del(e) {
    e.parentNode.parentNode.remove()
    var a =   e.parentNode.parentNode.children[1].textContent
    tAmount -= a
    gettotal.textContent = tAmount
    // console.log(e.parentNode.parentNode.children[1].textContent)
    
}


function editfunc(e) {
    var a = prompt('Enter update title', e.parentNode.parentNode.firstChild.textContent);
    var b = +prompt('Enter update amount', e.parentNode.parentNode.children[1].textContent);
    var newValue = parseInt(b);
    var oldValue = parseInt(e.parentNode.parentNode.children[1].textContent);

    e.parentNode.parentNode.firstChild.textContent = a;
    e.parentNode.parentNode.children[1].textContent = b;

    tAmount = tAmount - oldValue + newValue;
    gettotal.textContent = tAmount;
}



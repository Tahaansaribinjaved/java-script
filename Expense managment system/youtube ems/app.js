var balanse = document.getElementById('balance');
var moneyPlus = document.getElementById('moneyPlus')
var moneyMinus = document.getElementById('moneyMinus')
var list = document.getElementById('list')
var form = document.getElementById('form')
var form = document.getElementById('form')
var amount = document.getElementById('amount')
var dummyTransition = [
    {id:1, text:"flower", amount: 20 },
    {id:2, text:"salary",amount: 3000 },
    {id:3, text:"podena",amount: 20 },
    {id:4, text:"rice",amount: -60 },

]
var Transition = []
// Addtransition
function addTransaction(e){
    e.preventDefault()
    if(text.value.trim() === "" || amount.value.trim()===""){
        alert('plese')
    }
    else{
        var transaction = {
            id:generateId,
            text:text.value,
            amount: +amount.value
        }
        Transition.push(transaction)
        addTransitionD(transaction)
        updateValues()
        text.value = ""
        amount.value = ''
    }
}
// generate id
function generateId(){
    return Math.floor(Math.random()*100000000)
}

function addTransitionD(Transition){
    var sign = Transition.amount < 0 ? "-" : '+'
    var item = document.createElement('li')
    item.classList.add(
        Transition.amount <  0 ? 'minus': "plus" ,
    )
    // if(Transition[0].amount < 0 ){
    //     item.setAttribute('class', 'minus')
    // }
    // else{
    //     item.setAttribute('class', 'plus')

    // }
    item.setAttribute('class','list')
    item.innerHTML = `
    ${Transition.text   }<span>${sign    }${Math.abs(Transition.amount)}</span>
    <button class='deleteBtn' onclick="" >x</button>   
    `
    list.appendChild(item)
}
// update value
function updateValues (){
    var amount = Transition.map(Transition =>  Transition.amount)
    var total = amount.reduce((acc,item) => (acc += item),0).toFixed(2)
    var income = amount.filter(item => item > 0 ).reduce((acc,item)=>(acc += item),0).toFixed(2)
    var expense = (
        amount.fiiter(item => item< 0 ).reduce((acc,item) => (acc += item),0)* -1
    ).toFixed(2)
    balanse.innerText = `$${total}`
    moneyPlus.innerText = `$${income}`
    moneyMinus.innerText = `$${expense}`
}
  // init app
  function init(){
    list.innerHTML = ''
    Transition.forEach(addTransitionD)
    updateValues()
  }
  init()
  form.addEventListener('submit',addTransition)



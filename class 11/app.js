// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.setAttribute('class','ttt')
//     console.log(b)
// }


var getUl = document.getElementById('ul')

function foo(){
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
   li.appendChild(litext)
    getUl.appendChild(li)
    a.value = ''
    var deletebtn = document.createElement('button')
    var deletebtntext = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
   deletebtn.setAttribute('onclick','del(this)')
   var editbtn = document.createElement('button')
   var editbtntext = document.createTextNode('Edit')
   editbtn.appendChild(editbtntext)
   li.appendChild(editbtn)
   editbtn.setAttribute('onclick','editfunc(this)')
   deletebtn.setAttribute('class','btn btn-danger')
   editbtn.setAttribute('class','btn btn-warning')

}

function deleteall(){
    getUl.innerHTML = '' 
}
function del(e){
e.parentNode.remove()


}
function editfunc(e){
   var a =  prompt('Enter value',e.parentNode.firstChild.nodeValue)
     e.parentNode.firstChild.nodeValue = a

}
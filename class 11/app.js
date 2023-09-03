// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.setAttribute('class','ttt')
//     console.log(b)
// }
 

var getUl = document.getElementById('ul')

function foo(){
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    li.setAttribute('class','ttt')
    var litext = document.createTextNode(a.value)
   li.appendChild(litext)
    getUl.appendChild(li)
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
    deletebtn.setAttribute('class','btn btn-danger aaa')
    editbtn.setAttribute('class','btn btn-warning aaa')
    if (a.value==''){
        alert('Please Write')
        li.style.display = "none"
        
    }
    a.value = ''
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
// var rotating = document.getElementById('word')
// var rotatingParagraph = ["You can add and read about your daily routine..",
//     "You can also delete and edit in your routine..",
//     "Here you can add something that you want to do in your future life.."]
// var currentIndex = 0

// function wordReplacing() {
//     rotating.style.opacity = '0'
//     rotating.style.transform = 'scale(0.9)'
//     setTimeout(() => {
//         rotating.textContent = rotatingParagraph[currentIndex]
//         rotating.style.opacity = '1'
//         rotating.style.transform = 'scale(1)'
//         currentIndex++
//         if (currentIndex >= rotatingParagraph.length) {
//             currentIndex = 0
//         }
//     }, 1000)
// }wordReplacing();
// setInterval(wordReplacing, 5000)
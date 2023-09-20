//   Expense managnent system



var getTr = document.getElementById('td')//tr ko get karlia
var gettotal = document.getElementById('total')
var tAmount = 0;

var tda = document.createElement('td')
function addExpense() {
    var getTitle = document.getElementById('title')
    var getAmount = document.getElementById('amount')
    var getDate = document.getElementById('date')
    var tr = document.createElement('tr')


    var tdt = document.createElement('td')
    tdt.setAttribute('class', "table-light ntd")
    tdt.textContent = getTitle.value

    tda.setAttribute('class', "table-light ntd")
    tda.textContent = getAmount.value

    // var ta = getAmount.value
    // var ta = parseInt(getAmount.value);
    // getAmount += tda.value





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
    var value1 = getTr.appendChild.value
    if (getTitle.value == '' && getAmount.value == '' && getDate.value == '') {
        // alert('Please Write')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You did not write, please write  ',
        })
        tr.style.display = "none"
        // document.createElement('tr') = false
        // document.createElement('td') = false
        // document.createElement('td') = false
        // document.createElement('td') = false
        // tdd.createElement

    }
    getAmount.value = ''
    getTitle.value = ''
    getDate.value = ''


}

function deleteAll() {
    getTr.innerHTML = ''
    // alert('hello')
}
function del(e) {
    e.parentNode.parentNode.remove()


}
function editfunc(e) {
    // const { value: text }
    //     = await Swal.fire
    //         (
    //             {
    //                 input: 'textarea',
    //                 inputLabel: 'Message',
    //                 inputPlaceholder: 'Type your message here...',
    //                 inputAttributes: {
    //                     'aria-label': 'Type your message here'
    //                 },
    //                 showCancelButton: true
    //             })

    // if (text) {
    //     Swal.fire(text)
    // }
    // var childre  = getTr.children[0].children[1]
    //  e.parvar a =  prompt('Enter value fdgds',e.parentNode.parentNode.firstChild.textContent)
    // var b =  prompt('Enter value fdfdgf',childre.textContent)
    // var c =  prompt('Enter value ghg',e.parentNode.parentNode.thirdChild.textContent)
    //   e.parentNode.parentNode.firstChild.textContent = a
    // //   e.parentNode.parentNode.secondChild.textContent = b
    // //  entNode.parentNode.thirdChildChild.textContent = c
}

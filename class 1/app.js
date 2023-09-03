
// 'hello world'
// var abc = 'Taha ansari'
// alert(abc)
// document.write('<h1>It is js first class</h1> ')
// document.write('<h1>'+'hello world'+'</h1>')
// var taha = ' hello world' 
// document.write(taha)
// 
// var a = +prompt("Enter Value 1")
// var b = +prompt("Enter Value 2")
// document.write(a+b)
// document.write(typeof a)
// var add = a + b
// var sub = a - b
// var mul = a * b
// var num1 = "7"
// var num2 = 1
// document.write (num1 - num2)
var num1 = +prompt ('Enter value 1')
var num2 = +prompt ('Enter value 2')
var add = num1 + num2
var subtract = num1 - num2 
var multiply = num1 * num2
var divide = num1 / num2
var modulus = num1 % num2

document.write (
    "<h1>" + "<table border= '1px'>" 
    + "<tr>" 
    + "<th>" + "Addition" + "</th>" 
    + "<th>" + "Subtraction" + "</th>" 
    + "<th>" + "Multiplication" + "</th>" 
    + "<th>" + "Dividing" + "</th>" 
    + "<th>" + "Modulus" + "</th>" 
    + "</tr>"

    + "<tr>"
    + "<td>" + add + "</td>"
    + "<td>" + subtract + "</td>"
    + "<td>" + multiply + "</td>"
    + "<td>" + divide + "</td>"
    + "<td>" + modulus + "</td>"
    +  "</tr>"
    + "</table>"
    + "</h1>"
)
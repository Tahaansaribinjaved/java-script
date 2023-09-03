

var num1 = +prompt ('Enter Value 1')
var num2 = +prompt ('Enter Value 2')
var add = num1 + num2
var subtract = num1 - num2
var multiply = num1 * num2
var divide = num1 / num2
var modulus = num1 % num2



document.write(
    "<h1>" + "<table border= '1px'>" 
    + "<tr>" 
    + "<th>" + "Addition" + "</th>" 
    + "<th>" + "Subtraction" + "</th>" 
    + "<th>" + "Multiply" + "</th>" 
    + "<th>" + "Divide" + "</th>" 
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
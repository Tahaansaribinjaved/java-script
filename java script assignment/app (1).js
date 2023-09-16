// questiion 1

// var a =prompt('please Enter your name') 
// document.write('Hello' +' '+ a)



// question 2

// var userInp = +prompt('Enter a number to print its multiplication table')
// for (i = 1; i <= 10; i++) {
//     document.write(userInp + " x " + i + " = " + userInp * i + '<br>')
// }


// question 3

// var city = +prompt('Please enter your city')

// if(city = "Karachi"){
//     document.write('Wellcome to city of lights')

// }



// question 4


// var gender = prompt('Enter your gender')

// if(gender == 'Male'){
//     document.write('Good morning Sir')
// }
// else if(gender == 'Female'){
//     document.write('Good morning Maam')
// }


// question 5


// var traffic = prompt('color')


// if (traffic == 'Red'){
//     document.write('vehicles must stop')
// }

// else if (traffic == 'Yellow'){
//     document.write('vehicles should get ready to move ')
// }
// else if (traffic == 'Green'){
//     document.write('vehicles can move now')
// }


// question 6

// var a = +prompt('Enter age')
// var b = 18
// if (a<=b){
//     document.write('You are wellcome')
// }

// question 7

// var a = +prompt('Enter Fuel')
// var b = 0.25
// if (a<b){
//     document.write('Please refill the fuel in your car ')
// }


// question 8

//   a.

// var a = 4
// if (++a ===5){
//     alert('Given conditon for variable a is true');
// }
//                                                                chal gaya 


//   b.
// var b = 82;
// if(b++ === 83){
//     alert('given condition for variable b is true');
// }


//                                                               nahi chala


//  c.
// var c = 12;
// if (c++ === 13){
//     alert('cndition 1 is true');
// }
// //                                                               nahi chala
// if (c === 13){
//     alert('cndition 2 is true');
// }
//                                                                nahi chala


// if (++c < 13){
//     alert('cndition 3 is true');
// }


//                                                                nahi chala

// if (c === 14){
//     alert('cndition 4 is true');
// }

//                                                                nahi chala
// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }

//                                                                chal gaya 
//  e.
// if (true){
//     alert("True");
//    }
//    if (false){
//     alert("False");
//    }

//                                                                chal gaya 

//  f.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//    }


//                                                                chal gaya 


// question 9


// var firstSub = +prompt('Enter first subject ')
// var secondSub = +prompt('Enter second subject ')
// var thirdSub = +prompt('Enter third subject ')
// var total = +prompt('Enter total number');
// var obtained = firstSub + secondSub + thirdSub
// var persenteg = (obtained / total) * 100;
// var persentege = persenteg.toFixed(2)
// var grade;
// var remarks;


// if (persentege >= 80) {
//     grade = 'A-one'
//     remarks = 'Excellent'
//     document.write('<h1>' + '<i>' + 'MARKSHEET' + '</i>' + '</h1>'
//         + '<br>' + '<br>' + 'Total marks' + ' : ' + total + '<br>' + '<br>' + 'Mark obtained' + ' : ' + obtained
//         + '<br>' + '<br>' + 'Percentage' + ' : ' + persentege + '%' + '<br>' + '<br>' + 'Grade' + ' : ' + grade + '<br>' + '<br>' + 'Remark' + ' : ' + remarks + '<br>' + '<br>')

// }
// else if (persentege >= 70) {
//     grade = 'A'
//     remarks = 'Good'
//        +'<br>' + '<br>' +'Percentage'+' : '+persentege+'%'+'<br>'+ '<br>' +'Grade'+' : '+'A'+'<br>'+ '<br>' +'Remark'+' : '+'Good'+'<br>'+ '<br>' 
//     document.write('<h1>' + '<i>' + 'MARKSHEET' + '</i>' + '</h1>'
//         + '<br>' + '<br>' + 'Total marks' + ' : ' + total + '<br>' + '<br>' + 'Mark obtained' + ' : ' + obtained
//         + '<br>' + '<br>' + 'Percentage' + ' : ' + persentege + '%' + '<br>' + '<br>' + 'Grade' + ' : ' + grade + '<br>' + '<br>' + 'Remark' + ' : ' + remarks + '<br>' + '<br>')
// }
// else if (persentege >= 60) {
//     grade = 'B'
//     remarks = 'You need to improve'
//         +'<br>' + '<br>' +'Percentage'+' : '+persentege+'%'+'<br>'+ '<br>' +'Grade'+' : '+'B'+'<br>'+ '<br>' +'Remark'+' : '+'You need to improve'+'<br>'+ '<br>' 
//     document.write('<h1>' + '<i>' + 'MARKSHEET' + '</i>' + '</h1>'
//         + '<br>' + '<br>' + 'Total marks' + ' : ' + total + '<br>' + '<br>' + 'Mark obtained' + ' : ' + obtained
//         + '<br>' + '<br>' + 'Percentage' + ' : ' + persentege + '%' + '<br>' + '<br>' + 'Grade' + ' : ' + grade + '<br>' + '<br>' + 'Remark' + ' : ' + remarks + '<br>' + '<br>')
// }
// else {
//     grade = 'Fail'
//     remarks = 'Sorry'
//     document.write('<h1>' + '<i>' + 'MARKSHEET' + '</i>' + '</h1>'
//         + '<br>' + '<br>' + 'Total marks' + ' : ' + total + '<br>' + '<br>' + 'Mark obtained' + ' : ' + obtained
//         + '<br>' + '<br>' + 'Percentage' + ' : ' + persentege + '%' + '<br>' + '<br>' + 'Grade' + ' : ' + grade + '<br>' + '<br>' + 'Remark' + ' : ' + remarks + '<br>' + '<br>')
// }



// question 10



// var item1 = prompt('Name of item1 ')
// var item2 = prompt('Name of item2 ')
// var price1 = prompt('Price of item 1 ')
// var price2 = prompt('Price of item 2')
// var oq1 = prompt('Ordered quantity of item 1')
// var oq2 = prompt('Ordered quantity of item 2')
// var ship = +prompt('Shipping charges')
// var q1 = price1 * oq1
// var q2 = price2 * oq2
// var total = (q2 + q1) + ship

// var discount = total * 10 / 100  
// var minus = total - discount
// document.write('Price of  ' + item1 + ' is ' + price1 + '<br>' + 'Quantity of ' + item1 + ' is ' + oq1 + '<br>' + 'Price of ' + item2 + ' is ' + price2 + '<br>' + 'Quantity of ' + item2 + ' is ' + oq2 + '<br>' + '<br>' + '<br>' + 'Shipping charges' + ship + '<br>' + '<br>' + '<br>' + 'Total cost of your order is  ' + total +'PKR'  + '<br>' )
// // document.write(discount)
// if (total >= 2000){
//     document.write( 'Dicount price is  ' + minus +'PKR' )

// }

// question 11


// var a = 4
// var b = prompt('guess number')
// if(a == b){
//     alert('“Bingo! Correct answer”')

// }
// else{
//     alert('“Close enough to the correct answer”')
// }

// question 12
// var a = prompt(' given number is divisible by 3.')
// if(a % 3 == 0){
//     alert('the number is divisible by 3')
// }
// else {
//     alert('the number is not divisible by 3')

// }


// question 13
// var teama = prompt('Enter Team A')
// var teamb = prompt('Enter Team B')
// var teamas = +prompt('Enter Team A score')
// var teambs = +prompt('Enter Team B score')
// if (teamas > teambs) {
//     alert(teama + ' have won the match')

// }
// else if (teambs > teamas) {
//     alert(teamb + ' have won the match')

// }
// else if(teamas === teambs ){
//     alert(' Match is a Tie')
// }
// question 14


// var s = "Pakistan " + typeof 'Pakistan' + "<br>" +
// "3.14 is " + typeof 3.14 + "<br>" +
// "NaN is " + typeof NaN + "<br>" +
// "false is " + typeof false + "<br>" +
// "[1, 2, 3, 4] is " + typeof [1, 2, 3, 4] + "<br>" +
// "{name:'Taha', age:16} is " + typeof {name:'Taha', age:16} + "<br>" +
// "new Date() is " + typeof new Date() + "<br>" +
// "function () {} is " + typeof function () {} + "<br>" +
// "myCar is " + typeof myCar + "<br>" +
// "null is " + typeof null;

// document.write(s)

// question 15

// var a = +prompt('Enter number')
// if(a %2 === 0){
//     alert('number is even')
// }
// else{
//     alert('number is odd')
// }
// question 16





// var T = +prompt('Enter Tempreture')
// if (T > 40){
//     alert('“It is too hot outside.”')

// }
// else if(T > 30){
//     alert('“The Weather today is Normal.”')

// }else if(T > 20){
//     alert('“Today’s Weather is cool.”')

// }else if(T > 10){
//     alert(' “OMG! Today’s weather is so Cool.”')

// }


// question 17



var num1 = +prompt('Enter Value 1')
var num2 = +prompt('Enter Value 2')
var op = prompt('Enter Operatur')
var add = num1 + num2
var subtract = num1 - num2
var multiply = num1 * num2
var divide = num1 / num2
var modulus = num1 % num2


// function sum(a = num1, b = num2) {
//     return a + b
// }
// function min(a = num1, b = num2) {
//     return a - b
// }

// if (op = '+') {
//     alert(sum())
// }
// else if (op = '-') {
//     alert(min())
// }
// else if (op = '*') {
//     alert(num1 + ' * ' + num2 + ' is ' + multiply)
// }
// else if (op = '/') {
//     alert(num1 + ' / ' + num2 + ' is ' + divide)
// }
// else if (op == '%') {
//     alert(num1 + ' % ' + num2 + ' is ' + modulus)
// }
// else {
//     alert('Operater is eror ')
// }
function db(e) {
    alert(e) 
    //   DOMPointReadOnly
}
if(op ='+'){
    db(add)
}
else if(op ='-'){
    db(subtract)
}

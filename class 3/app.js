// chapter 10 If statement

// single = se value ko asing
//var a = 'taha'

// double == se condition ko check karaye ga or srif value ko check karaga 
// triple === se data type ko bhi check karaga 




// if (5==="5"){
//     document.write('han sahi han')
// }
// else{
//     document.write('hana galat ha')

// }

// var email = prompt("Enter email")
// var password = prompt("Enter password")
// // var email = "admin"
// // var password = "ädmin"
// if(email== 'taha'|| password =='123456'){
//     document.write("login succesful")
// }
// else{
//     document.write("invalid")
// }
// = assigning opreater
// == value match
//=== value ka sath datatype bhi check
// && left and right dono true hona zarori hai
// || koi bhi aik side true hona zarori hai
// < less than 
// > greather than 
// <= less than equal to
// >= greather than equal to 
// != not equal to   


// var userInput = +prompt ("Enter Persentage")
// if(userInput >= 80 && userInput <= 100){
//     document.write("A+")
// }
// else if( userInput  >= 70 && userInput  <80){
//     document.write ("A")
// }else if( userInput  >= 60 && userInput  <70){
//     document.write ("B")
// }else if( userInput  >= 50 && userInput  <60){
//     document.write ("C")
// }else if( userInput  >= 40 && userInput  <50){
//     document.write ("D")
// }else if( userInput  > 100  ){
//     document.write ("Invalid percentage")
// }
// else {
//     document.write ("Fail")
// }


var name = prompt ("Enter your name")
var biology = +prompt ("Ënter number of Biology")
var chemistry = +prompt ("Ënter number of Chemistry")
var physics = +prompt ("Ënter number of Physics")
var math = +prompt ("Ënter number of Math")
var islamiat = +prompt ("Ënter number of Islamiat")
var total = biology + chemistry + physics + math +islamiat 
 var percentage = (total/500 ) * 100
document.write(
         "<table border= '1px' > " + "<tr>"+ "<th>"+"Name" + "</th>" +"<td>"+ name +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Biology" + "</th>" +"<td>"+ biology +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Chemistry" + "</th>" +"<td>"+ chemistry +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Physics" + "</th>" +"<td>"+ physics +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Math" + "</th>" +"<td>"+ math +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Islamiat" + "</th>" +"<td>"+ islamiat +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Total" + "</th>" +"<td>"+ total +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Percentage" + "</th>" +"<td>"+ percentage +"</td>"+"</tr>"  +"</table>"
    )
// if (percentage >= 80){
//     document.write(garade "A")
// }    
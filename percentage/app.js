var name = prompt ("Enter your name")
var biology = +prompt ("Ënter number of Biology")
var chemistry = +prompt ("Ënter number of Chemistry")
var physics = +prompt ("Ënter number of Physics")
var math = +prompt ("Ënter number of Math")
var islamiat = +prompt ("Ënter number of Islamiat")
var total = biology + chemistry + physics + math +islamiat 
 var percentage = (total/500 ) * 100

var grade ;


// var userInput = +prompt ("Enter Persentage")
if(percentage >= 80 && percentage <= 100){
    grade = "A+"
    
}
else if( percentage  >= 70 && percentage  <80){
       grade = "A"
    }else if( percentage  >= 60 && percentage  <70){
        grade = "B"
    }else if( percentage  >= 50 && percentage  <60){
        grade = "C"
    }else if( percentage  >= 40 && percentage  <50){
        grade = "D"
    }else if( percentage  > 100  ){
        percentage = "Invalid percentage"
    // document.write ("Invalid percentage")
    // a === 0
    
}
else {
    grade = "Fail"
}
    document.write(
            "<table border= '1px' text-align='center' > " + "<tr>"+ "<th>"+"Name" + "</th>" +"<td>"+ name +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Biology" + "</th>" +"<td>"+ biology +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Chemistry" + "</th>" +"<td>"+ chemistry +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Physics" + "</th>" +"<td>"+ physics +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Math" + "</th>" +"<td>"+ math +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Islamiat" + "</th>" +"<td>"+ islamiat +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Total" + "</th>" +"<td>"+ total +"</td>"+"</tr>"+ "<tr>"+ "<th>"+"Percentage" + "</th>" +"<td>"+ percentage +"</td>"+"</tr>" + "<tr>"+ "<th>"+"Grade" + "</th>" +"<td>"+ grade +"</td>"+"</tr>"  +"</table>"
      )
   
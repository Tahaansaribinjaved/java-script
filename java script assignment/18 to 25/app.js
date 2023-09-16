// question 1


// for(var i =1;i <=5 ; i++ ){
//     document.write('hello world'+'<br>')
// }
// question 2
//  for(var i = 1 ;i <= 10 ; i++ ){
//     document.write(i+'<br>')
//  }
// question 3


// var userInp = +prompt('Enter value')
// var t = +prompt('Want length')
// for (var i =1 ; i<=t ; i++){
// document.write('<table border="1px">'+'<tr>'+'<td>'+userInp+'</td>'+'<td>'+' x '+'</td>'+'<td>'+i+'</td>'+'<td>'+' = '+'</td>'+'<td>'+userInp*i+'</td>'+'</tr>'+'</table>')
// }
// question 4

// var A = ['Nokia', ' Samsung', 'Apple', 'Sony', 'Huawei'];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i]+'<br>');
// }
// question 5
// var fruit = ['apple','banana', ' “mango”',' “orange”', '“strawberry”']
// for(var i = 0; i <fruit. length;i++ ){
//     document.write(fruit[i]+'<br>' )
// }
// question 6
// Ask the user for the number of items in the array
var numberOfItems = parseInt(prompt("Enter the number of items in the array:"));

// Initialize an empty array to store the items
var myArray = [];

// Use a loop to prompt the user for each item and add it to the array
for (var i = 0; i < numberOfItems; i++) {
    var item = prompt("Enter item " + (i + 1) + ":");
    myArray.push(item);
}

// Display the initialized array
document.write("Initialized array:", myArray);





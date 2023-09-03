var userInp = +prompt('Enter value')
var t = +prompt('Want length')
for (var i =1 ; i<=t ; i++){
document.write('<table border="1px">'+'<tr>'+'<td>'+userInp+'</td>'+'<td>'+' x '+'</td>'+'<td>'+i+'</td>'+'<td>'+' = '+'</td>'+'<td>'+userInp*i+'</td>'+'</tr>'+'</table>')
}
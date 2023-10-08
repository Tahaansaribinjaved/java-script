var userInp = +prompt('Enter value')
var t = +prompt('Want length')
for (var i =1 ; i<=t ; i++){
document.write('<table class="a" border="1px">'+'<tr>'+'<td>'+userInp+'</td>'+'<td>'+' x '+'</td>'+'<td>'+i+'</td>'+'<td>'+' = '+'</td>'+'<td>'+userInp*i+'</td>'+'</tr>'+'</table>')
} 
if (userInp == '' || t == '' ){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="index.html">Again</a>'
      })
}

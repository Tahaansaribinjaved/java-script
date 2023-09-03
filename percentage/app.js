var userInput = +prompt ("Enter Persentage")
if(userInput >= 80 && userInput <= 100){
    document.write("A+")
}
else if( userInput  >= 70 && userInput  <80){
    document.write ("A")
}else if( userInput  >= 60 && userInput  <70){
    document.write ("B")
}else if( userInput  >= 50 && userInput  <60){
    document.write ("C")
}else if( userInput  >= 40 && userInput  <50){
    document.write ("D")
}else if( userInput  > 100  ){
    document.write ("Invalid percentage")
}
else {
    document.write ("Fail")
}
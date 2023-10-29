//  dataa type class

// false = 0
// true = 1
// false + true = 1
// false - true = -1
// true - true = 0 
// false - true
// var myName  = 'TAha'



//   1 intervive  question   
// diffrence b/w undefined vs null?


// var myName = null;
// console.log(typeof());
// var my;
// console.log(my);




// var myPhoneNumber = 56748975645;
// console.log(isNaN(myPhoneNumber))
// var myName = 'Taha Ansari';
// console.log(isNaN(myName))





// var x =  5;   
// var y = 5;
// console.log(`is both x and y ${x ==  y}  `);


// var t = 'rainn';

// if(t=='rain'){
//     console.log('rain');
// }

// else{
//     console.log('norain');
// }

// var year = 2020;
// if(year%4=== 0 ){
// if(year%100===0){
// if(year%400===0){

//     console.log(`${year} is  a leap year`);
// } 
// else{
//     console.log(`${year} is not a leap year`);

// }
// }
// else{
//     console.log(`${year} is  a leap year`);

    
// }
//     // console.log();
// } 
// else{
//     console.log(`${year} is not a leap year`);
// }

// var age = 17 ;
// if(age >=18){
//     console.log(`you can vote`);
// }
// else{
//     console.log(`you can't vote`);
// }
// console.log((age>=18?`you can vote`:`you can't vote`));









// var area = "rectangle";
// const PI=3.142,l=5,b=4,r=3;  



// if(area== "circle"){
//     console.log(`The area of circle is : ${PI*r**2}`);
// }else if(area=="triangle"){
//     console.log(`The area of triangle is : ${(l*b)/2}`);
    
// }else if(area=="rectangle"){
//     console.log(`The area of rectangle is : ${(l*b)}`);

// }else{
//     console.log("Enter valid data");
// }






var area = "circle";
const PI=3.142,l=5,b=4,r=3;  

switch(area){
    case 'circle':
        console.log(`The area of circle is : ${PI*r**2}`);
        break;
    case 'triangle':
        console.log(`The area of triangle is : ${(l*b)/2}`);
        break;
    case "rectangle":
        console.log(`The area of rectangle is : ${(l*b)}`);
        break;
    default:
        console.log(`please Enter valid data`);

}




























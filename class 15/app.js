// var obj = {
//     firstName : 'Taha',
//     lastName : 'Ansari', 
//     arr : ['Hamza', 23, 10.14, true],
// }   
// for(var key in obj){

//     document.write(Object.values(obj))


//     // for (var i = 0 ; i < obj.arr.length ; i++){
//     // document.write(obj.arr[i],'<br>')

//     // }
// }
// for(var i = 0 ; i <obj.arr.length ;i++ ){
//     document.write(obj.arr[i],'<br>')

// }


// var arrOfObj = [
//     {
//         p_id: '01',
//         p_name: 'Samsung',
//         p_price: '45000',
//           p_img : 'data:image/jpeg;base64,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',
//
         //
//     },
//     {}, 
//     {}
// ]
// var getImage = document.getElementById('img')
// getImage.src = arrOfObj[0].p_img
// getImage.setAttribute('class','imgClass')
// document.write(arrOfObj[0].p_img)

// var quesAns = [
//     {
//         ques1 : 'what is the sum of 2 + 2',
//         ans1 :  '2',
//         ans2 :  '4',
//         ans3 :  '5',
//         ans4 :  '6'
//     },{
//         ques1 : 'what is the sum of 10 + 10',
//         ans1 :  '20',
//         ans2 :  '40',
//         ans3 :  '50',
//         ans4 :  '60'
//     },{
//         ques1 : 'what is the product of 3 * 2',
//         ans1 :  '6',
//         ans2 :  '7',
//         ans3 :  '9',
//         ans4 :  '2'
//     },
// ]
// var getQues = document.getElementById('ques')
// var getAns1 = document.getElementById('ans1')
// var getAns2 = document.getElementById('ans2')
// var getAns3 = document.getElementById('ans3')
// var getAns4 = document.getElementById('ans4')
// var index = 0
// // getQues.innerHTML = quesAns[0].ques1
// // getAns1.innerHTML = quesAns[0].ans1
// // getAns4.innerHTML = quesAns[0].ans4
// // getAns2.innerHTML = quesAns[0].ans2
// // getAns3.innerHTML = quesAns[0].ans3
// function nextQues(){

//     if(index > quesAns.length -1){
//         console.log('question khatam hogai ')
//     }
//     else{

//         getQues.innerHTML = quesAns[index].ques1
//         getAns1.innerHTML = quesAns[index].ans1
//         getAns4.innerHTML = quesAns[index].ans4
//         getAns2.innerHTML = quesAns[index].ans2
//         getAns3.innerHTML = quesAns[index].ans3
//         index++
//     }
// }
// nextQues()




// var arr = [1446,454,454,150,22,2,456489,21135,232,54678,9,1,65,456,5,45,546,54,]
// var filterAr = arr.filter(function(e){
    //     return e > 150
    
    // } )
    // console.log(filterAr)
    ///               forEach method

// var  arr = ['hammad ', 'taha','ansari','wasif','ansari' ]
// arr.forEach(function(e){
//     console.log(e)    
// })

// const numbers = [1, 2, 3, 4];

// numbers.forEach((num) => {
//     console.log(num * 2);
// });

    //                     map method
// var  arr = ['hammad ', 'taha','ansari','wasif','ansari' ]
// arr.map(function(e){
//     console.log(e)    
// })


// const numbers = [1, 2, 3, 4];

// const doubledNumbers = numbers.map((num) => {
//   return num * 2;
// });

// console.log(doubledNumbers);








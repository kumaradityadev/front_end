// function sayName(){
//     var name = 'Aditya'
//     console.log(name);
    
// }

// sayName()


// function sum(){
//     var a = 10;
//     var b= 20;
//     var c = (a+b)
//     console.log(c);
    
// }
// sum()

// function sum (a,b){
//       console.log(a+b);
      
// }
// sum(10,20)
// sum(100,200)

// function sayName(Name){
//     console.log(Name);
    
// }
// sayName('Aditya')
// sayName('Mohit')

// function multi(a,b){
//     console.log(a*b);
    
// }
// multi(2,3)
// multi(20,3)
// multi(200,3)

// function sub(a,b){
//     console.log(a-b);
    
// }
// sub(20,10);
// sub(200,100);
// sub(200,100);

// function multi(a,b){
//     var mul = a*b
//     return mul
// }
// var c = multi(2,3)
// console.log(c);

// function adding(a,b){
//     var add=(a+b)
//     return add
// }
// var c = adding(5,5)
// console.log(c);



// function subtract(a,b){
//     console.log(a-b);
    
// }
// subtract(200,10)

// function subtract(a,b){
//     var sub = a-b
//     return sub
// }
// var c = subtract(50,20)
// console.log(c);

// function multiply(a,b){
//     var multi = a*b
//     return multi
// }
// var final = multiply(40,20)
// console.log(final);


// function divied(a,b){
//     var div = a/b
//     return div
// }
// var final = divied (20,2)
// console.log(final);


// function adding(a,b){
//     var add = a+b
//     return add
// }
// var final = adding (20,20)
// console.log(final);



// function multi(a,b){
//     var mul = a-b;
//     return mul;
// }
// var final = multi(20,5)
// console.log(final);

// function sum(a,b){
//     var sum1 = a+b;
//     return sum1
// }
// var sumfinal = sum(10,20)
// console.log(sumfinal);

// function square(x){
//     var sq = x * x;
//     return sq;
// }
// var sqfinal = square(sumfinal)
// console.log(sqfinal);


// function adding(a,b){
//     var add = a+b;
//     return add
// }
// var c = adding(2,3)
// console.log(c);

// function square(x){
//     var sq = x * x ;
//     return sq ;
// }
// var d = square(c)
// console.log(d);


// revision 

// funcation

// function sayname(){
//     var name = 'Aditya';
//     console.log(name);
    
// }
// sayname()

//Generic funcation

// function sayName(name){
//     console.log(name);
    
// }

// sayName('Aditya') ;
// sayName('Adit') ;
// sayName('Adiii') ;
// sayName('Adiii') ;

// function adding(a,b){
//     var add = a+b
//     return add
// }

// var c = adding(10,20)
// console.log(c);


// function adding(a,b){
//     var add = a+b;
//     return add;
// }
// var c = adding (3,2);
// console.log(c);

// function square(a){
//     var sq = (a*a)
//     return sq
// }
// var d = square(c)
// console.log(d);

// Asainment

function primeNumber(num){
    var factor = 0;
    for ( var i=0; i<=num; i++){
        if(num%i==0){
            factor ++
        }
    }
   
}
if(factor==2){
    return true
}
else{
    return false
}
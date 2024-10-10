// // Arrow funcation ..
// // var sayname = () => {
// //     console.log('Mohit');
    
// // }
// // sayname ()

// // var sayname = (akd) => {
// //     console.log('hii', akd);
    
// // }

// // sayname ('Aditya kumar developer')



// // Arrow funcation single data shorthand
// // var sayname = () => 'Black list people of my life'
// // console.log(sayname());

// // var sayhii = () => 'Hii' ;
// // console.log(sayhii());


// // var sayname = () =>{
// //     console.log('Aditya');
    
// // }
// // sayname()

// // var sayname = (name1) => {
// //     console.log(name1);
    
// // }

// // sayname('Aditya123')


// // var sayhii = () => 'Hiiiiiiii' ;
// // console.log(sayhii());

// // var sayhii = () => {
// //     console.log('Hiiiiiiii1');
    
// // }

// // sayhii() ;

// // var sayhii = (a) => a 
// //     console.log(sayhii('Aditya'));
    


// // var sayhii = () => {
// //     console.log('Aditya123');
    
// // }
// // sayhii()

// // var sayname = (akd) => {
// //     console.log(akd);
    
// // }
// // sayname('Aditya kumar developer')

// // var sayname =() => 'Aditya Kumar' ;
// // console.log(sayname());


// // Different between lets var & const 

// // var a = 10 ;  // decelear
// // console.log(a);


// a = 20 ; // re - asaign 
// console.log(a);

// var a = 30 ; // re - decelear
// console.log(a);

// let b = 10 ; // decelear ;
// console.log(b);

// b = 20 ; // re - asaign 
// console.log(b); 

// // let b = 30 ; // re - decelear 
// // console.log(b);


// // const c = 100; 
// // console.log(c);

// // c = 200 ;
// // console.log(c);



// default parameter

// function sayname(name , age = 10){
//     console.log(name , age);
    
// }
// sayname ('Aditya123', 77)


// rest & spread operator 

// function sum ( a,b,c,d){
//     console.log(a+b+c+d);
    
// }
// sum(1,2,3,4)

// rest operator parametter ko get karke array m convert kr deta hai data ko .

// function sum (...arr){
// console.log(arr);

// }
// sum(1,2,3,4)

// function akd(...ras){
//     console.log(ras);
    
// }
// akd(1,2,3,4,5)

// function akd(name,age,...arr){
// console.log(name,age,arr);

// }
// akd('Aditya',24,'Mohit' , 24)


// function dil(name,age,...Mohit){
//     console.log(name,age,Mohit);
    
// }
// dil("Diamond",24,'Aditya',25,4,5,5)



// spread
// function sum (arr){
//     console.log(...arr);
    
// }
// sum ( [1,2,3,4,5])


// function sum (arr){
//     console.log(...arr);
    
// }
// sum ([1,2,3,4,5])

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let arr3 = [ ...arr1,...arr2]
// console.log(arr3);

// let a = 'Aditya' ;
// let b = 'Kumar' ;
// let c = [...a , ...b];

// console.log(c);


// var sayname=() =>{
//     console.log('Aditya');
    
// }
// sayname()

// var sayname = (name,) =>{
// console.log(name);

// }
// sayname('Mohit')

// var sayhii  = (name) => {
// console.log('Hii',name);

// }
// sayhii('Aditya')

// var name1 = () => 'Aditya'
// console.log(name1());



// let sayhii = () => {
//     console.log('Aditya');
    
// }
// sayhii ()

// let sayhii = (name1) => {
//     console.log('hiii',name1);
    
// }
// sayhii('Aditya')

// let sayhii = () => 'Aditya' ;
// console.log(sayhii());


// var a = 10 ;
// console.log(a);
//  a = 20 ;
// console.log(a);
// var a = 30 ;
// console.log(a);

// let b = 10;
// console.log(b); 
//  b = 20;
// console.log(b); 

// const c = 10;
// console.log(c);

// for ( let i=1; i<=5; i++){
//     console.log(i);
    
// }
// for( let i=5; i>=1; i--){
//     console.log(i);
    
// }
// for (j=1; j<=5; j++){
//     console.log('start');
    
//     for (i=1; i<=5; i++){
//         console.log(i);
        
//     }
//     console.log('end');
    
// }

// function sayname () {
//     console.log('Aditya');
    
// }
// sayname()

// function adding (a,b) {
//     let add = a+b;
//     return add
    
// }
// let c = adding(2,4)
// console.log(c); 

// let arr = [1,1,2,2,3,3,4,4,5,5] ;
// let obj = {} ;

// for (let i=0; i<=arr.length-1; i++){
//    if ( obj = [arr[i]] == undefined)
//     obj = [arr[i]] = 1 
// else{
//     obj = [arr[i]] += 1
// }
    
// }
// console.log(obj);


// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]] === undefined) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]] += 1;
//   }
// }

// console.log(obj);


// let obj = {
//     id : 'Aditya',
//     salary : 55000
// }
// for ( key in obj) {
//     console.log(key,':',obj[key]);
    
// }

// function akd (...ras) {
//     console.log(ras);
    
// }
// akd (1,2,3,4) ;

// function add (...arr) {
//     console.log(arr);
    
// }
// add(12345)


// var sayhii = (name1) =>{
//     console.log(name1);
    
// }

// sayhii('Aditya','Kumar')

// var sayhii = () => "Aditya" ;
// console.log(sayhii());

// function sayname (name , age = 24){
//     console.log(name , age );
    
// }
// sayname('Aditya' , 25) ;


// function akd (a,b,...arr){
//     console.log(a,b,arr);
    
// }
// akd(1,2,3,4)


// function sum(akd){
//     console.log(...akd);
    
// }
// sum ([1,2,3,4,5])

// let arr1 = [1,2,3]
// let arr2 = [1,2,3]
// let arr3 = [...arr1,...arr2]
// console.log(arr3);


// Destructure...

// let arr = [1,2,3,4,5,6];
// let = [a,b,c,d,e,f] = arr
// console.log(a,b,c,d,e,f);

// let name1 = ['Aditya', 'Mohit' ,'Sonu' , 'Chotu']
// let = [a,b,c,d] = name1 
// console.log(a);


// let aditya = {
//     job: 'developer',
//     salary:50000
// }
// let = {job,salary} = aditya ;
// console.log(job);

// array destructure 

// var arr = ['Aditya','Kumar','Developer'] ;
//     var   [a,b,c] = arr ;
//     console.log(b);
    
  
 // Object destructure 

//  var student = {
//     name1 : 'Aditya' ,
//     job: 'developer',
//     salary:50000
//  }

//  var  {name1,job,salary} = student
//  console.log(name1,job,salary);
 
  
  
// let user = {
//     firstName: 'Vivek',
//     lastName: 'Agarwal',
//     age: 38,
//     posts: [
//       {title: 'Post 1', comments: 10},
//       {title: 'Post 2', comments: 11}
//     ]
//   }
  
// let {posts} = user ;
// let [a,b] = posts ;
// let {title ,comments} = a
// console.log(comments);


// student activity

// const user = {
//     id: 339,
//     name: 'John',
//     age: 42,
//     subjects: ['HTML', 'CSS', 'Javascript'],
//     education: {
//       degree: {
//         name: 'BCA'
//       }
//     }
//   }; 

//   let {education : { degree :{name}}} =user
//   console.log(name);
  
  
// var arr = [1,1,2,2,3,3,4,4,5,5,6,6] ;
// var obj = {};

// for ( var i=0; i<=arr.length-1; i++) {
//     if ( obj = [arr[i]] == undefined)
//         obj = [arr[i]] = 1;
//     else{
//         obj  [arr[i]] += 1
//     }
    
// }

// console.log(obj);
// var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// var obj = {};

// for (var i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] === undefined) {
//         obj[arr[i]] = 1; // Initialize count
//     } else {
//         obj[arr[i]] += 1; // Increment count
//     }
// }

// console.log(obj);

  
 
//  var arr = [1,1,2,2,3,3,4,4,5,5] ;
//  var obj = {} ;
//  for ( var i=0; i<arr.length; i++){
//     if ( obj [arr[i]] == undefined)
//         obj  [arr[i]] =1 
//     else{
//         obj  [arr[i]] +=1 
//     }
//  }
//   console.log(obj);



// var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// var obj = {};

// for (var i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] === undefined) {
//         obj[arr[i]] = 1; // Initialize count
//     } else {
//         obj[arr[i]] += 1; // Increment count
//     }
// }

// console.log(obj);
  
  
  var arr = [1,1,2,2,3,3,4,4,5,5,6,6] ;
  var obj = {} ;

  for ( var i=0; i<=arr.length-1; i++){
    if ( obj[arr[i]] == undefined)
        obj[arr[i]] = 1
    else{
        obj[arr[i]] +=1
    }
  }
  console.log(obj);
//   const fruits = ["apple", "banana", "orange"];
// const vegetables = ["carrot", "broccoli", "spinach"];
// const combination = [...fruits, ...vegetables]
// console.log(combination);


  
  
  
  
  
 
  
  
  
  
  
  
  

  
  
  
  
 

// // Object
// // object syntaz
// // var obj = {}


// var obj = {
//     name1 : 'Aditya',
//     age : 24

// }
// console.log(obj);

// // Acess single property
// console.log(obj.name1);
// console.log(obj['age']);

// // create & update 
// obj.age = 25 ;
// obj.city = 'Gaya' ;
// obj['salary'] = '25000'

// console.log(obj);

// // Delete
// delete obj['city']
// console.log(obj);
// delete obj.salary
// console.log(obj);

// // Arrays
// var user1 = ["Rahul", 25, "male", "Bangalore", "coding"];

// // Objects
// 	var user2 = {
// 		name : "Rahul",
// 		age  : 25,
// 		gender: "male",
// 		city  : "Bangalore",
// 		hobbies: "coding",
//         subject: {
//             math : 25,
//             english : 55,
//             hindi : 76,
//             subject1: {
//                 math : 25,
//                 english : 55,
//                 hindi : 76,
//                 coading: 88
//             }
//         }
      
// };
// console.log(user2.subject.subject1.coading);

// for (key in user2){
//     console.log(key,'-',user2[key]);
    
// }

// var arr = [ 1,1,1,1,1,2,2,2,2,2,3,3,3,3,3] ;

// var obj = {};

// for ( var i=0; i<arr.length-1; i++){
//     if ( obj [arr[i]] == undefined)
//         obj [arr[i]] = 1
//     else{
//         obj [arr[i]] += 1
//     }
// }

// console.log(obj);

// var classroom = [
//     { name : "Babu Rao", age: 40 },
//     { name : "Munna bhai", age : 30 },
//     { name : "popat lal", age : 35 }
// ];

// console.log(classroom[0].age);
// console.log(classroom[0].name);
// console.log(classroom[1].name);




var obj = {
    id:'Aditya',
    role:'developer',
    salary:55000
}
// console.log(obj);

// obj.city = 'pune'
// console.log(obj);
// obj.role = 'frontend'
// console.log(obj);
// delete obj.role
// console.log(obj);

// for ( key in obj){
//     console.log(key,'-',obj[key]);
    
// }

// var arr = [1,1,2,2,3,3,4,4,4,5,5];
// var obj = {};
// for ( var i=0; i<=arr.length-1; i++){
//     if ( obj [arr[i]] == undefined){
//         obj [arr[i]] = 1
//     }
//     else{
//         obj[arr[i]] += 1
//     }
// }
// console.log(obj);



var classroom = [
    { name : "Babu Rao", age: 40 },
    { name : "Munna bhai", age : 30 },
    { name : "popat lal", age : 35 }
];
console.log(classroom[0].name);


// for(var i = 0; i<classroom.length; i++)
// {
// console.log(classroom[i].name);
// }


// var obj = {
//     sum : function (a,b){
//         console.log(a+b)
//     }
    
    
// }
// obj.sum(2,3)

// function adding(a,b){
//     var add = a+b;
//     return add
// }
// var c = adding ( 8,3)
// console.log(c);

// function sayname(){
//     var name = 'Aditya'
//     console.log(name);
    
    
// }
// sayname()

// function sayname(name) {
//     console.log(name);
    
// }
// sayname('Mohit')
// sayname('Mohit')
// sayname('Mohit')

// function adding(a,b){
//     console.log(a+b);
    
// }
// adding(10,20)

// function adding(a,b){
//     var add = a+b
//     return add
// }
// var c = adding(30,3)
// console.log(c);



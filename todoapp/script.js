// document.write("<h1>I am External Javascript<h2>");

// function showDate(){
//    document.getElementById('date_p').innerHTML= Date();
// }



// let a = 20;
// let b = 50;
// let sum = a+b;
// let mul = a*b;
// let div = a/b;
// let mod = b/a;

// document.write(sum);

// alert("I am Programmer");

// document.write(div);


// 

// let fname = "Sunil";
// let lname = "Adhikari";

// document.write(fname + "" +lname);


// let myAge = 21;

// if(myAge >18){
//     document.write("You are eligible");

// }
// else if(myAge ==18){
//     document.write("You are just eligible");
// }

// else{
//     document.write("You are not eligible");
// }


// Looping Tutorial

// for(let i=1; i<=100; i++){
//     document.write("Sunil <br>");
// }


// let i = 0;
// while(i<=100){
//     document.write("<br>"+i);
//     i++;
// }


// let a = 0;
// do{
//     document.write(a);
//     a++
// }while(a<=100);



// Array

// const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// document.write(days[0]);
// console.log(days);

// days.forEach(
//     function(abc){
//         document.write(abc + "  ");
//     }
// )


// Function

// function printName(){
//     document.getElementById('info').innerHTML = "Sunil"

// }

// function calculateInterest(){
//     let principle = document.getElementById('p').value;
//     let rate = document.getElementById('r').value;
//     let time = document.getElementById('t').value;


//     let si = (principle*time*rate)/100;

//     document.getElementById('info').innerHTML = si
// }


// let person = {
//     fname: "Sunil",
//     lname: "Adhikari",
//     age: 32,
//     location: "Chitwan"
//     fullname: function(){
//         return this.fname + ""+ this.lname   }
// };

// document.write(person.fullname);



//Random Number 

let a = (Math.random() *5);
document.write(a);
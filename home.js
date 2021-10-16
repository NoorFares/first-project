console .log('Hello');
//comment;
//variables
// How to create variables:
var x;
let y;
var b='noor';
console.log(b);
var someNumber=5;
console.log(someNumber);
var age =prompt('what is your age?');
document.getElementById('someText').innerHTML=age;
//method number
let x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23
//toPrecision() returns a string, with a number written with a specified length:
let x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

//valueOf() returns a number as a number.
let x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23
var num=10;
//increment num by one
num++;
//decrecment num by one
num--;
//Divide ,mmultiply ,remaider%:
console.log(num%6);
console.log(num/6);
console.log(num*6);
//increment/decrement by any number 
num+=10;
console.log(num);
/*Functions
1-creatfunction 
2-called the function*/
function fun() {
    console.log ('This is  a function');
    
}
fun();


function greeting (yourname){
 var result='Hello'+'  '+yourname;
 console.log(result);
}

 var n= prompt('what is your name?');
 greeting(n);
//How do arguments work in fun?
//How do we add 2 num togther in fun?
function sumNumber(num1,num2){
    var result=num1+num2;
    console.log(result);
}
sumNumber(5,4);
//sumNumber('Noor',' Kalboneh');

/*While loops
var number=0;
while(number<100){
   number++;
   console.log(number);
} 
*/
//For loop  (let==>var)
for(let num=0;num<=100;num++){
    console.log(num);  
}
//Data types :
var age=19;//num
let Yourname='Noor';//string
let name={first:'Jane',last:'Doe'};//object
let truth=false;//bolean 
let grocreries=['apple','banana','oranges'];//array
let random;//undefiend ;
let nothing =null;//value null
//Strings in JS (common methods)
let fruit ='banana';
let moreFruits='banana\apple';
console.log (fruit.length);//length of string
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));//123ana
console.log(fruit.toUpperCase(fruit));//BANANA
console.log(fruit.toLowerCase(fruit));//banana
console.log(fruit.charAt(2));//n
console.log(fruit[2]);//n
console.log(fruit.split(','))//split by acomma
console.log(fruit.split(''))//split by  character

//Array in Java script:
let fruits=['banana','apple','orange' ,'pinceapples'];
//declerations of arrays:
 fruits=new Array('banana','apple','orange' ,'pinceapples');
//alert(fruit[1]);
console.log(fruits[2]);//access value at index

//changed the value:
fruits[0]='mango';
console.log(fruits);
  for(let index =0;index<fruits.length;index++){
      console.log(fruits[index]);
  }

  //array common methods :
  console.log('toString',fruits.toString());

  console.log(fruits.join('*'));
  //'mango'*'apple'*'orange' *'pinceapples'
  console.log(fruits.pop())//pinceapples (removes last item)
  console.log(fruits.push('strobaree'));//to append 
fruits[fruits.length]='new fruits';//same as push 
console.log(fruits.shift()); //remove first element from an array
console.log(fruits.unshift('Kiwi')); //add first element from an array
let vegetables=['aspargus','tomato','broccoli'];
let allGroceries=fruits.concat(vegetables);//combine array
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse()); 
console.log(allGroceries.sort()); 

let someNumbers=[5,10,2,25,3,255,1,2,5,334,321,2];
console.log(sumNumbers.sort(function(a,b){return a-b}));//sorted array in ascending order


let EmptyArray=newArray();
for(num=0;num<10;num++){
   EmptyArray.push(num);
}
console.log(EmptyArray)//[0,1,2,3,4,5,6,7,8,9];

//Object in JavaScript 
//dictionaries in python :


stu={first:'Noor',
  last:'Kalboneh',
  age:19,
  height:160,
  stuinfo:function(){
      return this.first+'\n'+this.last+'\n'+this.age+'\n'+this.height+'\n';
  }
};

//console.log(stu.first);
//console.log(stu.last);
//how to change the values in obj
stu.first='Fares';
console.log(stu.first);
stu.age++;
console.log(stu.age);
console.log(stu.stuinfo());
//
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

//Math.round(x) returns the nearest integer:

Math.round(4.9);    // returns 5
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.round(4.2);    // returns 4
Math.round(-4.2);    // returns -4
//Math.floor(x) returns the value of x rounded down to its nearest integer:

Math.floor(4.9);    // returns 4
Math.floor(4.7);    // returns 4
Math.floor(4.4);    // returns 4
Math.floor(4.2);    // returns 4
Math.floor(-4.2);    // returns -5
//JavaScript if else and else if
/*Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
The swit*/
//if
if (hour < 18) {
    greeting = "Good day";
  }
//if &else
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  //switch in js
  switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
  //The getDay() method returns the weekday as a number between 0 and 6.
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  

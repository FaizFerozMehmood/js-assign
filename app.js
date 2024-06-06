//Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.
/*var username =  prompt("Enter your first name ");
var lastNme = prompt("Enter your full name ");
var fullName = username +" "+ lastNme;
document.write("Hello " + " "+ fullName + " !")*/

/*Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser*/

// var arr =["Iphone","samsung",'itel',"qmobile"];
// var userInput = prompt("Enter phone your favourite mobile phone ");
// document.write("it is available with the length of  "+ arr.length)


/*. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .*/
// var q5 =("pakistani");
// var q6 = "n";
// var result = q5.indexOf(q6)
// document.write("The N letter index is : " + result)

// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
//   var word = ("Hello world");
//   var indexx = word.lastIndexOf("l");
//   document.write("Last index of L in the phrase is :"+indexx)

/*Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.*/
// var words = ("Hello world");
// var char = words.charAt(3);
// document.write("character at index 3 ;"+ char)

//Repeat Q1 using string concat() method.
// var username =  prompt("Enter your first name ");
// var lastNme = prompt("Enter your full name ");
// var fullName = username.concat(" ",lastNme);
// document.write("Hello"+ " "+ fullName+ "!")

// var stringss=("hyderabad")
// var string2=stringss.replace("hyder","islam");
// document.write(string2) 

// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”

// var sentence = ("Ali and Sami are best friends They play cricket and football together.");
// var converting = sentence.split("and").join("&");
// document.write(converting )

//  Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var num= "472";
// var converted = Number(num);
// document.write(converted)


/*Write a program that takes user input. Convert and
show the input in capital letters.*/

// var userInput = prompt("Enter any word or phrase of your choice will be converted them in capital letters");
// var result= userInput.toUpperCase();
// document.write(result)


/*
Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser*/

// var num = 36.36;
// var result = num.toString().replace(".","");
// document.write(result)


/*You have an array 
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an  array. After searching, prompt the user whether the given  item is found in the list or not. 
Note: Perform case insensitive search. Whether the user  enters cookie, Cookie, COOKIE or coOkIE, program  should inform about its availability.*/

// var products = ["apple","banana","orange","strawberry","kiwi"] 
// var userInput = prompt("enter your fav fruit").toLowerCase();
// var found = false;
// for (var i = 0; i <products.length; i++){
//     if (userInput===products[i]){
//         found=true;
//         break;
//     }
// }
// if(found){
//     alert("item is found")
// }
// else{
//     alert("not available")
// }

// Write a program to convert the following string to an  array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser.

// var con = "university of karachi";
// var result = con.split()
// document.write(result)

//Write a program to display the last character of a user  input.
// var Input =prompt("enter something here");
// var res = Input.charAt(Input.length-1);
// document.write("Last Index of the string is :"+ " "+ res)


// var userInput = prompt ("Enter something here ");
// var result = userInput.charAt(userInput.length-1)
// document.write(res)


// var userInput= prompt ('dear, please enter sometthing of your choice, we are trying to display the last index from the userinput character')
// var result = userInput.charAt(userInput.length-1);
// document.write(`<h1> HERE'S THE LAST INDEX GOT FROM USERINPUT IS :</h1>`+ result)


// var hours = document.getElementById('hours')
// hours.style.color="red"

// var mins = document.getElementById("mins")
// mins.style.color="red"
// var secs = document.getElementById('secs')
// secs.style.color="red"


// var update = setInterval(function(){
//     var date = new Date()
//     hours.innerText=date.getHours()+":"
//     mins.innerText= date.getMinutes()+":"
//     secs.innerText=date.getSeconds()
// },1000)


// var date = new Date()
// date.getHours()
// document.write(date);
//  let myDate = new Date()
 
// let mycreateddate= new Date(1,5,2003)
// document.write(mycreateddate.toDateString)
// var myDate = new Date()
// var myCreatedDaate = new Date(1,5,2003)
// document.write(myCreatedDaate.toLocaleString())


// var date = new Date();
// console.log( date.toString().slice(0,15))
// console.log(date.getDay())




var hours =document.getElementById("hours")
var mins =document.getElementById("mins")
var secs =document.getElementById("secs")

 var update = setInterval(function(){
    var date = new Date()
    hours.innerText =date.getHours()
    mins.innerText = date.getDay()
    secs.innerText =date.getSeconds()
},1000)
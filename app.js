//CHAPTER   21 TO 25

//TASK 1

// var a = prompt("Enter your first name") 
// var b = prompt ("Enter your last name")
// var c = a+ " " +b
// document.write(c)

//TASK 2

// var a = prompt(" Enter your favourite phone model")
// var b =  "My favourite phone model is "+a
// var c = a.length
// document.write(b+ "<br>Length of string: "+c)

//TASK 3

// var a = "PAKISTAN"
// var b = a.indexOf('N')
// document.write("String: " + a + "<br>Index of 'n': " + b );

//TASK 4
// var a = "HELLO WORLD"
// var b = a.lastIndexOf('L')
// document.write("String: " + a + "<br>Index of 'L': " + b );

//TASK 5
// var a = "Pakistani"
// var b = a.charAt(3)
// document.write("String: " + a + "<br>Index of 'L': " + b );

//TASK 6

// var a = prompt("Enter your first name") 
// var b = prompt ("Enter your last name")
// var c = a.concat(" " + b)
// document.write(c)

//TASK 7

// var a = "HYDERABAD"
// var b = a.replace("HYDER","ISLAM")
// document.write(b)

//TASK 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var b = message.replace(/and/g,'&');
// document.write(b)

//TASK 9

// var a = "472";
// var b = typeof(a)
// var c = parseInt(a)
// document.write("Value: "+a + "</br> Type: "  + b + "</br>Value " +c + " </br> type: " + typeof(c))

//TASK 10 
// var a = prompt("Enter any word")
// var b = a.toUpperCase()
// document.write ("User Input: "+ a + "Upper case: "+ b)

//TASK 11

// var a = prompt("Enter any word")
// var b = a.charAt(0)
// var c =  b.toUpperCase()
// var d = a.slice(1)
// document.write ("User Input: "+ a + "</br> title case: "+ c  + d)

//TASK 12
// var num = 35.65;
// var a = num.toString();
// var b =  a.replace(".",'');
// alert(b)

//TASK 13
// var name = prompt("Enter your username:");

// for(var i=0; i<= name.length ; i++){
//     if(name.charCodeAt(i) == 33 || name.charCodeAt(i) == 44 || name.charCodeAt(i) == 46 || name.charCodeAt(i) == 64){
//         alert("Please enter a valid name");
//         break;
//     }
//     else{
//         alert(name);
//         break;
//     }
// } 


// TASK 14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
// var c = b.toLowerCase();
// var d = a.indexOf(c);
// if(d === -1){
//     document.write("We are sorry " + c + " is <b>not availlable</b> in our bakery.");
// }
// else{
//     document.write(c + " is <b>available</b> at index " + d + " of our bakery.");
// }


//TASK 15

// function checkAlphaNum(str){
//     var alpha = 0;
//     var num = 0;
//     for(var i=0; i<=str.length; i++){
//         if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)){
//             alpha = 1;
//         }
//         else if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
//             num = 1;
//         }
//     }
//     if(alpha === 0 || num === 0){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }
// var pswd = prompt("Enter your password:");
// if(pswd.charCodeAt(0) >= 48 && pswd.charCodeAt(0) <= 57){
//     document.write("<h1>Entered Password: " + pswd + "<br>Password can not begin with a number<br>Please enter a valid password</h1>");
// }
// else if(pswd.length < 6){
//     document.write("<h1>Entered Password: " + pswd + "<br>Password must be atleast 6 characters long<br>Please enter a valid password</h1>");
// }
// else if(checkAlphaNum(pswd)){
//     document.write("<h1>Entered Password: " + pswd + "<br>Password must contain alphabets and numbers<br>Please enter a valid password</h1>");
// }
// else{
//     document.write("<h1>Entered Password: " + pswd + "<br>Your password is valid</h1>");    
// }



//TASK 16

// var university = "University of Karachi";
// var uniArr = university.split("");
// for(var i=0; i<uniArr.length; i++){
//     document.write(uniArr[i] + "<br>");
// }

//TASK 17
// var a = prompt("Enter a character");
// var b = a[a.length - 1];
// document.write("<h1>User input: " + a + "<br>Last character of input: " + b + "</h1>");


//TASK 18
// var str = "The quick brown fox jumps over the lazydog";
// str1 = str.toLowerCase();
// var count = (str1.match(/the/g)).length;
// document.write("<h1>Text: " + str + "<br>There are " + count + " occurance(s) of word 'the'</h1>");




//                                  CHAPTER 26-30

//TASK 1

// var a = +prompt("Enter any positive number")
// if (a>=0){
// var b = Math.round(a)
// var c = Math.floor(a)
// var d = Math.ceil(a)
// document.write("Value: "+a + "</br> Round off value: "+ b +"</br> Floor value: "+ c+"</br> Ceil value: "+ d)
// }
// else{
//     alert("Enter positive number")
// }

//TASK 2

// var a = +prompt("Enter any megative number")
// if (a<=0){
// var b = Math.round(a)
// var c = Math.floor(a)
// var d = Math.ceil(a)
// document.write("Value: "+a + "</br> Round off value: "+ b +"</br> Floor value: "+ c+"</br> Ceil value: "+ d)
// }
// else{
//     alert("Enter a negative number")
// }


//TASK 3
// var a = prompt("Enter a number to get it's absolute value value:");
// document.write("The absolute value of " + a + " is " + Math.abs(a) );


//TASK 4

// var a = Math.random()
// var b = Math.ceil(a * 6) 
// alert("Random dice value: "+b)

//TASK 5
// var a = Math.random()
// var b = Math.ceil(a*2)
// if (b==2){
//     document.write(b + " </br> random coin value: HEAD ")

// }
// else{
//     document.write(b + " </br> random coin value: TAIL ")
// }


//TASK 6

//  var a = Math.random()
// var b = Math.ceil(a * 100) 
// alert("Random number between 1 and 100: "+b)



//TASK 7

// var a = prompt("Enter your weight in kilograms");
// document.write("The weight of user is: " + a);


//TASK 8

// var a = Math.random()
// var b = Math.ceil(a * 10) 
// var c = +prompt("Enter any number to try your luck")
// if (b==c){
//         document.write( " </br> <h1> congratulations! </h1>" + "</br> Lucky NUMBER: "+ b + "</br> Your Number: "+c)
    
//     }
//     else{
//         document.write(" </br> <h2> better luck next time </h2>"+ "</br> Lucky NUMBER: "+ b + "</br> Your Number: "+c)
//     }
    






//                           CHAPTER 31-34


//TASK 1

// var a = new Date();
// document.write(a)

//TASK 2

// var a = new Date();
// var b = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","Deember"];
// var month = a.getMonth();
// document.write("<h1>Current month: " + b[month] + "</h1>");

//TASK 3

// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3)
// document.write("<h2> Today is "+ c + "</h2>")

//TASK 4

//  var a = new Date();
// if(a.getDay() === 0 || a.getDay() === 6)
//      document.write("<h1>It’s Fun day</h1>");
//      else{
//          document.write("Not a fun day! :(")
//      }

//TASK 5

// var a = new Date();
// if(a.getDate() <= 15)
//     document.write("<h2>First fifteen days of the month</h2>");
// else
//     document.write("<h2>Last days of the month</h2>");

//TASK 6
// var a = new Date();
// var b = a.getTime()
// var c = b/1000/60;
// document.write("Current Date:  "+a + "</br> Elapsed millisecond Since January 1, 1970:" + b +"</br> Elapsed minutes Since January 1, 1970:" + c )


//TASK 7
// var a = new Date();
// var b = a.getHours();
// if (b<13){
// document.write(b + "</br> Its AM" )
// }
// else{
//     document.write(b + "</br> its PM")
// }


//TASK 8
// var Laterdate = new Date("Dec 31, 2020");
// document.write("<h2>Later Date: " + Laterdate + "</h2>");

//TASK 9 
// var a = new Date("Apr 25, 2020")
// var b = new Date();
// var c = b-a;
// var d = c/(1000*60*60*24)
// var e = Math.floor(d)
// document.write( "<h1>"+e+ " Days have passed since 1st Ramadan,2020 </h1>")

//TASK 10

// var a = new Date("Jan 1, 2020")
// var b = new Date();
// var c = b-a;
// var d = c/(1000)
// var e = Math.floor(d)
// document.write( "<h1>"+e+ " Days have passed since 1st Ramadan,2020 </h1>")

//TASK 11

// var a = new Date();
// var b = new Date();
// var c = a.setHours(a.getHours()-1)
// document.write("<h2>Current date: </h2> "+b+"</br> <h2>1 hour ago, it was </h2>"+a)


//TASK 12

// var a = new Date();
// var b = new Date();
// var c = a.setFullYear(a.getFullYear()-100)
// document.write("<h2>Current date: </h2> "+b+"</br> <h2>1 hour ago, it was </h2>"+a)

//TASK 13

// var a = +prompt("Enter your age")
// var b = new Date();
// var c = b.getFullYear()
// var d = c-a;
// document.write("<h2> Your age is </h2>"+a+ "</br> <h2> Your birth Year is </h2>"+d)


//TASK 14
// var a = "Aneeb Afzal";
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"];
// var b = new Date();
// var c = months[b.getMonth()]
// var units = 411.55894723;
// var amountPerUnit = 16;
// var lateSurcharge = 350;
// var amountDue = parseFloat((units * amountPerUnit).toFixed(2));
// var amountAftDue = parseFloat((amountDue + lateSurcharge).toFixed(2));;
// document.write("<h1>Customer name: <b>" + a + "</b><br>Month: <b>" + c + "</b><br>Number of units: <b>" + units + "</b><br>Charges per unit: <b>" + amountPerUnit + "</b><br><br>Net amount payable(within due date): <b>" + amountDue + "</b><br>Late payment surcharge: <b>" + lateSurcharge + "</b><br>Gross amount payable after due date: <b>" + amountAftDue + "</b></h1>");





//                                    CHAPTER 34-38



//TASK 1

// function a(){
//     return ( new Date());
// }
// document.write (a())


//TASK 2

// function a (){
//       var b = prompt("Enter your first name")
//       var x = b.slice(0,1)
//       var y = b.slice(1)
//       var z = x.toUpperCase()
//       return z+y;
// }

// function d (){
//     var c = prompt("Enter your last name")
//     var x = c.slice(0,1)
//     var y = c.slice(1)
//     var z = x.toUpperCase()
//     return z+y;
// }
// document.write(a()+" "+d())


//TASK 3
// function a(c,d){
//      var b = c + d ;
//      return b;

// }
// var c = +prompt("Enter first number")
// var d = +prompt("Enter second number")
// document.write(a(c,d))

//TASK 4

// function a(num1, num2 ,op){
//     switch(op){
//                 case '+':
//                     return(num1 + num2);
//                 case '-':
//                     return(num1 - num2);
//                 case '*':
//                     return(num1 * num2);
//                 case '/':
//                     return(num1 / num2);
//                 case '%':
//                     return(num1 % num2);
//             }
// }

// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")
// var op = prompt("Enter operator")
// document.write(a(num1,num2,op))


//TASK 5

// function a(c){
//      var b = c * c ;
//      return b;

// }
// var c = +prompt("Enter any number to find its square")

// document.write(a(c))


//TASK 6
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = +prompt("Enter any number to find its factorial");
//   answer = factorial(n)
// alert("The factorial of " + n + " is " + answer);



//TASK 7

// function a(c,d){
//      for ( i=c; i<=d ; i++){
//      document.write(i + "</br>")
//      }
    // }
// var c = +prompt("Enter first number")
// var d = +prompt("Enter second number")
// a(c,d);


//TASK 8

// var ba = +prompt("Enter value of base")
// var per = +prompt("Enter value of perpendicular")
// function hypo(ba,per){

// function square(ba,per){
//     var a = ba * ba;
//     var b = per * per;
//     var c = a+b;
//     var d = Math.sqrt(c)
//     return d;
// }

// return square(ba,per)
    
// }
// document.write("The value of hypotenus is: " + hypo(ba,per))


//TASK 9
//  function area(a,b=4){
//      var c = a * b;
//      return c;
//  }
//  document.write("Area is: " + area(2) )


//TASK 10

// function palindrome(a) {
//     let b = a.split('');
//     let c = b.reverse();
//     let d = c.join('');
//     if (a == d) {
//         return alert('Yes it is palindrome word');
//     } else {
//         return alert("No it's not palindrome word");
//     }
// }
// let word = prompt("Enter any word to check it is palindrome or not?");
// palindrome(word);

//TASK 11

// function makeFirstUpper(str){
//         for(i = 0; i<str.length; i++){
//             if(i === 0 || str[i-1] === ' '){
//                str = (str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1));
//             }
//         }
//         return(str);
//     }
//     var string = prompt("enter sentence");
//     document.write("<h2>Input string: " + string + "<br>Output string: " + makeFirstUpper(string) + "</h2>");


//TASK 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


//TASK 13
// function count(a, b) {
//     var countVariable = 0
//     var lowerString = a.toLowerCase();
//     for (var i = 0; i < lowerString.length; i++) {
//         if (b == lowerString.charAt(i)) {
//             countVariable += 1;
//         }

//     }
//     return document.write('There are ' + countVariable + " occurrences of letter " + b + "<br>Text: " + a);
// }
// var string = prompt("Enter any sentence");
// var letter = prompt("Enter any letter to find in your sentence");
// count(string, letter);


//TASK 14
// function circumference(r){
//     var a = 2 * Math.PI *r;
//     return a;
// }
// var r = +prompt ("Enter radius value")
// document.write("Circumference of circle is "+circumference(r))

// function area(r){
//     var a =  Math.PI * r*r;
//     return a;
// }
// var r = +prompt ("Enter radius value")
// document.write("Area of circle is: "+area(r))


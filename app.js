//Q1:Declare an empty array using JS literal notation to store
//student names in future.
//let students = ["", "", "", "", "", "", "", ""];

//Q2:Declare an empty array using JS object notation to store
//student names in future.

//  let students = {
// }
// alert(students[0])

//Q3: Declare and initialize a strings array.
//const computer = ["dell", "hp", "lenovo", "Xeon"];

//Q4: Declare and initialize a numbers array.
// const numbers = [24, 6, 87, 45];
// console.log(numbers);

//Q5:5. Declare and initialize a boolean array.
// let food = [true, "yes", "han", "thek hai"];
// console.log(food);

//Q6: Declare and initialize a mixed array.
// const profile = ["waqas",33,true,"web develpor"];
// console.log(profile);

//Q7:Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
// let qualifications = [
//   "SSC",
//   "HSC",
//   "BCS ",
//   "BS ",
//   "BCOM ",
//   "MS ",
//   "M.Phil",
//   "PhD.",
// ];
// document.write("<h1>Qualifications</h1>");
// document.write(qualifications.join("<br>"));

/*Q8:Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:*/

// let students = ["hammad", "asad", "khurram"];
// let score = [320, 230, 480];
// document.write(
//   "Score of " + students[0] + " is " + score[0] + " Percentage: " + 320 / 500 * 100 +
//     "%" + "<br/>");
// document.write("Score of " + students[1] + " is " + score[1] +
// " Percentage: " +
// 230 / 500 * 100 +
// "%" +
// "<br/>");
// document.write("Score of " + students[2] + " is " + score[2]+
// " Percentage: " +
// 480 / 500 * 100 +
// "%" +
// "<br/>");

/*Q:9Initialize an array with color names. Display the array
elements in your browser.*/
// let arrayColor = ["Red", "Yellow", "Green", "Blue" + "<br/>"];
// document.write("Orignal Array is <br>" + arrayColor, "<br/>");

/*a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.*/
// ("<br/>");
// var arrayBeginAdd = prompt("add colour start of array");
// document.write(arrayColor.unshift(arrayBeginAdd) + "<br/>");
// document.write("add colour start of array " + arrayColor + "<br/>");

/*b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.*/

// var arrayEndAdd = prompt("add colour end of array");
// document.write(arrayColor.push(arrayEndAdd));
// document.write("add colour end of array " + arrayColor + "<br/>");

/*
Add two more color to the beginning of the array.
Display the updated array in your browser.
*/
// var twoAddArrayBegin = prompt("add two colour start of array");
// document.write(arrayColor.splice(0, 0, twoAddArrayBegin));
// document.write("add two colour start of array <br>" + arrayColor + "<br/>");

/*
d. Delete the first color in the array. Display the updated
array in your browser.
*/
// var firstDelArray = arrayColor.shift();
// document.write("delete first color in array <br> " + arrayColor + "<br/>");
/*
e.Delete the last color in the array. Display the updated
array in your browser.
*/
// var lastdelarray = arrayColor.pop();
// document.write("delete last color in array <br>" + arrayColor + "<br/>");

/*
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
*/
// let userDesiradaddindex = prompt("user Desire Add Color index number");
// let userDesiradaddColor = prompt("user Desire Add Color index number");
// var userindex$color = arrayColor.splice(userDesiradaddindex,
//   0,userDesiradaddColor);
// document.write(arrayColor);

/*
g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.
*/

// let userDesireDelete = prompt("user Desire Delete start and end ");
// document.write(arrayColor.splice(userDesireDelete));
// document.write("user Desire Delete start and end " + arrayColor + "<br/>");
// document.write("user Desire delete and ho many <br> " + arrayColor + "<br/>");
// let userDesirdeleteindex = +prompt("user Desire delete position");
// let userDesirdeletemany = +prompt("user Desire delete how many color");
// uDesireDeletIndexAndNum = arrayColor.splice(
//   userDesirdeleteindex,
//   userDesirdeletemany
// );

// document.write(arrayColor);

/*
Q:10 Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.
*/
// let scoreOfStudent = [320, 230, 480, 120, "<br>"];
// document.write("Score Of Student : " + scoreOfStudent);
// let sortStudentScore = scoreOfStudent.sort();
// document.write("Score Of  sort Student : " + sortStudentScore);

//Q:11 Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCitiesarray.

// let cities = ["karachi", "lahore", "islamabad", "quetta", "pishawar"];
// let selectedciteis = cities.slice(2, 4);
// document.write(selectedciteis);

/*Q:12 Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)*/

// let arrCat = ["this", "is", "my", "cat"];
// document.write("array : ", arrCat, "<br/>");

// let catjoin = arrCat.join(" ");
// document.write("String : ", catjoin);

/*Q:13 Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)

*/
// let devices = ["keyboard", "mouse", "printer", "monitor"];
// console.log(devices.shift());
// document.write(devices, "<br/>");
// console.log(devices.shift());
// document.write(devices, "<br/>");
// console.log(devices.shift());
// document.write(devices, "<br/>");
// console.log(devices.shift());
// document.write(devices, "<br/>");
// console.log(devices.shift());
// document.write(devices);
/*Q:14: Create a new array. Store values one by one in such a wa

that you can access the values in reverse order. (Last In-
First Out) 

*/
// let devices2 = ["keyboard", "mouse", "printer", "monitor"];
// console.log(devices2.pop());
// document.write(devices2, "<br/>");
// console.log(devices2.pop());
// document.write(devices2, "<br/>");
// console.log(devices2.pop());
// document.write(devices2, "<br/>");
// console.log(devices2.pop());
// document.write(devices2);
// console.log(devices2.pop());
// document.write(devices2, "all removed");

/*Q:15: Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method:*/

// document.write("<h1>Phone Manufacturers</h1>");
//let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//document.write(manufacturers[0], "<br>");
// document.write(manufacturers[1], "<br>");
// document.write(manufacturers[2], "<br>");
// document.write(manufacturers[3], "<br>");

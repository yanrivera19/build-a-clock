/*
Build a Clock

Step 1: Create a function called myTimer. 
Step 2: Define a variable called todayDate and store in it a Date constructor that creates 
a Date instance that represents the current date and time. To do this, leave the parameters of the
Date constructor empty.
Step 3: Select the div element from our HTML by it Id name. Using the innerHTML property, display in the div
the todayDate with the toLocaleTimeString method applied to it. This methods turns the todayDate into a string.
Step 4: Use the setInterval method to execute the myTimer function every 1000 milliseconds 
(1000 milliseconds = 1 second).
*/


const myTimer = function() {
  const todayDate = new Date();
  document.getElementById("clock").innerHTML = todayDate.toLocaleTimeString();
};

setInterval(myTimer, 1000);
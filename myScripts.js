/*var is use to declare a variable.

  window object represents open window in the browser.
  prompt will open a dialog window with the message passed along with a label to read the user input, and 
  assign the entered value to our variable.
  alert method is use to display a message in an pop up  window in the browser.

  console.log method is use to write message onto the console. To open console right click on the web page and
  click on inspect, and then click on console at the top.
*/

var name = window.prompt("enter your name:");

window.alert("Welcome " + name + " to js Test Page.");
console.log("Welcome " + name + " to js Test Page.");
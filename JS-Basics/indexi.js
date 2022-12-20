//Array
//let selectedColours = ['red','blue'];
//selectedColours[2] = 2;
//console.log(selectedColours.length);
const fruits =['apple', 'pear', 'mango'];
let fruitlength = fruits.length;
let text = "<ul>";
for (let i=0; i<fruitlength; i++)
{text += "<li>"+ fruits[i] + "</li>";
}
text += "</ul>"
document.getElementById("demo").innerHTML = text;


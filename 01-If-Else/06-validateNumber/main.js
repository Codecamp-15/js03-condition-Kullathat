let num1 = +prompt('Number');
let num2 = +prompt('Number');

console.log(num1,num2);

var Sum = num1 + num2;

if (isNaN(num1) || isNaN(num2)) {
    alert('Invalid number'); 
}
else {
   alert (Sum);
}

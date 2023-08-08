let yourNumber = prompt('Your number');

if (yourNumber === null || yourNumber.trim() === '' || isNaN(yourNumber)) {
    alert('Invalid Number')
}
else if (yourNumber  == 0 ) {
    alert ('zero');
}

else if (yourNumber  < 0) {
    alert ('Negative number');
}
else if (yourNumber  > 0) {
    alert ('positive Number');
}

guard-Clause



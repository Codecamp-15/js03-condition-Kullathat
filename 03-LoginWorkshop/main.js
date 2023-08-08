let User = prompt('username'); 

if (User == '' || User == 'Null') {
    console.log(guest);
}
else if (User == 'codecamp') {
    let Password = prompt('password')
        if  (Password == '123456') {
        User == 'codecamp';
        } else {
            alert('Wrong password')
        }
}  
else {
        console.log(guest);
    }

alert(`welcome ${User}`)


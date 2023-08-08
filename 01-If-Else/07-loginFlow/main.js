let userName = prompt('username');
let passWord = prompt('password');

console.log(userName,passWord)

if (userName == '') {
    alert('username is required')
}
else if (passWord == '') {
    alert('password is required')
}

else if ([userName == 'admin' && passWord == '123'] || [userName == 'john' && passWord == 'qwerty'])
    alert('Hello');
else ('invalid username or password');

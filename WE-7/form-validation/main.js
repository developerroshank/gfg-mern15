const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cnfPassword = document.getElementById('cnfPassword');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const cnfPasswordError = document.getElementById('cnfPasswordError');

const successMessage = document.getElementById('success');

const usernameRegEx = /^[a-zA-Z0-9_]{3,}$/;
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegEx = /^[6-9]\d{9}$/;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^_-])[A-Za-z\d@$!%*?#&^_-]{8,}$/;

// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let isValid = true;

//     if (username.value.trim() === "") {
//         username.style.border = '1px solid red';
//         usernameError.innerText = 'Username is required';
//         usernameError.style.color = 'red';
//         isValid = false;
//     } else if (!usernameRegEx.test(username.value.trim())) {
//         username.style.border = '1px solid red';
//         usernameError.innerText = 'Username must be at least 3 characters';
//         usernameError.style.color = 'red';
//         isValid = false;
//     } else {
//         username.style.border = '1px solid green';
//         usernameError.innerText = '';
//     }
    
//     if (email.value.trim() === "") {
//         email.style.border = '1px solid red';
//         emailError.innerText = 'Email is required';
//         emailError.style.color = 'red';
//         isValid = false;
//     } else if (!emailRegEx.test(email.value.trim())) {
//         email.style.border = '1px solid red';
//         emailError.innerText = 'Invalid Email';
//         emailError.style.color = 'red';
//         console.log(emailError)
//         isValid = false;
//     } else {
//         email.style.border = '1px solid green';
//         emailError.innerText = '';
//     }
    
//     if (phone.value.trim() === "") {
//         phone.style.border = '1px solid red';
//         phoneError.innerText = 'Phone is required';
//         phoneError.style.color = 'red';
//         isValid = false;
//     } else if (!phoneRegEx.test(phone.value.trim())) {
//         phone.style.border = '1px solid red';
//         phoneError.innerText = 'Invalid Number';
//         phoneError.style.color = 'red';
//         isValid = false;
//     } else {
//         phone.style.border = '1px solid green';
//         phoneError.innerText = '';
//     }
    
//     if (phone.value.trim() === "") {
//         phone.style.border = '1px solid red';
//         phoneError.innerText = 'Phone is required';
//         phoneError.style.color = 'red';
//         isValid = false;
//     } else if (!phoneRegEx.test(phone.value.trim())) {
//         phone.style.border = '1px solid red';
//         phoneError.innerText = 'Invalid Number';
//         phoneError.style.color = 'red';
//         isValid = false;
//     } else {
//         phone.style.border = '1px solid green';
//         phoneError.innerText = '';
//     }
    
//     if (password.value.trim() === "") {
//         password.style.border = '1px solid red';
//         passwordError.innerText = 'Password is required';
//         passwordError.style.color = 'red';
//         isValid = false;
//     } else if (!passwordRegEx.test(password.value.trim())) {
//         password.style.border = '1px solid red';
//         passwordError.innerText = 'Invalid Password';
//         passwordError.style.color = 'red';
//         isValid = false;
//     } else {
//         password.style.border = '1px solid green';
//         passwordError.innerText = '';
//     }
    
//     if (cnfPassword.value.trim() === "") {
//         cnfPassword.style.border = '1px solid red';
//         cnfPasswordError.innerText = 'Password is required';
//         cnfPasswordError.style.color = 'red';
//         isValid = false;
//     } else if (cnfPassword.value.trim() !== password.value.trim()) {
//         cnfPassword.style.border = '1px solid red';
//         cnfPasswordError.innerText = 'Confirm Password must be Same as Password';
//         cnfPasswordError.style.color = 'red';
//         isValid = false;
//     } else {
//         cnfPassword.style.border = '1px solid green';
//         cnfPasswordError.innerText = '';
//     }

//     if (isValid) {

//         setTimeout(() => {
//             successMessage.innerText = 'Form Submitted!';
//             successMessage.style.color = 'green';
//             signupForm.reset();
//             username.style.border = '1px solid #6D6875';
//         }, 1000);

//         setTimeout(() => {
//             successMessage.innerText = '';
//             location.reload();
//         }, 3000);
//     }
// });





// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (username.value.trim() === "") {
//         username.style.border = '1px solid red';
//         usernameError.innerText = 'Username is required';
//         usernameError.style.color = 'red';
//         isValid = false;
//     } else if (!usernameRegEx.test(username.value.trim())) {
//         username.style.border = '1px solid red';
//         usernameError.innerText = 'Username must be at least 3 characters';
//         usernameError.style.color = 'red';
//         isValid = false;
//     } else {
//         username.style.border = '1px solid green';
//         usernameError.innerText = '';
//     }
    
//     if (email.value.trim() === "") {
//         email.style.border = '1px solid red';
//         emailError.innerText = 'Email is required';
//         emailError.style.color = 'red';
//         isValid = false;
//     } else if (!emailRegEx.test(email.value.trim())) {
//         email.style.border = '1px solid red';
//         emailError.innerText = 'Invalid Email';
//         emailError.style.color = 'red';
//         console.log(emailError)
//         isValid = false;
//     } else {
//         email.style.border = '1px solid green';
//         emailError.innerText = '';
//     }

//     if (password.value.trim() === "") {
//         password.style.border = '1px solid red';
//         passwordError.innerText = 'Password is required';
//         passwordError.style.color = 'red';
//         isValid = false;
//     } else if (!passwordRegEx.test(password.value.trim())) {
//         password.style.border = '1px solid red';
//         passwordError.innerText = 'Invalid Password';
//         passwordError.style.color = 'red';
//         isValid = false;
//     } else {
//         password.style.border = '1px solid green';
//         passwordError.innerText = '';
//     }

//     if (isValid) {

//         setTimeout(() => {
//             successMessage.innerText = 'Form Submitted!';
//             successMessage.style.color = 'green';
//             loginForm.reset();
//             username.style.border = '1px solid #6D6875';
//         }, 1000);

//         setTimeout(() => {
//             successMessage.innerText = '';
//             location.reload();
//         }, 3000);
//     }
// console.log('errfghjk')
// });
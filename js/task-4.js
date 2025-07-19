const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    alert('All form fields must be filled in');
})

console.log(loginForm.elements);
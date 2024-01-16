const fullName = document.querySelector('.full-name')
const userName = document.querySelector('.username')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const signUpButton = document.querySelector('.sign-up')
const redirectButton = document.querySelector('.redirect-button')

signUpButton.addEventListener('click', async(e)=>{
    e.preventDefault();
    let data = {
        fullname: fullName.value,
        username: userName.value,
        email: email.value,
        password: password.value
    }

    await fetch('http://localhost:8080/user/signup', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })

    redirectButton.innerHTML = 'You are Signed up. Go to <a class="login" href="/public/login.html">Login Page</a>'
})
function store(){
    let emailData = document.getElementById('email').value
    let usernameData = document.getElementById('username').value
    let PhoneData = document.getElementById('phoneNumber').value

localStorage.setItem('email',emailData)
localStorage.setItem('userName',usernameData)
localStorage.setItem('phone',PhoneData)
}
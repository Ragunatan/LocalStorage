function store(){
    let emailData = document.getElementById('email').value
    let usernameData = document.getElementById('username').value
    let PhoneData = document.getElementById('phoneNumber').value

let user = document.querySelector('.userData');
let listItem = document.createElement('li')
listItem.textContent = emailData + '-' + usernameData + '-' + PhoneData

user.appendChild(listItem)


localStorage.setItem('email',emailData)
localStorage.setItem('userName',usernameData)
localStorage.setItem('phone',PhoneData)
}
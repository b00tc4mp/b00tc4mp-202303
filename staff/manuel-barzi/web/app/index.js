// data layer

var users = []

var user = {
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)

var user = {
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '12312123'
}

users.push(user)

var user = {
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '12312123'
}

users.push(user)

// presentation layer

var loginPage = {}
var registerPage = {}
var homePage = {}

loginPage.container = document.querySelector('.login')
registerPage.container = document.querySelector('.register')
homePage.container = document.querySelector('.home')

loginPage.container.querySelector('a').onclick = function(event) {
    event.preventDefault()

    loginPage.container.classList.add('off')
    registerPage.container.classList.remove('off')
}

registerPage.container.querySelector('a').onclick = function(event) {
    event.preventDefault()

    registerPage.container.classList.add('off')
    loginPage.container.classList.remove('off')
}

loginPage.container.querySelector('form').onsubmit = function(event) {
    event.preventDefault()

    var email = loginPage.container.querySelector('form').querySelector('input[name=email]').value

    var password = loginPage.container.querySelector('form').querySelector('input[name=password]').value

    // TODO check email and password against users array (db)
    
    if (email === 'pepito@grillo.com' && password === '123123123') {
        loginPage.container.classList.add('off')

        homePage.container.classList.remove('off')
    } else alert('wrong credentials')
}


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
    password: '123123123'
}

users.push(user)

var user = {
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123'
}

users.push(user)

// presentation layer

var loginPage = {}
var registerPage = {}
var homePage = {}

loginPage.container = document.querySelector('.login')
registerPage.container = document.querySelector('.register')
homePage.container = document.querySelector('.home')

loginPage.container.querySelector('a').onclick = function (event) {
    event.preventDefault()

    loginPage.container.classList.add('off')
    registerPage.container.classList.remove('off')
}

registerPage.container.querySelector('a').onclick = function (event) {
    event.preventDefault()

    registerPage.container.classList.add('off')
    loginPage.container.classList.remove('off')
}

loginPage.container.querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var email = loginPage.container.querySelector('form').querySelector('input[name=email]').value

    var password = loginPage.container.querySelector('form').querySelector('input[name=password]').value

    var foundUser

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (foundUser === undefined || foundUser.password !== password) {
        alert('wrong credentials')
    } else {
        loginPage.container.classList.add('off')
        homePage.container.classList.remove('off')
    }
}

registerPage.container.querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var name = registerPage.container.querySelector('form').querySelector('input[name=name]').value

    var email = registerPage.container.querySelector('form').querySelector('input[name=email]').value

    var password = registerPage.container.querySelector('form').querySelector('input[name=password]').value

    var foundUser

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (foundUser !== undefined) {
        alert('user already exists')
    } else {
        var user = {
            name: name,
            email: email,
            password: password
        }

        users.push(user)

        registerPage.container.classList.add('off')
        loginPage.container.classList.remove('off')
    }
}
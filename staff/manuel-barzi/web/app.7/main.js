var authenticatedEmail

var loginPage = document.querySelector('.login')
var registerPage = document.querySelector('.register')
var homePage = document.querySelector('.home')

loginPage.querySelector('a').onclick = function (event) {
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

registerPage.querySelector('a').onclick = function (event) {
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

loginPage.querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var email = loginPage.querySelector('form').querySelector('input[name=email]').value
    var password = loginPage.querySelector('form').querySelector('input[name=password]').value

    var result = authenticateUser(email, password)

    if (result === false) {
        alert('wrong credentials')
    } else {
        authenticatedEmail = email

        loginPage.classList.add('off')
        homePage.classList.remove('off')
    }
}

registerPage.querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var name = registerPage.querySelector('form').querySelector('input[name=name]').value
    var email = registerPage.querySelector('form').querySelector('input[name=email]').value
    var password = registerPage.querySelector('form').querySelector('input[name=password]').value

    var result = registerUser(name, email, password)

    if (result === false) {
        alert('user already exists')
    } else {
        registerPage.classList.add('off')
        loginPage.classList.remove('off')
    }
}

// TODO implement a profile panel in home for update the user password (asking the current password, the new password, and the new password confirmation)

homePage.querySelector('form').onsubmit = function(event) {
    event.preventDefault()

    var password = homePage.querySelector('form').querySelector('input[name=password]').value
    var newPassword = homePage.querySelector('form').querySelector('input[name=newPassword]').value
    var newPasswordConfirm = homePage.querySelector('form').querySelector('input[name=newPasswordConfirm]').value

    var result = updateUserPassword(authenticatedEmail, password, newPassword, newPasswordConfirm)

    if (result === false) {
        alert('password update failed')
    } else {
        alert('password updated')
    }
}
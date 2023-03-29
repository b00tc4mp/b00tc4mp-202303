var authenticatedEmail

var loginPage = document.querySelector('.login')
var loginForm = loginPage.querySelector('form')
var registerPage = document.querySelector('.register')
var registerForm = registerPage.querySelector('form')
var homePage = document.querySelector('.home')
var updatePasswordForm = homePage.querySelector('form')

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

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var email = loginForm.querySelector('input[name=email]').value
    var password = loginForm.querySelector('input[name=password]').value

    try {
        authenticateUser(email, password)

        authenticatedEmail = email

        loginForm.reset()

        loginPage.classList.add('off')
        homePage.classList.remove('off')
    } catch (error) {
        alert(error.message)
    }
}

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var name = registerForm.querySelector('input[name=name]').value
    var email = registerForm.querySelector('input[name=email]').value
    var password = registerForm.querySelector('input[name=password]').value

    try {
        registerUser(name, email, password)

        registerForm.reset()

        registerPage.classList.add('off')
        loginPage.classList.remove('off')
    } catch (error) {
        alert(error.message)
    }
}

updatePasswordForm.onsubmit = function (event) {
    event.preventDefault()

    var password = updatePasswordForm.querySelector('input[name=password]').value
    var newPassword = updatePasswordForm.querySelector('input[name=newPassword]').value
    var newPasswordConfirm = updatePasswordForm.querySelector('input[name=newPasswordConfirm]').value

    try {
        updateUserPassword(authenticatedEmail, password, newPassword, newPasswordConfirm)

        alert('password updated')

        updatePasswordForm.reset()
    } catch(error) {
        alert(error.message)
    }
}
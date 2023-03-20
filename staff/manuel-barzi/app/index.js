console.log('hello world')

var loginPage = {}
var registerPage = {}
var homePage = {}

loginPage.container = document.querySelector('.login')
registerPage.container = document.querySelector('.register')
homePage.container = document.querySelector('.home')

loginPage.container.style.display = 'none'
registerPage.container.style.display = 'none'
homePage.container.style.display = 'none'

loginPage.container.style.display = 'flex'

loginPage.container.querySelector('a').onclick = function(event) {
    event.preventDefault()

    loginPage.container.style.display = 'none'
    registerPage.container.style.display = 'flex'
}

registerPage.container.querySelector('a').onclick = function(event) {
    event.preventDefault()

    registerPage.container.style.display = 'none'
    loginPage.container.style.display = 'flex'
}

// TODO learn about .onsubmit
// TODO apply .onsubmit in loginPage form, and when email === 'peter@pan.com' and password === '123123123', hide loginPage container and show homePage container
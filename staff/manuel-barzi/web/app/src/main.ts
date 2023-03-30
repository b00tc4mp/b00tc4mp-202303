import { authenticateUser, registerUser, updateUserPassword } from './logic.js'

let authenticatedEmail: string | undefined

const loginPage: Element = document.querySelector('.login')!
const loginForm: HTMLFormElement = loginPage.querySelector('form')!
const registerPage: Element = document.querySelector('.register')!
const registerForm: HTMLFormElement = registerPage.querySelector('form')!
const homePage: Element = document.querySelector('.home')!
const updatePasswordForm: HTMLFormElement = homePage.querySelector('form')!

loginPage.querySelector('a')!.onclick = function (event) {
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

registerPage.querySelector('a')!.onclick = function (event) {
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

loginForm.onsubmit = function (event) {
    event.preventDefault()

    const email: string = loginForm.querySelector<HTMLInputElement>('input[name=email]')!.value
    const password: string = loginForm.querySelector<HTMLInputElement>('input[name=password]')!.value

    try {
        authenticateUser(email, password)

        authenticatedEmail = email

        loginForm.reset()

        loginPage.classList.add('off')
        homePage.classList.remove('off')
    } catch (error: any) {
        alert(error.message)
    }
}

registerForm.onsubmit = function (event) {
    event.preventDefault()

    const name: string = registerForm.querySelector<HTMLInputElement>('input[name=name]')!.value
    const email: string = registerForm.querySelector<HTMLInputElement>('input[name=email]')!.value
    const password: string = registerForm.querySelector<HTMLInputElement>('input[name=password]')!.value

    try {
        registerUser(name, email, password)

        registerForm.reset()

        registerPage.classList.add('off')
        loginPage.classList.remove('off')
    } catch (error: any) {
        alert(error.message)
    }
}

updatePasswordForm.onsubmit = function (event) {
    event.preventDefault()

    const password: string = updatePasswordForm.querySelector<HTMLInputElement>('input[name=password]')!.value
    const newPassword: string = updatePasswordForm.querySelector<HTMLInputElement>('input[name=newPassword]')!.value
    const newPasswordConfirm: string = updatePasswordForm.querySelector<HTMLInputElement>('input[name=newPasswordConfirm]')!.value

    try {
        updateUserPassword(authenticatedEmail!, password, newPassword, newPasswordConfirm)

        alert('password updated')

        updatePasswordForm.reset()
    } catch (error: any) {
        alert(error.message)
    }
}
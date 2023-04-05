import { authenticateUser, registerUser, updateUserPassword, retrievePosts, createPost } from './logic.js'

let authenticatedUserId: string

const loginPage: HTMLDivElement = document.querySelector<HTMLDivElement>('.login')!
const loginForm: HTMLFormElement = loginPage.querySelector<HTMLFormElement>('form')!
const registerPage: HTMLDivElement = document.querySelector<HTMLDivElement>('.register')!
const registerForm: HTMLFormElement = registerPage.querySelector<HTMLFormElement>('form')!
const homePage: HTMLDivElement = document.querySelector<HTMLDivElement>('.home')!
const profileLink: HTMLAnchorElement = homePage.querySelector<HTMLAnchorElement>('.nav-profile')!
const postList: HTMLDivElement = homePage.querySelector<HTMLDivElement>('.post-list')!
const profilePanel: HTMLDivElement = homePage.querySelector<HTMLDivElement>('.profile')!
const updatePasswordForm: HTMLFormElement = profilePanel.querySelector<HTMLFormElement>('form')!
const createPostButton: HTMLButtonElement = homePage.querySelector<HTMLButtonElement>('.create-post-button')!
const createPostPanel: HTMLDivElement = homePage.querySelector<HTMLDivElement>('.create-post')!
const createPostForm = createPostPanel.querySelector<HTMLFormElement>('form')!

loginPage.querySelector('a')!.onclick = function (event: Event) {
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

registerPage.querySelector('a')!.onclick = function (event: Event) {
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

loginForm.onsubmit = function (event: Event) {
    event.preventDefault()

    const email: string = loginForm.querySelector<HTMLInputElement>('input[name=email]')!.value
    const password: string = loginForm.querySelector<HTMLInputElement>('input[name=password]')!.value

    try {
        authenticatedUserId = authenticateUser(email, password)

        loginForm.reset()

        loginPage.classList.add('off')
        homePage.classList.remove('off')

        renderPosts()
    } catch (error: any) {
        alert(error.message)
    }
}

registerForm.onsubmit = function (event: Event) {
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

profileLink.onclick = function (event: Event) {
    event.preventDefault()

    profilePanel.classList.remove('off')
}

updatePasswordForm.onsubmit = function (event: Event) {
    event.preventDefault()

    const password: string = updatePasswordForm.querySelector<HTMLInputElement>('input[name=password]')!.value
    const newPassword: string = updatePasswordForm.querySelector<HTMLInputElement>('input[name=newPassword]')!.value
    const newPasswordConfirm: string = updatePasswordForm.querySelector<HTMLInputElement>('input[name=newPasswordConfirm]')!.value

    try {
        updateUserPassword(authenticatedUserId, password, newPassword, newPasswordConfirm)

        alert('password updated')

        updatePasswordForm.reset()
    } catch (error: any) {
        alert(error.message)
    }
}

function renderPosts() {
    try {
        const posts = retrievePosts()

        postList.innerHTML = ''

        const ul: HTMLUListElement = document.createElement('ul')

        posts.forEach(post => {
            const li: HTMLLIElement = document.createElement('li')

            const postId: HTMLParagraphElement = document.createElement('p')
            postId.innerText = post.id
            li.appendChild(postId)

            const userId: HTMLParagraphElement = document.createElement('p')
            userId.innerText = post.user
            li.appendChild(userId)

            const text: HTMLParagraphElement = document.createElement('p')
            text.innerText = post.text
            li.appendChild(text)

            const date: HTMLParagraphElement = document.createElement('p')
            date.innerText = post.date.toISOString() // 2023-04-05 22:53
            li.appendChild(date)

            ul.appendChild(li)
        })

        postList.appendChild(ul)
    } catch (error: any) {
        alert(error.message)
    }
}

createPostButton.onclick = () => {
    createPostPanel.classList.remove('off')
}

createPostForm.onsubmit = event => {
    event.preventDefault()

    const text = createPostForm.text.value

    try {
        createPost(authenticatedUserId, text)

        createPostPanel.classList.add('off')

        renderPosts()
    } catch(error: any) {
        alert(error.message)
    }
}
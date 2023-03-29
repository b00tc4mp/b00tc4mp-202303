function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!email) throw new Error('email is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (!password) throw new Error('password is empty')

    var foundUser = findUserByEmail(email)

    if (!foundUser)
        throw new Error('user not found')

    if (foundUser.password !== password) {
        throw new Error('wrong password')
    }
}

function registerUser(name, email, password) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (!name) throw new Error('name is empty')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!email) throw new Error('email is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (!password) throw new Error('password is empty')

    var foundUser = findUserByEmail(email)

    if (foundUser)
        throw new Error('user already exists')

    var user = {
        name: name,
        email: email,
        password: password
    }

    users.push(user)
}

function updateUserPassword(email, password, newPassword, newPasswordConfirm) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!email) throw new Error('email is empty')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (!password) throw new Error('password is empty')
    if (typeof newPassword !== 'string') throw new Error('newPassword is not a string')
    if (!newPassword) throw new Error('newPassword is empty')
    if (typeof newPasswordConfirm !== 'string') throw new Error('newPasswordConfirm is not a string')
    if (!newPasswordConfirm) throw new Error('newPasswordConfirm is empty')

    var foundUser = findUserByEmail(email)

    if (!foundUser)
        throw new Error('user not found')

    if (foundUser.password !== password)
        throw new Error('wrong password')

    if (newPassword !== newPasswordConfirm)
        throw new Error('password mismatch')

    foundUser.password = newPassword
}
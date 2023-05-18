function authenticateUser(email, password) {
    var foundUser

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (foundUser === undefined || foundUser.password !== password) {
        return false
    } else {
        return true
    }
}

function registerUser(name, email, password) {
    var foundUser

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (foundUser !== undefined) {
        return false
    } else {
        var user = {
            name: name,
            email: email,
            password: password
        }

        users.push(user)

        return true
    }
}

function updateUserPassword(email, password, newPassword, newPasswordConfirm) {
    var foundUser

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (!foundUser)
        return false

    if (foundUser.password !== password)
        return false

    if (newPassword !== newPasswordConfirm)
        return false

    foundUser.password = newPassword

    return true
}
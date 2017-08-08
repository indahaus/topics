function username(username) { 
    let re = /^([\w.!?]){3,20}$/; 
    return re.test(username);
}

function email(email) {
    // e-mails are validated by sending a confirmation link 
    if (email && email.length < 255)
        return true; 
    return false;
}

function password(password) {
    // TODO
    return true;
}

function checkMissingProps(user) {
    if (!user.username || 
        !user.password) 
            return false;
    else return true;
}

function existingKeyChecker(user) {
    for (let i = 0; i < Object.keys(user).length; i++) {
        let key = Object.keys(user)[i];    
        switch(key) {
            case "username": 
                if (!username(user.username))
                    return false; 
                break;
            case "email": 
                if (!email(user.email))
                    return false;
                break; 
            case "password":
                if (!password(user.password))
                    return false;
                break;
            default: 
                break;
        }
    }

    return true;
}

module.exports.doLogin = function(user) {
    if (!checkMissingProps(user))
        return false;
    if (!existingKeyChecker(user))
        return false;
    return true;
}
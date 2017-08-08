function title(title) {
    let re = /^([\w\s.,'"?!]){2,30}$/;
    return re.test(title);
}

function author(author) {
    let re = /^([\w\s.']){2,30}$/;
    return re.test(author);
}

function description(description) {
    if (description.length < 500)
        return true;
    else return false;
}

// Optionals like Genres, Years, Categories etc.
module.exports.doOptional = optional = (value) => {
    let re = /^([\w\s.']){2,30}$/;
    return re.test(value);
}

function checkMissingProps(topic) {
    if (!topic.title || 
        !topic.author || 
        !topic.description) 
            return false;
    else return true;
}

function existingKeyChecker(topic) {
    for (let i = 0; i < Object.keys(topic).length; i++) {
            let key = Object.keys(topic)[i];
            switch(key) {
                case "title": 
                    if (!title(topic.title))
                        return false;   
                    break;
                case "author": 
                    if (!author(topic.author)) 
                        return false;   
                    break;
                case "description":
                    if (!description(topic.description))
                        return false;   
                    break;
            default: 
                    if (!optional(topic[key]))
                        return false;   
                    break;
            }
        } 
    return true; 
}

module.exports.doPost = function(topic) {
    if (!checkMissingProps(topic))
        return false;
    if (!existingKeyChecker(topic))
        return false;

    return true;
}

module.exports.doPut = function(topic) {
    if (!existingKeyChecker(topic))
        return false;

    return true;
}

module.exports.doBoolean = function(value) {
    if (typeof value === "boolean")
        return true; 
    return false;
}

module.exports.doSearch = function(query) {
    return /^([\w\s'"]){2,30}$/.test(query); 
}

module.exports.doReply = function(reply) {
    if (!reply.content || reply.content > 500)
        return false; 
    return true;
}

module.exports.doNumbers = function(value) {
    try {
        priority = parseInt(req.query.priority);
        return true;
    } 
    catch(e) {
        return false;
    }
}
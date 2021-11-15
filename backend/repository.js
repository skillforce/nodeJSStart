const {readJSONFromFile, writeJSONToFile} = require('./fs-utils')


const getUser = () => {
    return readJSONFromFile('db')
}

exports.addUser = async (name) => {
    let users = await getUser()
    users.push({name: name, id: 100 - users.length})
    debugger
    return writeJSONToFile('db', users)
}

exports.deleteUser = async () => {
    let users = await getUser()
    users.pop()
    return writeJSONToFile('db', users)
}

exports.getUser = getUser;


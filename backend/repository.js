const fs = require('fs')
const{readFile, writeFile}=require('./fs-utils')


const getUser = () => {
   return readFile('db')
}

const addUser = async (name) => {
    let users = await getUser()
    users.push({name: name, id: 100 - users.length})
    return writeFile('db',users)
}

const deleteUser = async () => {
    let users = await getUser()
    users.pop()
    return writeFile('db',users)
}

exports.getUser = getUser;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
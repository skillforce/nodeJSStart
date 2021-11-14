



let students = [{name: 'Polina', id: 1},
    {name: 'Denis', id: 2},
    {name: 'Oleg', id: 3}]



const getUser=()=>{
    return students
}

const addUser=(name)=>{
    students.push({name: name, id: 100 - students.length})
}

const deleteUser=()=>{
    students.pop()
}

exports.getUser=getUser;
exports.addUser=addUser;
exports.deleteUser=deleteUser;
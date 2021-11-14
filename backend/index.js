const http = require('http')
const {getUser,addUser,deleteUser} =require('./repository')



const cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    }
    return false
}




const server = http.createServer((req, res) => {
    console.log('some request')

    //Set cors header
    if (cors(req, res)) return;


    switch (req.url) {
        case'/users':
            if (req.method === "POST") {
              addUser('Lesha')
            } else if (req.method === "DELETE") {
               deleteUser()
            } else {
                res.write(`${JSON.stringify(getUser())}`);
            }
            break;
        case '/tasks':
            res.write('tasks')
            break;
        default:
            res.write('page not found')
            break
    }

    res.end()
})


server.listen(7542)
const http = require('http')
const {usersController} = require('./usersController')


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
            usersController(req, res)
            break
        case '/tasks':
            res.write('tasks')
            break;
        default:
            res.write('page not found')
            break;
    }


})


server.listen(7542)
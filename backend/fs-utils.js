const fs = require("fs");


const readFile = (filepath)=>{
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, function (err, buf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        });
    });
}

const writeFile = (filepath,users)=>{
    return new Promise((res, rej) => {
        fs.writeFile("db", JSON.stringify(users), (err) => {
            if (err) {
                rej(err);
            } else {
                res()
            }
        })
    })
}


exports.readFile =readFile;
exports.writeFile =writeFile;
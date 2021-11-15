const {addUser, deleteUser, getUser} = require("../repository");
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let _users = await getUser()
    if (req.query.search) {
        _users = _users.filter(t => t.name.toLowerCase().indexOf(req.query.search.toLowerCase()) > -1);
    }
    res.send(_users);
});
router.get('/:id', async (req, res) => {
    let _users = await getUser()
    let id = req.params.id
    let user = _users.find(t => t.id == id);
    user ? res.send(user) : res.send(404)
})
router.post('/', async (req, res) => {
    let name = req.body.name
    let result = await addUser(name)
    res.send(JSON.stringify(200))
})
router.delete('/', async (req, res) => {
    let result = await deleteUser()
    res.send(JSON.stringify(200))
})


module.exports = router;
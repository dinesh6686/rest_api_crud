const express = require('express')
const router = express.Router()

const { v4: uuid } = require('uuid');

let users2 = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        id:1
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 22,
        id: 2
    },
    {
        firstName: "Johnny",
        lastName: "Doe",
        age: 20,
        id: 3
    }
]

let users = []

router.get('/', (req, res) => {
    res.send(users)
})
router.post('/', (req, res) => {   
    const user = req.body;
    // users.push(user)
    users.push({ ...user, id: uuid() });
    res.send(`User [${user.firstName}] added to the database.`);
})
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => { return user.id === id })
    res.send(user);
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => { return user.id !== id });
    res.send(`user with id ${id} has been deleted`);
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => { return user.id === id })
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    res.send(`user with id ${id} has been updated`);
})

//partial modify
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => { return user.id === id })
    const { firstName, lastName, age} = req.body
    if (firstName) user.firstName = req.body.firstName;
    if(lastName) user.lastName = req.body.lastName;
    if (age) user.age = req.body.age;
    res.send(`user with id ${id} has been updated`);
})

// (req, res) => {
//     res.send(req.params.id)
// };

module.exports = router

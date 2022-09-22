const express = require('express');
const UserController = express.Router();
const { get, save, getById, put, remove } = require('../services/user.service')
const usersModel = require('../models/users.model');

UserController.get('/', async (req, res) => {
    console.log(usersModel);
    const _userResponse = await get();
    res.status(200).send({
        res: _userResponse
    })
})

UserController.get('/:id', async (req, res) => {
    const _userById = await getById(req.params.id);
    res.status(200).send({
        res: _userById
    })
})

UserController.post('/', async (req, res) => {
    const _savedUser = await save(req.body);
    res.status(200).send({
        res: _savedUser
    })
})

UserController.put('/:id', async (req, res) => {
    const _putUserResponse = await put(req.body, req.params.id);
    res.status(200).send({
        res: _putUserResponse
    })
})

UserController.delete('/:id', async (req, res) => {
    const _deleteUserResponse = await remove(req.params.id);
    res.status(200).send({
        res: _deleteUserResponse
    })
})

module.exports = UserController;
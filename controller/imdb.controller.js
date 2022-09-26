const express = require('express');
const IMDBController = express.Router();
const nodeFetch = require('node-fetch');

IMDBController.get('/get-all-actors', async (req, res) => {
    const { nconst } = req.query;
    await nodeFetch(`${process.env.imdb_url}actors/get-all-news?nconst=${nconst}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host': process.env.X_RapidAPI_Host
        }
    }).then(res => res.json())
        .then((json) => {
            res.status(200).send({
                res: json
            })
        });
})

module.exports = IMDBController;
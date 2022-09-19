require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log("Server is running on : " + process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT);
})

app.get("/users", (req, res, next) => {
    res.status(200).send({
        id: 1,
        name: 'Gadhedo'
    })
})

app.post("/users", (req, res, next) => {
    res.status(200).send(req.body)
})

app.get("/users/:id/:empId", (req, res, next) => {
    const { id, empId } = req.params;
    const { name, desc, page, pageCount, pageLimit } = req.query;
    res.status(200).send({ id, empId, name, desc, page, pageCount, pageLimit })
})
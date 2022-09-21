require('dotenv').config();
const express = require('express');
const { RootRoutes } = require('./route.js');
const cors = require('cors');

const app = express();
app.use(
    cors({
        origin: '*',
        methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: '*'
    })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '5mb', extended: true }));
app.use(RootRoutes);

// process.on("unhandledRejection", async (error) => {
//     console.log("Server error : " + error);
// })

// process.on("exit", (error) => {
//     console.log("Server shutdown due to unhandled exception : " + error);
// });

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log("Server is running on : " + process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT);
})
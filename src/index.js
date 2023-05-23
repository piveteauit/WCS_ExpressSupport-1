const express = require('express');
const { userRouter } = require('./routes');

const app = express();


function getAPIVersion (request, response) {
    return response
        .status(200)
        .json({version: '1.0.0'})
}

app.get('/api/version', getAPIVersion)

app.use('/api/users', userRouter);

app.listen(8081, () => {
    console.log('App is listening on: 8081')
})
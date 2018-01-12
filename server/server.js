const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');
 
require('dotenv').config();
 
const app = express();
 
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET, 
    saveUninitialized: false, 
    resave: false
}));
 
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(error => {
    console.log('error', error)
});

axios.post('/login', (req, res) ={
    const { userId } = req.body 
    const auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`

    axios.get(auth0Url, {headers: {Authorization: "Bearer" + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN}})
})
 
const port = process.env.SERVER_PORT
app.listen(port, () => console.log('listening on port ' + port));
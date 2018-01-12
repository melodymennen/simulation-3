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

// axios.get(auth0Url, { 
//     headers: {
//         Authorization: 'Bearer' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN
//     }}).then(response => {
//         const userData = response.data
//         req.session.user = { 
//             name: userData.name, 
//             email: userData.email, 
//             auth0_id: userData.user_id, 
//             picture_url: userData.picture
//         }
//         res.json({user: req.session.user})
//         app.get('db').find_user([userData.user_id]).then(users => {
//             if(users.length){
//                 app.get('db').create_user([userData.user_id, userData.email, userData.picture_url, userData.name])
//             }
//         }).then(() => {

//         }).catch(error => {
//             console.log('error', error)
//         })
//     }).catch(error => {
//         res.status(500).json({message: 'somethings broken'})
//     })

 
const port = process.env.SERVER_PORT
app.listen(port, () => console.log('listening on port ' + port));
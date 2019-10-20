# Boilerplate Mongodb CRUD with JWT Auth
Basic Express MongoDB CRUD REST API with User Athentication with JWT for basic signup and login. This boilerplate comes with a starter endpoint and a starter model and a user model with signup and login endpoints.

## 1. Open your Terminal, clone this repo, and install dependencies:
```https://github.com/fromjdobson/boilerplate-mongodb-crud.git && cd boilerplate-mongodb-crud && npm i```

## 2. In the `.env` file on the main directory, add a port number, a secret, and your database credentials
```
MONGO_USER=myUserName
MONGO_PASS=myPassword
MONGO_HOST=myHost
MONGO_DB=myDatabase
SECRET=ABCabc123
PORT=3456
```
## 3. Start the server
Start with either command:
 ```nodemon server/server.js```
 or
 ```npm start```
## 4. Signup a new user
Create a raw JSON body with username and password key/value pairs:
```
{
  "username": "bob",
  "password": "123"
}
```
Send a POST request to the `/user/signup` endpoint:
```POST http://localhost:3456/user/signup```
## 5. Login the user
Create a raw JSON body with username and password key/value pairs:
```
{
  "username": "bob",
  "password": "123"
}
```
Send a POST request to the `/user/login` endpoint:
```POST http://localhost:3456/user/login```
Use the JWT token from the response in the header

## 6. Use the JWT token in the header
When the user has entered the correct username and password to login, the API will respond with a JWT token that can be added to the header of all requests.
Response:
```
sucess: true,
token: ABCMYtokenStringExample
```
Add token to Authorization Header:
```
Authorization: Bearer ABCMYtokenStringExample
```
## 7. Perform CRUD operations
### CREATE:

 ```POST http://localhost:3456/endpoint```
 
### READ ALL:

 ```GET http://localhost:3456/endpoint```
 
### READ ONE by Id:

 ```GET http://localhost:3456/endpoint/_Id_Goes_Here```
### UPDATE
 ```PUT http://localhost:3456/endpoint/_Id_Goes_Here```
### DELETE
 ```DELETE http://localhost:3456/endpoint/_Id_Goes_Here```

#### DATA FOR CREATE AND UPDATE SHOULD GO INTO A RAW JSON BODY:
```
{
  "title": "my Title here",
  "description": "anything"
}
```

## 8. Customize Models
To customize your own database models, just duplicate the existing file at `server/database/models/data.js`
The example data.js looks like this
```
const {Schema, model} = require("mongoose");

const userSchema = new Schema({  
    title: String,
    description: String,
    value: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = model("Data", userSchema);
```
## 9. Customize Endpoints
> To customize new endpoints, add this line to the file at `server/routes/mainRouter.js`
```
app.use('/YOUR_endpoint_URI_HERE', require('./YOUR_NEW_endpoint/Router'))
```
> Then copy the directory with all the files from ```server/routes/endpoint/``` into a new folder named: 
```
./YOUR_NEW_endpoint/
```
> Then update the location of your model in `server/routes/endpoint/modelPath.js` to the name of your model file:
```
module.exports = require('../../database/models/data.js');
```
> Optionally customize your CRUD routes in 
```
server/routes/YOUR_NEW_endpoint/Router.js
```
> Use your new CRUD like:
```
POST http://localhost:3456/YOUR_NEW_endpoint/
```
## Mind Map

![mind map](https://github.com/fromjdobson/boilerplate-mongodb-crud/blob/master/mindmap.png)

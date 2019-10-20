# Boilerplate Mongodb CRUD with JWT Auth
Basic Express MongoDB CRUD REST API with User Athentication with JWT for basic sign up and login

## 1. In the `.env` file on the main directory, add a port number, a secret, and your database credentials
```
MONGO_USER=myUserName
MONGO_PASS=myPassword
MONGO_HOST=myHost
MONGO_DB=myDatabase
SECRET=ABCabc123
PORT=3456
```
## 2. Start the server
Start with either command:
 ```nodemon server/server.js```
 or
 ```npm start```
## 3. Signup a new user
### create a raw JSON body with username and password key/value pairs:
```
{
  "username": "bob",
  "password": "123"
}
```
### Send a POST request to the `/user/signup` endpoint:
```POST http://localhost:3456/user/signup```
## 4. Login the user
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

## 5. Use the JWT token in the header
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

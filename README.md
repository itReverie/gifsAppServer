## Server web socket for the favorite gifs web app
***

The valid  messages for the web socket are:
- ADD_FAVORITE_GIF
- REMOVE_FAVORITE_GIF
- SET_FAVORITE_GIF

Install dependencies:
```
 npm install
```

In order to run the tests:
```
 npm run test
```

In order to run the server:
```
 npm start
```
By default the socket on the server runs in: 
```
 http://127.0.0.1:5000
```
You can modify the port in which it will run on the *config.js* file.

The application was deployed in Heroku on:

https://gifsappserver.herokuapp.com/
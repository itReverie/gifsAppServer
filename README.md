## Server web socket for the favorite gifs web app
***

The valid  messages for the web socket are:
- ADD_FAVORITE_GIF
- REMOVE_FAVORITE_GIF
- SET_FAVORITE_GIF

1.  Install dependencies:
```
 npm install
```

2.  Run the tests:
```
 npm run test
```

3.  Run the server:
```
 npm start
```
By default the socket on the server runs in: 
```
 http://127.0.0.1:5000
```
You can modify the port in which it will run on the *config.js* file.


### Backend
***

The application was deployed in Heroku (although there is nothing to see as it is a back end service):

<a href="https://gifsappserver.herokuapp.com/" target="_blank">https://gifsappserver.herokuapp.com/</a>


### Frontend
***

The front end for this web socket is in the following repo on GitHub:

<a href="https://github.com/itReverie/gifsAppClient" target="_blank">https://github.com/itReverie/gifsAppClient</a>

The deployment of the front end is in the following heroku instance:

<a href="https://gifsappclient.herokuapp.com/" target="_blank">https://gifsappclient.herokuapp.com/</a>

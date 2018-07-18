
const messageTypes = [
                        'ADD_FAVORITE_GIF',
                        'REMOVE_FAVORITE_GIF',
                        'SET_FAVORITE_GIF'
                     ].reduce((accum, msg) => {
                        accum[ msg ] = msg
                        return accum
                     }, {});

const port=process.env.PORT ||  5000;

module.exports =function(){
    switch (process.env.NODE_ENV) {
      case null:
      case undefined:
      case "local":
      case 'development':
        return { messageTypes, 
                 port:port};
    case 'production':
        return { messageTypes, 
                 port:port};
    default:
        return { messageTypes, 
                 port:port};
    }
  }();

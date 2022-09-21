const mongoDB = require('mongoose');
require('./configEnv');

exports.dataBase = () => {
     mongoDB.connect(
       DB_URL,
       {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then((data) => {
          console.log(`Mongodb connected with server: ${data.connection.host}`);
        })
}
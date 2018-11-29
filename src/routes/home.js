const mongoClient = require('mongodb').MongoClient;


const index = async (req, res, next) => {

  const result = {
    mongo: null,
    redis: null,
    nats: null,
  };

  try {
    await mongoClient.connect('mongodb://mongo:27017/test',  { useNewUrlParser: true } );
    result.mongo = true;
  } catch (error) {
    console.log(error);
  }

  try {
    const Redis = require('redis');
    const client = Redis.createClient();
    result.redis = true;
  } catch (error) {
    console.log(error);
  }


  try {
    var NATS = require('nats');
    var nats = NATS.connect();
    result.nats = true;
  } catch (error) {
    console.log(error);
  }

  return res.render('home', {
    result: result,
  });

};


module.exports = {
  index,
};

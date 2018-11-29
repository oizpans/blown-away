const mongoClient = require('mongodb').MongoClient;


const index = async (req, res, next) => {

  let mongo = null;
  try {
    await mongoClient.connect('mongodb://mongo:27017/test',  { useNewUrlParser: true } );
    mongo = true;
  } catch (error) {
    mongo = false;
  }

  return res.render('home', {
    mongo: mongo,
  });

};


module.exports = {
  index,
};

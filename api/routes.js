const ObjectID = require('mongodb').ObjectID;
const { DB_name } = require("../config");

module.exports = function(app, client) {
  const database = client.db(DB_name);

  app.get('/booksDB', (req,res) => {

    database.collection('books').find({}).toArray((err, data) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(data);
      }
    })
  });

  app.get('/t_shirts', (req,res) => {

    database.collection('t_shirts').find({}).toArray((err, data) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(data);
      }
    })
  });

  app.get('/trinkets', (req,res) => {

    database.collection('trinkets').find({}).toArray((err, data) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(data);
      }
    })
  });

  app.get('/:id', (req,res) => {
    const id = req.params.id;
    const details = {'_id' : ObjectID(id)};
    database.collection(collection).findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(item);
      }
    })
  });
};


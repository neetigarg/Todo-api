const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp')
  console.log('Connected to MongoDB server');

  db.collection('Users').update({
      _id : new ObjectID('5bb87ea0294d5219b099638e')
    },{
        $inc:{age:1},
        $set:{
        name :' Neeti Jio'
    }},{
        returnOriginal:false}).then((result)=>{
          console.log(result);
        });
});
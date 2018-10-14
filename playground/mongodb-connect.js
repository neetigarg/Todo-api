const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/Todos',(err,client)=>{
    if(err){
        return console.log('Unable to connect to database');
    }
    console.log('Connected to MongoDb server');
    const db =client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to connect to insert todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    db.collection('Users').insertOne({
        name:'Neeti Garg',
        age: 20,
        location: 'Ghaziabad'
    },(err,result)=>{
        if(err){
            return console.log('Unable to connect to insert todo',err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});
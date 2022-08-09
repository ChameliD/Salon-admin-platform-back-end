const mongoose = require('mongoose')
const connect=async function(){
    try{
        const conn=await mongoose.connect("mongodb+srv://test:d5JievUKmNd9dKMb@test.zsxfjqn.mongodb.net/?retryWrites=true&w=majority")
        console.log(`-mongodb connection stablished: ${conn.connection.host}`)

    }catch(e){
        console.log(`mongoDB error: ${e}`)
    }
}
module.exports=connect;
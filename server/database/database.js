const mongoose = require('mongoose');
const config = require('../../config');

const Connect =async()=>{
    try {
        //mdb cloud connect
        const con = await mongoose.connect(config.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })

        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports=Connect;
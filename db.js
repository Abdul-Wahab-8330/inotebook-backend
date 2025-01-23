const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://abdulwahabeeee5:myatlaspassword@cluster0.mujzo.mongodb.net/inotebook_db?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async ()=>{
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
}
// Cluster name: Cluster0
// Username: abdulwahabeeee5
// Password: myatlaspassword
// Daatabase name: inotebook_db
module.exports = connectToMongo;
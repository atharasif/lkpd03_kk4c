const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama : {
        type : String,
        required : [true, 'Namanya Diisi']
    },
    email : {
        type : String,
        required : true,
        unique : true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Isi Email Valid']
    }
})
module.exports= mongoose.model('User', UserSchema)
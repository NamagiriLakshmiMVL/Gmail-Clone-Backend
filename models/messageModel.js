const mongoose = require("mongoose")

const messageSchema = mongoose.Schema(
    {
        from:{type:String,required:true},
        to:{type:String,required:true},
        message:{trpe:String,required:true}

    }
)

const messageModel = mongoose.model("messagesSent",messageSchema)
module.exports = messageModel
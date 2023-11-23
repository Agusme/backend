import mongoose, {Schema} from "mongoose";
const userSchema = new Schema({
    name:{
        type: String,
        maxlength: 100,
        require: true,
    }, 
    email:{
        type: String,
        maxlength: 100,
        require: true,
        unique:true,

    },
    role:{
        type: String,
        maxlength:100,
        require:true
    },
    password:{
        type: String,
        require: true,
    }
});

const User = mongoose.model('user', userSchema);
export default User;


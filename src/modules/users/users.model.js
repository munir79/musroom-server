import mongoose from "mongoose";
// import bcrypt from "bcrypt"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"]

    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true, " password is required"]
    },
    role:{
        type:String,
        enum:['user','admin'],
    
    }

},
{
    timestamps:true
})


// hashing password 


// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // compare password
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

 export const User=mongoose.model("User",userSchema)
import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
  },
  fullName:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
    minLength:6,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  followers:[
    {
      type: mongoose.Schema.Types.ObjectId, //16 Characters 
      ref:"User",
      default: [] //Empty array means 0 followers at start
    }
  ], 
  following:[
    {
      type: mongoose.Schema.Types.ObjectId, //16 Characters 
      ref:"User",
      default: [] //Empty array means 0 following at start
    }
  ],
  profileImg:{
    type:String,
    default:"",
  },
  coverImg:{
    type:String,
    default:"",
  },
  bio:{
    type:String,
    default:"",
  }, 
  link:{
    type:String,
    default:"",
  }
},{timestamps:true})

const User = mongoose.model("User", userSchema);

export default User
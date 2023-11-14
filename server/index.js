const express = require('express');
const server = express();
const cors = require('cors');
const parser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/adid');
  console.log('connected')
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });

const User = mongoose.model('User', userSchema);

server.use(cors());
server.use(parser.json());

server.post('/register', async(req,res)=>{
  try{
  const{ name, email, password}= req.body;
  glob=req.body.email; 
    let user= await User.findOne({email});
    if(user){
      res.status(400).send("User Already Exists!");
    }
    else{
      user = new User({name,email,password});
      await user.save();
      res.status(200).send("Registration Successful.Please login using the passkey!");
  }
}
  catch(err)
  {
    res.status(500).send("Something Went Wrong!");
  }
})

server.post('/auth', async (req,res)=>{
  try{
  const{ lemail, lpass} = req.body;
  let help = await User.findOne({"email": lemail});
  if(help){
    if(help.password===lpass){
      res.status(200).send("Login Successful!!");
    }
    else{
      res.status(400).send("Incorrect Password!!");
    }
  }
  else{
    res.status(400).send("User not Registered. Please register using the SignUp button!")
  }}
  catch(err)
  {
    res.status(500).send("Something Went Wrong!");
  }
})

// server.get('/register/:mydata', async(req,res)=>{
//   try{
//   const data = req.params.mydata;
//   let user= await User.findOne({email:data});
//   res.json(user);
//   }
//   catch(error){
//     res.status(500).json({error: 'Something went Wrong!'});
//   }
// })

// server.get('/form/:mydata', async(req,res)=>{
//   try{
//   const data = req.params.mydata;
//   let user= await Form.findOne({email:data});
//   res.json(user);
//   }
//   catch(error){
//     res.status(500).json({error: 'Something went Wrong!'});
//   }
// })

server.listen(8080,()=>{
    console.log('server started')
})
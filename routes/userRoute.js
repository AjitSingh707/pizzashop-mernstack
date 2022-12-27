const express = require('express')
const router = express.Router()
const Usermod = require("../model/userModel")

router.route("/register").post(async(req,res)=>{
const {name,email,password} = req.body
const newUser = new Usermod({name,email,password})
try {
    newUser.save()
    res.status(201).json({success: true,message: "register succ"})
} catch (error) {
    res.status(400).json({message:error})
}
})

router.route('/login').post(async(req,res)=>{
const {email,password} = req.body
try {
    const user = await Usermod.find({email,password})
    if(user.length>0){
        const currUser = {
            name: user[0].name,
            email: user[0].email,
            isAdmin: user[0].isAdmin,
            id: user[0]._id
        }
        res.status(200).send(currUser)
    }else{
        res.status(400).json({msg: "login failed"})
    }
} catch (error) {
    res.status(404).json({msg: "Something went wrong"})
}
})

router.route('/allusers').get(async(req,res)=>{
try {
    const alluserdata = await Usermod.find({})
    res.send(alluserdata)
} catch (error) {
    res.status(400).send({error: error.stack,msg: "users not found"})
}
})

router.route('/deleteuser').post(async(req,res)=>{
    const {userid} = req.body
    try {
        await Usermod.deleteOne({_id: userid})
        res.send("User deleted")
    } catch (error) {
        res.status(400).send({error: error.stack,msg: "users not found"})
    }
})

router.route('/adminuser').post(async(req,res)=>{
    const {userid} = req.body
    try {
        await Usermod.updateOne({_id: userid},{$set: {isAdmin: true}})
        res.send("User is now admin")
    } catch (error) {
        res.status(400).send({error: error.stack,msg: "users not found"})
    }
})


module.exports = router
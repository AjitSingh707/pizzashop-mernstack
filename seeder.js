require('./config/config')
require('dotenv').config()
const mongoose = require('mongoose')
const Pizza = require('./model/pizzaModel')
const pizzadata = require('./data/pizza-data')


// seeding data in database-------------------------------
const importData = async()=>{
    try {
        await Pizza.deleteMany()
        const sampleData = pizzadata.map((pizzza)=>{
            return {...pizzza}
        })
        await Pizza.insertMany(sampleData)
        console.log("data imported".bgGreen.white)
    //process.exit() process exit with success
        process.exit()
    } catch (error) {
        console.log(`error: ${error.message}`.bgRed.white)
//process.exit(1) process exit with failure
        process.exit(1)
    }
}

const dataDestroy = async()=>{
    await Pizza.deleteMany()
}

if(process.argv[2]==='-d'){
dataDestroy()
}else{
    importData()
}








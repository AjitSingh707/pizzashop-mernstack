const express = require('express')
const router = express.Router()
const Pizzamodel = require('../model/pizzaModel')

// get all pizzas request-----------------
router.get('/getAllPizzas',async(req,res)=>{
try {
    const pizzas = await Pizzamodel.find()
    res.send(pizzas)
} catch (error) {
    res.send(error)
}
})

router.route('/addpizza').post(async(req,res)=>{
    const pizzadata = req.body
    try {
        const newpizza = new Pizzamodel({
            name: pizzadata.name,
            varients: ['small','medium','large'],
            image: pizzadata.image,
            description: pizzadata.description,
            category: pizzadata.category,
            prices: [pizzadata.prices]
        })
        const sav = await newpizza.save()
        res.status(201).send("New piza added")
    } catch (error) {
        res.json({message: error})
    }
})

router.route('/getpizzabyid').post(async(req,res)=>{
const {pizzaId} = req.body
try {
    const pizzaf = await Pizzamodel.findById(pizzaId)
    res.send(pizzaf)
} catch (error) {
    res.status(400).json({
        error: error.stack,msg: 'pizza not found'
    })
}
})

router.route('/updatepizzabyid').post(async(req,res)=>{
    const {updatepizza} = req.body
    try {
        const pizzaf = await Pizzamodel.updateOne({_id: updatepizza._id},
            {$set: updatepizza})
        res.status(200).send('pizza update success')
    } catch (error) {
        res.status(404).json({
            error: error.stack,msg: 'pizza not updated'
        })
    }

})

router.route('/deletepizza').post(async(req,res)=>{
    
    const {pizaid} = req.body
    
    try {
        await Pizzamodel.deleteOne({_id: pizaid})
        res.status(200).send('pizza delete success')
    } catch (error) {
        res.status(404).json({
            error: error.stack,msg: 'pizza not deleted'
        })
    }

})

module.exports = router
const express = require('express')
const router = express.Router()
const {v4: uuidv4} = require('uuid')
const Ordermodel = require('../model/orderModel')
const stripe = require("stripe")('sk_test_51MFHOOSDpS1r7sQUK69twvobaLNuGai29Ypi2JYfG7OAWp1DzIQORPis7rML4EcxyJDSDKxwtrR0Zonj6jiHSzNw00krdfI0lc')

router.route('/placeorder').post(async(req,res)=>{
const {token,SubTotal,currentUser,cartItems} = req.body
try {
    // const customer = await stripe.customers.create({
    //     email: token.email,
    //     source: token.id
    // })
    // const payment = await stripe.charges.create({
    //     amount: SubTotal*100,
    //     currency: 'inr',
    //     customer: customer.id,
    //     receipt_email: token.email
    // },{idempotencyKey: uuidv4()})
    // if(payment){
    //     res.send('payment success')
    // }else{
    //     res.send("payment fail")
    // }
    const newOrder = new Ordermodel({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser.id,
        orderitems: cartItems,
        shippingAddress: {
            addres: token.card.address_line1,
            country: token.card.address_country,
            zip: token.card.address_zip
        },
        orderAmount: SubTotal
    })
    newOrder.save()
} catch (error) {
    res.status(400).json({
        msg: "something went wrong",
        error: error.stack
    })
}
})

router.route('/getorders').post(async(req,res)=>{
    const {userid} = req.body
    try {
        const allOrders = await Ordermodel.find({userid}).sort({_id:'-1'})
        
        res.status(200).send(allOrders)
    } catch (error) {
        res.status(400).json({
            msg: "Something went Wromg ",
            error: error.stack
        })
    }
})

router.route('/getalluserorders').get(async(req,res)=>{
    try {
        const allOrders = await Ordermodel.find({})
        res.status(200).send(allOrders)
    } catch (error) {
        res.status(400).json({
            msg: "Something went Wromg ",
            error: error.stack
        })
    }
})

router.route('/deliverorder').post(async(req,res)=>{
    try {
        const {orderid} = req.body
        const delevOrders = await Ordermodel.findOne({_id: orderid})
        delevOrders.isDelivered = true
        await delevOrders.save()
        res.status(200).send("ordered delivered success")
    } catch (error) {
        res.status(400).json({
            msg: "Something went Wromg ",
            error: error.stack
        })
    }
})

module.exports = router



const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'order name required'],
    },
    email: {
        type: String,
        required: [true,'email required']
    },
    userid: {
        type: String,
        required: true
    },
    orderitems: [],
    shippingAddress: {
        type: Object,
        required: true
    },
    orderAmount: {
        type: String,
        required: true
    },
    isDelivered: {
        type: Boolean,default: false
        
    },

},{timestamps: true})

const Ordermodel = mongoose.model('Order',orderSchema)
module.exports = Ordermodel



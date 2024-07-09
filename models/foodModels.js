const mongoose = require('mongoose')


const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'food must have a title'],
        unique: true
    },
    rating: {
        type: Number,
        required: true, 
    },
    price: {
        type: Number,
        required: [true, 'food should provided a price']
    },
    category: {
        type: String,
        required: [true, 'food should have a category']
    },
    desctiption: {
        type: String,
        required: [true, 'foods detail should be described']
    },
    bestSeller:{
        type: Boolean
    },
    // image: {
    //     type: String,
    //     required: [true, 'image is must for every foodItem']
    // }
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food
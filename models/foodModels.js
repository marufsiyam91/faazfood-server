const mongoose = require('mongoose')


const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'food must have a title'],
        unique: true,
        trim: true,
        maxLength: [40, 'A tour name should must contain maximum 40 charecter'],
        minLength: [6, 'A tour name should have more than or equal 6 charecter']
    },
    rating: {
        type: Number,
        required: true, 
        min: [1, 'rating must be above 1.0'],
        max: [1, 'rating must be below 5.0']
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
const express = require('express')
const {getAllFoodItems, createFoodItem, getFoodItem, updateFoodItem, deleteFoodItem} = require('../controllers/foodControllers')

const router = express.Router()

router.route('/')
    .get(getAllFoodItems)
    .post(createFoodItem)

router.route('/:id')
    .get(getFoodItem)
    .patch(updateFoodItem)
    .delete(deleteFoodItem)

    module.exports = router
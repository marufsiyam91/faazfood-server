const fs = require('fs')


let allFoodItems = JSON.parse(fs.readFileSync('./dev_data/foods.json', 'utf-8'))

const getAllFoodItems = (req, res) => {
    res.json({
        status: 'success',
        result: allFoodItems.length,
        data: allFoodItems
    })
}

const createFoodItem = (req, res) => {
    const foodId = allFoodItems[allFoodItems.length - 1].id + 1

    const newFood = Object.assign({ id: foodId }, req.body)
    allFoodItems.push(newFood)

    fs.writeFile('./dev_data/foods.json', JSON.stringify(allFoodItems), (err) => {
        res.json({
            status: 'success',
            data: {
                foodItem: newFood
            }
        })
    })
}

const getFoodItem = (req, res) => {

    if (req.params.id * 1 > allFoodItems.length) {
        res.json({
            status: 'error',
            message: 'no such food exist'
        })
    }

    const desiredFood = allFoodItems.find(foodItem => foodItem.id === Number(req.params.id))

    res.json({
        status: 'success',
        data: desiredFood
    })
}

const updateFoodItem = (req, res) => {
    if (req.params.id > allFoodItems.length) {
        res.json({
            status: 'error',
            message: 'no such food exist'
        })
    }
    
    res.json({
        status: 'success',
        message: 'food updated successfully'
    })
}

const deleteFoodItem = (req, res) => {
    if (req.params.id * 1 > allFoodItems.length) {
        res.json({
            status: 'error',
            message: 'no such food exist'
        })
    }

    const restFoods = allFoodItems.filter(foodItem => foodItem.id !== Number(req.params.id))
    allFoodItems = restFoods

    res.json({
        status: 'success',
        message: 'foodItem deleted successfully'
    })
}

module.exports = {getAllFoodItems, createFoodItem, getFoodItem, updateFoodItem, deleteFoodItem}
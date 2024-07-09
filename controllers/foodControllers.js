const Food = require('../models/foodModels')



const getAllFoodItems = async (req, res) => {
    try {
//1) filtering
        const queryObj = { ...req.query }
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach(el => delete queryObj[el])
//2) advanced filtering
        let querySrt = JSON.stringify(queryObj);
        querySrt = querySrt.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        console.log(JSON.parse(querySrt))

        let query = Food.find(JSON.parse(querySrt))
//3) sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy)
        }
//4) pagination
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 12;
        const skip = (page - 1) * limit;

        query = query.skip(skip).limit(limit)

        if (req.query.page) {
            const numFoods = await Food.countDocuments();
            if(skip >= numFoods) throw new Error('This page does not exist')
        }
        
        let allFoodItems = await query

        console.log(queryObj)
    
        res.json({
            status: 'success',
            result: allFoodItems.length,
            data: allFoodItems
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

const createFoodItem = async (req, res) => {
    try {
        const newFood = await Food.create(req.body)
        
        res.status(200).json({
            status: 'success',
            data: {
                food: newFood
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }

}

const getFoodItem = async (req, res) => {
    try {
        const foodItem = await Food.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                data: foodItem
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

const updateFoodItem = async (req, res) => {    
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            message: 'food updated successfully'
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

const deleteFoodItem = async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id )

        res.status(204).json({
            status: 'success',
            message: 'foodItem deleted successfully'
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

module.exports = {getAllFoodItems, createFoodItem, getFoodItem, updateFoodItem, deleteFoodItem}
const Food = require('../models/foodModels');
const ApiFeatures = require('../utills/apiFeatures')

const getAllFoodItems = async (req, res) => {
    try {
        const features = new ApiFeatures(Food.find(), req.query)
            .filter()
            .sort()
            .paginate();
        
        const allFoodItems = await features.query;

        res.json({
            status: 'success',
            results: allFoodItems.length,
            data: allFoodItems,
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message,
        });
    }
};

const createFoodItem = async (req, res) => {
    try {
        const newFood = await Food.create(req.body);
        
        res.status(201).json({
            status: 'success',
            data: {
                food: newFood,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

const getFoodItem = async (req, res) => {
    try {
        const foodItem = await Food.findById(req.params.id);

        if (!foodItem) {
            return res.status(404).json({
                status: 'fail',
                message: 'No food item found with that ID',
            });
        }

        res.status(200).json({
            status: 'success',
            data: foodItem,
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message,
        });
    }
};

const updateFoodItem = async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!food) {
            return res.status(404).json({
                status: 'fail',
                message: 'No food item found with that ID',
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Food item updated successfully',
            data: food,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

const deleteFoodItem = async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);

        if (!food) {
            return res.status(404).json({
                status: 'fail',
                message: 'No food item found with that ID',
            });
        }

        res.status(204).json({
            status: 'success',
            message: 'Food item deleted successfully',
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message,
        });
    }
};

module.exports = {
    getAllFoodItems,
    createFoodItem,
    getFoodItem,
    updateFoodItem,
    deleteFoodItem,
};

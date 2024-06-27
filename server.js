const express = require('express')
const foodRouter = require('./routes/foodRouter')

const port = 8800
const app = express()
app.use(express.json())


app.use('/api/v1/foods', foodRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})















































































// const express = require("express");
// const fs = require("fs");

// const port = 8800;
// const app = express();
// app.use(express.json());

// let allFoods = JSON.parse(fs.readFileSync("./dev_data/foods.json", "utf-8"));

// const getAllFoods = (req, res) => {
//   res.json({
//     status: "success",
//     result: allFoods.length,
//     data: allFoods,
//   });
// };

// const getFood = (req, res) => {
//   const desiredFood = allFoods.find(
//     (food) => food.id === Number(req.params.id)
//   );

//   res.json({
//     status: "success",
//     data: desiredFood,
//   });
// };

// const createFood = (req, res) => {
//   const foodId = allFoods.length > 0 ? allFoods[allFoods.length - 1].id + 1 : 1;

//   const newFood = Object.assign({ id: foodId }, req.body);
//   allFoods.push(newFood);

//   fs.writeFile("./dev_data/foods.json", JSON.stringify(allFoods), (err) => {
//     res.json({
//       status: "success",
//       data: newFood,
//     });
//   });
// };

// const deleteFood = (req, res) => {
//   const restFood = allFoods.filter((food) => food.id !== Number(req.params.id));

//   allFoods = restFood;
//   res.json({
//     statue: "success",
//     message: "deleted food successfully",
//   });
// };

// app.route("/api/v1/foods")
//     .get(getAllFoods)
//     .post(createFood);

// app.route("/api/v1/foods/:id")
//     .get(getFood)
//     .delete(deleteFood);

// // app.get('/api/v1/foods', getAllFoods)
// // app.post('/api/v1/foods', createFood)
// // app.get('/api/v1/foods/:id', getFood)
// // app.delete('/api/v1/foods/:id', deleteFood)

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });


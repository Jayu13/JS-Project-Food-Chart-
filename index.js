const FoodChart = require("./food.json");

const Data = [];

FoodChart.forEach((item) => { 
  Data.push(item);
});

// console.log(Data); // List all food items



//const VegsData = FoodChart.filter((item) => item.category === 'Vegetable'); //list all the food items with category vegetables
//console.log(VegsData); 

// const FruitData = FoodChart.filter((item) => item.category === 'Fruit'); //list all the food items with category Fruit
// console.log(FruitData); 

// const ProtiensData = FoodChart.filter((item) => item.protiens); //list all the food items with category protien
// console.log(ProtiensData); 

// const NutsData = FoodChart.filter((item) => item.category === 'Nuts'); //list all the food items with category nuts
// console.log(NutsData); 

// const GrainData = FoodChart.filter((item) => item.category === 'Grain');//list all the food items with category grains
// console.log(GrainData); 

// const DairyData = FoodChart.filter((item) => item.category === 'Dairy');//list all the food items with category grains
// console.log(DairyData); 

// const CalorieData = FoodChart.filter((item) => item.calorie > 100);//list all the food items with calorie above 100
// console.log(CalorieData); 


// const CalBelowData = FoodChart.filter((item) => item.calorie < 100);//list all the food items with calorie below 100
// console.log(CalBelowData); 


// FoodChart.sort((a , b)=> b.protiens - a.protiens) list all the food items with highest protien content to lowest

// FoodChart.forEach(item => {
//   console.log(`${item.foodname}: ${item.protiens}g of protein`);
// });;

// FoodChart.sort((a , b)=> a.protiens - b.protiens)list all the food items with lowest cab content to highest

// FoodChart.forEach(item => {
//   console.log(`${item.foodname}: ${item.protiens}g of protein`);
// });;

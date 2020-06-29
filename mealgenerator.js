let menu = {
 _courses: {
   appetizers: [],
   mains: [],
   desserts: [],
   get appetizers() {
     return this._courses.appetizers;
   },

   get mains() {
      return this._courses.mains;
   },

   get desserts() {
     return this._courses.desserts;
   },

   set appetizers(appetizers) {
     return this._courses.appetizers = appetizers;
   },

   set mains(mains) {
     return this._courses.mains = mains;
   },

  set desserts(desserts) {
     return this._courses.desserts = desserts;
   }
 },

 get courses() {
 //THIS MAY NOT WORK
 let returnMeal = Object.assign({}, this._courses.appetizers, this._courses.mains, this._courses.desserts);
 return returnMeal;
 },

 addDishToCourse (courseName, dishName, dishPrice) {
  let dish = {
   name: dishName,
   price: dishPrice
  };
  return this._courses[courseName].push(dish);
 },

getRandomDishFromCourse (courseName) {
  let dishes = this._courses[courseName];
  let randomNumber = Math.floor(Math.random()*dishes.length);
  return dishes[randomNumber];
},

generateRandomMeal() {
 let appetizerName = this.getRandomDishFromCourse('appetizers');
 let mainName = this.getRandomDishFromCourse('mains');
 let dessertName = this.getRandomDishFromCourse('desserts');

 //appetizerName;
 //mainName;
 //dessertName;

 let totalPrice = appetizerName.price + mainName.price + dessertName.price;
 return `Total Price is: £${totalPrice}. The names of the meals are: ${appetizerName}, ${mainName}, ${dessertName}`;
}

};

menu.addDishToCourse('appetizer', 'Prawn Cocktail', 1);
menu.addDishToCourse('appetizer', 'Mutton Rolls', 0.5);
menu.addDishToCourse('appetizer', 'Cutlets', 0.3);
menu.addDishToCourse('main', 'Biryani', 4);
menu.addDishToCourse('main', 'Sandwich', 2);
menu.addDishToCourse('main', 'Pie', 1);
menu.addDishToCourse('desserts', 'Chocolate Cake', 4);
menu.addDishToCourse('desserts', 'Faluda', 3);
menu.addDishToCourse('desserts', 'CheeseCake', 2);

let meal = menu.generateRandomMeal();
console.log(meal);

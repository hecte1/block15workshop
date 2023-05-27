//create an object labeled customer and add the following key:value pairs//
const customer ={
     firstName: "jake",
     lastName: "smith",
     email: "jaekSmih!aol.com",
     phone: undefined,
     zipCode: "631",
     favoriteFlavors: "32",
     cupSize: "medium",
     favoriteStore: "Target",
     firstVisit: false,

};
console.log('before',customer)

//Modify the following properties in the customer object using bracket notation//

customer["email"] = "jak3Smith1992@email.com"
customer["phone"] = 3195551234
customer["zipCode"] ="63132";
customer["favoriteFlavors"] = "coffee, strawberry, matcha";

console.log('modify',customer)

// Deleting zip code and favorite store
delete customer["favoriteStore"];
delete customer["zipCode"];

console.log('deleted',customer)

//adding new properties to the list
customer.toppings = "chocolate sprinkles, wafer straws, gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.log('added',customer)

//print keys

const customerkeys = Object.keys(customer);
console.log('Customer Keys',customerkeys)


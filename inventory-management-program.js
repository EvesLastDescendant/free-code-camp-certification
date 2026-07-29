/*
n this lab, you will build an inventory management program that will allow you to add, update, find and remove products from the inventory. You will use an array of objects to represent your inventory, where each object will have name and quantity as the keys.

    Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

    User Stories:

    You should declare an empty array named inventory that will store product objects having a key name with the value of a lowercase string, and a key quantity with the value of an integer.
    You should create a function named findProductIndex that takes the product name as its argument and returns the index of the corresponding product object inside the inventory array. The function should always use the lowercase form of the product name to perform the search. If the product is not found, the function should return -1.
You should create a function named addProduct that takes a product object as its argument.
    If the product is already present in the inventory, the addProduct function should update its quantity value by adding the quantity passed in to the function to the current quantity and log to the console the product name followed by a space and quantity updated.
    If the product is not present in the inventory, the addProduct function should push the product to the inventory array and log the product name to the console, followed by a space and added to inventory.
    You should create a function named removeProduct that takes the product name and quantity as its arguments.
    The removeProduct function should subtract the passed quantity from the corresponding product object inside the inventory and log the string Remaining <product-name> pieces: <product-quantity> to the console, where <product-name> should be replaced by the product name, and <product-quantity> should be replaced by the product quantity.
    If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory. If the quantity in the inventory is not enough to perform the subtraction, the removeProduct function should log the string Not enough <product-name> available, remaining pieces: <product-quantity> to the console.
        If the product to remove is not present in the inventory, the removeProduct function should log <product-name> not found to the console.
            Note: To prevent conflicts, keep only the logging mentioned in the user stories when running tests.

            Tests:
            Waiting:1. You should declare an empty array named inventory.
            Waiting:2. You should have a function named findProductIndex.
            Waiting:3. findProductIndex("flour") should return the index of the object having name equal to "flour" inside the inventory array.
            Waiting:4. findProductIndex("FloUr") should return the index of the object having name equal to "flour" inside the inventory array.
            Waiting:5. findProductIndex("Flour") should return -1 when no object having name equal to "flour" is found inside the inventory array.
            Waiting:6. You should have a function named addProduct.
            Waiting:7. addProduct({name: "FLOUR", quantity: 5}) should add 5 to quantity value of the object having name equal to "flour" in the inventory array.
            Waiting:8. addProduct({name: "FLOUR", quantity: 5}) should log flour quantity updated when an object having name equal to "flour" is found in the inventory array.
            Waiting:9. addProduct({name: "FLOUR", quantity: 5}) should push {name: "flour", quantity: 5} to the inventory array when no object having name equal to "flour" is found in the inventory.
            Waiting:10. addProduct({name: "FLOUR", quantity: 5}) should log flour added to inventory when no object having name equal to "flour" is found in the inventory.
            Waiting:11. You should create a function named removeProduct.
            Waiting:12. removeProduct("FLOUR", 5) should log flour not found when no object having name equal to "flour" is found in the inventory array.
            Waiting:13. removeProduct("FLOUR", 5) should subtract 5 from the quantity value of the object having name equal to "flour" inside the inventory array.
            Waiting:14. removeProduct("FLOUR", 5) should log Remaining flour pieces: 15 to the console, when inventory is equal to [{name: "flour", quantity: 20}, {name: "rice", quantity: 5}].
            Waiting:15. If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory.
            Waiting:16. removeProduct("FLOUR", 10) should log Not enough flour available, remaining pieces: 5 when inventory is equal to [{name: "flour", quantity: 5}, {name: "rice", quantity: 5}].
*/

const inventory = [{name: 'book', quantity: 5}];

function findProductIndex(name) {
    return inventory.findIndex(product => product.name.toLowerCase() === name.toLowerCase());
}

function addProduct(product) {
    const index = findProductIndex(product.name);
    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(`${product.name.toLowerCase()} quantity updated`);
    } else {
        inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity });
        console.log(`${product.name.toLowerCase()} added to inventory`);
    }
}

function removeProduct(name, quantity) {
    const index = findProductIndex(name);
    if (index !== -1) {
        if (inventory[index].quantity >= quantity) {
            inventory[index].quantity -= quantity;
            console.log(`Remaining ${name.toLowerCase()} pieces: ${inventory[index].quantity}`);
            if (inventory[index].quantity === 0) {
                inventory.splice(index, 1);
            }
        } else {
            console.log(`Not enough ${name.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`);
        }
    } else {
        console.log(`${name.toLowerCase()} not found`);
    }
}

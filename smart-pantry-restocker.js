/*
In this lab, you will build a small pantry management program using basic JavaScript concepts like arrays, objects, loops, and conditionals.

    You will simulate receiving a shipment of pantry items, deciding what to do with each item, and organizing the results for storage.

                                                                                                                                   Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

    The rawData array contains pipe-separated strings with the format sku|name|qty|expires|zone, where zone is optional.

    User Stories:

    You should implement a parseShipment(rawData) function that takes an array of strings and returns an array of objects with { sku, name, qty, expires, zone } properties.

    Duplicate sku values in the shipment should be ignored.
    When the zone segment is not provided, it should default to "general".
    The qty value should be converted to a number.
    You should implement a planRestock(pantry, shipment) function that compares the current pantry with the incoming shipment and returns an array of actions in the form { type, item }, where type is one of "restock", "discard", or "donate", and item is the parsed shipment object.

    The pantry parameter is an array of objects with the same shape as a parsed shipment item ({ sku, name, qty, expires, zone }).

    If a shipment item has a qty of 0 or less, the action type should be "discard", regardless of whether the item exists in the pantry.
    Otherwise, if the shipment item's sku already exists in the pantry, the action type should be "restock".
Otherwise (the shipment item's sku does not exist in the pantry), the action type should be "donate".
You should implement a groupByZone(actions) function that groups the actions into storage zones based on each item's zone property. The function should return an object where each key is a zone name and the value is an array of actions belonging to that zone. For example, if actions contain items with zones "fridge" and "pantry", the result should be { fridge: [...], pantry: [...] }.

You should implement a clonePantry(pantry) function that returns a deep copy of the pantry so planning changes do not affect the original list. A deep copy means creating a new array with new objects, so modifying the copy does not change the original pantry.

    You should use all of the functions together to process a shipment and log the final grouped result object to the console.
*/

const pantry = [
    { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
    { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
    "A10|Tomatoes|5|2027-01-01",
    "B21|Bananas|10|2027-01-01",
    "C32|Eggs|3|2027-01-01|fridge",
    "C32|Eggs|3|2027-01-01",
    "D43|Pineapples|0|2027-01-01",
    "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
    const splitRawData = [];
    for (let i = 0; i < rawData.length; i++) {
        splitRawData.push(rawData[i].split('|'));
    }
    const parsedDataObject = [];
    for (const data of splitRawData) {
        const [sku, name, qty, expires, zone] = data;
        if (!parsedDataObject.some(item => item.sku === sku)) {
            parsedDataObject.push({
                sku: sku,
                name: name,
                qty: Number(qty),
                expires: expires,
                zone: zone || "general"
            });
        }
    }
    return parsedDataObject;
}

const parsedShipment = parseShipment(rawData);

function planRestock(pantry, shipment) {
    const actionObj = [];
    for (const item of shipment) {
        if (item.qty <= 0) {
            actionObj.push({ type: "discard", item });
        } else {
            const existingItem = pantry.find(pantryItem => pantryItem.sku === item.sku);
            if (existingItem) {
                actionObj.push({ type: "restock", item });
            } else {
                actionObj.push({ type: "donate", item });
            }
        }
    }
    return actionObj;
}

console.log(planRestock(pantry, parsedShipment));
const actionAble = planRestock(pantry, parsedShipment);

function groupByZone(actions) {
    const grouped = {};
    for (const action of actions) {
        const zone = action.item.zone;
        if (!grouped[zone]) {
            grouped[zone] = [];
        }
        grouped[zone].push(action);
    }
    return grouped;
}

console.log(groupByZone(actionAble));
const zoneGrouped = groupByZone(actionAble);

function clonePantry(pantry) {
    return pantry.map(item => ({ ...item }));
}

const clonedPantry = clonePantry(pantry);
console.log(clonedPantry);
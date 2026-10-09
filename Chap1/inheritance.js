"use strict";
class Item {
    id;
    description;
    price;
    getId() {
        return this.id;
    }
}
class Bicycle extends Item {
    wheelCount;
    getWheelCount() {
        return this.wheelCount;
    }
}
const bicycle = new Bicycle();
bicycle.id = "123";
bicycle.description = "Mountain Bike";
bicycle.price = 299.99;
bicycle.wheelCount = 2;
console.log("id", bicycle.getId());
console.log("wheel count: ", bicycle.getWheelCount());

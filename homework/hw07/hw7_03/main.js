// #vV9a6584I5
function Car(make,model,year,maxSpeed,engCapacity) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engCapacity = engCapacity;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function(speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    }
    this.changeYear = function(year) {
        if (year > 1815) this.year = year;
    }
    this.addDriver = function(driver) {
        if (driver) this.driver = driver;
    }
}

const vehicle = new Car('BMW', 'M5', 2020, 305, 4.4);

vehicle.drive();
vehicle.info();
vehicle.increaseMaxSpeed(25);
vehicle.changeYear(2023);
vehicle.addDriver({driver: 'John', age: 45});
console.log(vehicle);


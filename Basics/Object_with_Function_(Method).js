let car = {
    brand: "Toyota",
    speed: 120,
    drive: function () {
        return "Driving at " + this.speed + " km/h";
    }
};

console.log(car.drive());

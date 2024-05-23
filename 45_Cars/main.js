function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //add aditional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_car("Toyota", "Corolla", "color:Black", "Sunroof: True", "Year: 2024");
console.log(my_car);

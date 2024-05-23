function create_car(manufacturer, model, ...options){
//initialize a car object with manufacturer and model
let car = {
    manufacturer:manufacturer,
    model:model,
};

 //add aditional options to the car object
   options.forEach(option => {
    let[key , value] = option.split(":");
    car[key.trim()] = value.trim();
   });
   return car;
}

let my_car = create_car("Toyota","Corolla","color:Black","Sunroof: True", "Year: 2024");

console.log(my_car);
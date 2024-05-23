let car:string = 'subaru'
let age:number = 25;
let numbers: number[] = [1, 2 ,3 ,4]













//"string tests"
 
//Test 1: Equality (true)
console.log("Is car == 'subaru'?I predict true. ");
console.log(car == 'subaru'); //true (case  insensitive)

//Test 2: strict equality (false)
console.log("Is car == 'subaru'? I predict false.");
console.log(car == 'subaru');//false (case-sensitive)

//Test 3: Inequality (true)
console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota');//true

//Test 4; Inequality (False)
console.log("Is car != 'subaru'? I predict false");
console.log(car != 'subaru');//false ( case- sensitive)

//Test 5: "Lowercase function tsets"
console.log("Is car.toLowerCase()== 'subaru'? I predict true.")
console.log(car.toLowerCase()== 'subaru'); // true (converted to lowercase)

//Test 6:Lowercase conversion (false)
console.log("Is car === car.toLowerCase()?  I predict false.");
console.log(car === car.toLowerCase());//false (original value remians uppercase)

//"Numerical tests"

//Test Equality(true)
console.log("Is age == 25? I predict True.");
console.log(age == 25);//true

//Test 8: Inequality (false)
console.log("Is age != 30? I predict True");
console.log(age != 30);//True

//Test 9: Greater than(False)
console.log("Is age > 30? I predict false");
console.log(age> 30);//false

//Test10: less than or equal(true)
console.log("Is age <= 25? I predict true.");
console.log(age <= 25);//true

//"logical operators"

//Test 11: and(true)
console.log("Is age > 20 &&  age < 30? I predict true");
console.log(age > 20 &&  age < 30);//true (both condition met)

//Test 12: Or (false)
console.log("Is age > 30 || age < 18? I predict false");
console.log(age > 30 || age < 18); //false (neither condition met)

//"Array Tests"

//Test 13: In array (true)
console.log("Is 3 numbers? I predict True");
console.log(3 in numbers);//true ( checks for index existence)

//Test 14: Not in array(false)
console.log("Is 5 not in number?I predict True");
console.log(5 in numbers);//true (negation of "in" operators)
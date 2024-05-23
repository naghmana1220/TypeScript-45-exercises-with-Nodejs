var size = ['medium', 'large'];
var defaultMessage = "I Love Typescript";
var mediumShirt = ("size OF shirt is: ".concat(size[0], ", ").concat(defaultMessage));
var largeShirt = ("size OF shirt is: ".concat(size[1], ", ").concat(defaultMessage));
var smallShirt = ("size of shirt: small and i love painting");
var extralarge = ("size of shirt is: extralarge and i love hiking");
function make_tshirt() {
    var simpleFunction = (mediumShirt);
    console.log(simpleFunction);
    return simpleFunction;
}
var response = make_tshirt();
console.log(response);

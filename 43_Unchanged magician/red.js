var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ['Herry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'the Great' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
;
var copymagicianArray = copyArray(magician);
make_great(copymagicianArray);
console.log('\n\nThis is my original array:');
show_magicians(magician);
console.log('\n\nThis is my modified copy of the array:');
show_magicians(copymagicianArray);

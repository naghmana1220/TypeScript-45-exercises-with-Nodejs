var magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the Great' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);

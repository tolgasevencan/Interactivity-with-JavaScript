/* var name = prompt("What's your name?");

if (name.length != 0) {
    document.write("Hello " + name);
} else {
    document.write("Dogru duzgun isim gir bakiyim!");
}
*/

var grades = [];
var sum = 0;

if (grades.length > 0) {
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    document.write(sum / grades.length);
} else {
    document.write("Hellooo!");
}
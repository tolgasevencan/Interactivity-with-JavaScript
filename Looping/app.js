/*
var arr = [0, 1, 2];

//arr[1] = arr[1] + arr[1];
arr[1] += arr[1];
console.log(arr[1]);


x = 3

if (x < 2) {
    console.log('Nope!');
} else {
    console.log('Yeap!');
}

*/

var grades = [2, 5, , , 9, 8, , 8];
var sum = 0;
var count = 0;

if (grades.length > 0) {
    for (let index = 0; index < grades.length; index++) {
        if (grades[index] != undefined) {
            sum += grades[index];
            count = count + 1;
        }
    }
    document.write(sum / count);
} else {
    document.write("Empty array");
}
console.log('page09 splice');

const arr = ['apple', 'lemon', 'carrot'];

arr.splice(1, 1, 'cherry');

//console.log(arr); //////['apple', 'cherry', 'carrot']

arr.splice(1, 1);
//console.log(arr); //////['apple', 'carrot']

const arrNames = ['Petro', 'Vladimir', 'Viсtor', 'Leonid'];

const arrSmall = arrNames.splice(2, 1, 'Elon');
console.log(arrNames); //////['Petro', 'Vladimir', 'Elon', 'Leonid'];
console.log(arrSmall); //////['Viсtor'];
const arrNames03 = ['Petro', 'Vladimir', 'Elon', 'Leonid'];
const arrSmall02 = arrNames03.splice(2, 0, 'Mark');
console.log(arrNames03); //////['Petro', 'Vladimir', 'Mark', 'Elon', 'Leonid'];
console.log(arrSmall02);/////[];





const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); ////// ["red", "green", "purple", "blue"];



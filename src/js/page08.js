console.log('page08 Arguments');

function boo(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    
}

// boo(1);
// boo(1, 2);

function sum(){
    let a = null;
    a = arguments[0] + arguments[1];
    return a;
};

// console.log(sum(3, 2));


// //оператор нулевого слияния
// console.log(1 ?? 20);                  //1
// console.log(0 ?? 20);                  //0
// console.log(false ?? 20);              //false
// console.log('' ?? 20);                 //''
// console.log(' ' ?? 20);                //' '
// console.log(undefined ?? 20);          //20
// console.log(null ?? 20);               //20






const isObj = {
    keyOne: undefined,
    name01: undefined,
    girl: 'Natasha',
}
const{keyOne: keyTwo='Steve', name01='Bill', girl} = isObj;
console.log(keyTwo, name01, girl); ////Steve, Bill, Natasha










console.log('page 10, Arguments, Rest');

const num = 2;
const fru = 3;
// console.log(2, 3);

////// короткие свойства
const obj = {
    num,
    fru,
};
// console.log('obj.num', obj.num,  'obj.fru', obj.fru);




////// arguments
function foo(){
    return arguments[0] + arguments[1];
}
// console.log(foo(2, 3)); ////// 5









//////Rest

function too(...args){
//  console.log(args);
 return args[0] + args[1];
}

too(3, 4);      ///// [3, 4]
too(5, 6, 7);   ///// [5, 6, 7]

//console.log(too(10, 2)); ////// 12








////// Rest
function boo(...arb){
 const a =  arb[0] + arb[1];
 return a;
}

console.log(boo(2, 5));

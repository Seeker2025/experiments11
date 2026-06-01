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

//console.log(boo(2, 5)); ////// 7 

//////Распыления объекта
const isObg = {
    num01: 1,
    num02: 2,
};

//console.log(isObg.num02); ////// 2

const isObg03 = {
    numgg: 5,
    ...isObg,
};

//console.log(isObg03); /////{"numgg": 5,"num01": 1,"num02": 2}

function summ02({num01, num02}){
    console.log(num01, num02); /////// 1,  2
};
//summ02({...isObg});

////// Rest
function isSum(...rest01){
   return rest01[0] + rest01[1];
};
//console.log(isSum(2, 3)); ////// 5



const isObg04 = {
    name: 'Lena',
    name02: 'Gena',
    name03: 'Pete',
};

console.log(isObg04);

function toName({name, name02, name03}){
console.log(name,name02,name03);//{name:'Lena',name02:'Gena',name03: 'Pete'}
}

toName({...isObg04});//////Lena Gena Pete

//console.log({...isObg04});//{name: 'Lena', name02: 'Gena', name03: 'Pete'}





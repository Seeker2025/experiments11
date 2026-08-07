import axios from 'axios'

console.log('page 10, Arguments, Rest, Promise, async/await');

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

function multiply(...args){
    console.log(args);
 };
//multiply(1, 2, 3); ////// [1, 2, 3]






console.log(null || (2 && 3) || 4); ////// 3






////// Promise

// const promise = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         const val = Math.random();
//         if(val > .5) res("Yeeees");
//         else rej("Noooo");

//     }, 2000)
// });

// console.log(promise);

// promise.then((resp)=>{console.log(resp)})
// .catch((ff)=>{console.log(ff)})
// .finally(()=>{console.log('whoa!');
// });





//  const fetchUsers = async () => {
//  	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//  	console.log(response.data);
//  };

// const booo = fetchUsers();
// console.log(booo);






//  const fetchUsers = async () => {
//  	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//  	return response.data;
//  };

//  fetchUsers()
//  	.then(users => console.log(users));

const foo02 = async () => {
    try {
        const promiseAwait = await new Promise((res, rej) => {
            setTimeout(() => {
                const val = Math.random();

                if (val > 0.5) {
                    res("Yeeees");
                } else {
                    rej("Noooo");
                }
            }, 2000);
        });

        // console.log(promiseAwait);

    } catch (error) {
        console.log(error);
    }
};

foo02();






////// Spread Operator
const tooObg = {
    a: 1,
    b: 2,
};

function tuSum({a, b}){
 return a + b;
};

//console.log(tuSum({a: 5, b: 2})); ////// 7
//console.log(tuSum({...tooObg}));  ////// 3

////// Rest
function tuSum02(...rest){
 return rest[0] + rest[1];
};
/////// 5 и 10 будут собраны в массив
console.log( tuSum02(5, 10));




//// Складываем два массива и получаем строку
const srr0222 = ['1', 2 ,false];
const srr0223 = [4, 5 ,true];
console.log(srr0222);
console.log(srr0223);
const aaad = srr0222 + srr0223
console.log(aaad);         ///// 1,2,false4,5,true
console.log(typeof(aaad)); ///// string



///Это удалить
///Rest
function fooRest(...rest){
    return rest[0] + rest[1];
}

console.log(fooRest(1, 5));












 


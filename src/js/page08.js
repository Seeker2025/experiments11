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

console.log(sum(3, 2));


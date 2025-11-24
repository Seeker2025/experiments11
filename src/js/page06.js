console.log('page06');

let a = 'Whoa!';
export { a };

const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', ()=>{
    console.log('Hi006');
    let b = 'Hi006';
    
})

const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
console.log(yes);
console.log(no);




const btnP06 = document.querySelector('.button_p06');
console.log(btnP06);

btnP06.addEventListener('click', ()=>{
    yes.classList.toggle('vis');
    no.classList.toggle('vis');
})

const yes02 = document.querySelector('.yes02');
console.log(yes02);

const btnP06_02 = document.querySelector('.button_02p06');
console.log(btnP06_02);

btnP06_02.addEventListener('click', ()=>{
    yes02.classList.replace('red', 'green');
    // yes02.classList.replace('green', 'red');
    // no.classList.toggle('vis');
    console.log(1111);
})


const btn03 = document.querySelector('.button_33p06');
console.log(btn03);

let b = 0;
btn03.addEventListener('click', ()=>{
    if(!b) b=1;
    else b = 0;
    console.log(b); ////// 1, 0, 1, 0, 1
})




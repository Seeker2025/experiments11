console.log('page 03');


// console.log(arr.indexOf('c'));

// console.log(arr.splice(arr.indexOf('c'), 1));
// console.log(arr);


let arr01 = [
    {
        title: 'Peace',
        id: 1,
    },
    {
        title: 'World',
        id: 2,
    },
    {
        title: 'people',
        id: 3,
    }

]
console.log(arr01);

const newObj04 = {
    title: 'woman',
    id: 4,
}
const newObj02 = {
    title: 'Peace',
    id: 1,
}
const newObj05 = {
    title: 'World',
    id: 2,
}
const newObj06 = {
    title: 'max',
    id: 5,
}
const a = newObj06

console.log((arr01.some(itm=>itm.id===newObj02.id)));

if(arr01.some(itm=>itm.id===newObj02.id)){
    console.log('Hi!');
    arr01 = arr01.filter(itm=>itm.id!==newObj02.id);
    console.log(arr01);
}else{
    arr01.push(a);
    // console.log(arr01);
}

console.log(arr01);
// arr01 = arr01.filter(itm=>itm.id!==3);
// console.log(arr01);
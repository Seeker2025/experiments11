import axios from 'axios'

console.log('page 10, Arguments, Rest, Promise, async/await, setState');
/*
Здесь объясненеи ChatGPT про setState
*/

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

/*

toDelete = id => {
    this.setState(prevState => ({
        contacts: prevState.contacts.filter(
            itm => itm.id !== id
        )
    }));
}

что делает метод setState(prevState =>({}))
зачем он здесь нужен?

Хороший вопрос. Здесь используется функциональная форма setState, и она нужна не случайно.

Разберём код:

toDelete = id => {
    this.setState(prevState => ({
        contacts: prevState.contacts.filter(
            itm => itm.id !== id
        )
    }));
}
Что делает setState?

setState изменяет состояние (state) компонента.

Например, если сейчас состояние такое:

state = {
    contacts: [
        { id: 1, name: "John" },
        { id: 2, name: "Kate" },
        { id: 3, name: "Bob" }
    ]
}

то после вызова

this.setState({
    contacts: [...]
});

React обновит state.contacts и перерисует компонент.

Почему здесь используется функция?

setState можно вызвать двумя способами.

1. Передать объект
this.setState({
    contacts: newContacts
});
2. Передать функцию
this.setState(prevState => ({
    contacts: ...
}));

Эта функция получает предыдущее состояние (prevState).

Что такое prevState?

Это состояние до обновления.

Например:

prevState = {
    contacts: [
        { id: 1, name: "John" },
        { id: 2, name: "Kate" },
        { id: 3, name: "Bob" }
    ]
}

Затем выполняется

prevState.contacts.filter(...)
Что делает filter?
prevState.contacts.filter(
    itm => itm.id !== id
)

Если удалить пользователя с id = 2, то получится

Было:

[
    { id: 1, name: "John" },
    { id: 2, name: "Kate" },
    { id: 3, name: "Bob" }
]

После filter:

[
    { id: 1, name: "John" },
    { id: 3, name: "Bob" }
]

Именно этот новый массив возвращается в setState.

Почему нельзя написать так?

Можно написать:

this.setState({
    contacts: this.state.contacts.filter(
        itm => itm.id !== id
    )
});

Иногда это будет работать.

Но React не обновляет состояние мгновенно.

Например:

this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });

Можно ожидать:

0 → 1 → 2

Но получится:

0 → 1

Потому что оба вызова читают одно и то же старое значение this.state.count.

Поэтому используют prevState
this.setState(prevState => ({
    count: prevState.count + 1
}));

this.setState(prevState => ({
    count: prevState.count + 1
}));

Теперь React гарантирует, что второй вызов получит уже обновлённое состояние.

Результат:

0 → 1 → 2
Почему именно в toDelete используют prevState?

Потому что новое значение contacts зависит от предыдущего значения contacts.

React рекомендует использовать функциональную форму setState, когда новое состояние
вычисляется на основе предыдущего. Это безопаснее и предотвращает ошибки, если несколько
обновлений состояния происходят подряд.

Итог
this.setState(prevState => ({
    contacts: prevState.contacts.filter(
        itm => itm.id !== id
    )
}));

означает:

Взять текущее (актуальное) состояние prevState.
Создать новый массив contacts, исключив элемент с нужным id.
Вернуть объект:
{
    contacts: новый_массив
}
React обновит состояние и заново отрисует компонент.

Именно функциональная форма setState гарантирует, что вычисления будут основаны на
последнем актуальном состоянии, даже если React объединяет несколько обновлений или
выполняет их асинхронно.

*/












 


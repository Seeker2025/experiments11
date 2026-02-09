console.log('page07');

const switchInp = document.querySelector('input');
console.log(switchInp);

switchInp.addEventListener('change', (evt)=>{
    console.log(evt.target.checked);
    

})


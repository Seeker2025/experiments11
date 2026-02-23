console.log('page07  Switch');

const switchInp = document.querySelector('input');
console.log(switchInp);

switchInp.addEventListener('change', (evt)=>{
    console.log(evt.target.checked);
    

})


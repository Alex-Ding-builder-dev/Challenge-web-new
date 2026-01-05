const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus')
plus.forEach(display => {
    const parent = display.parentElement;
    const answer = parent.nextElementSibling;
    const minu = display.nextElementSibling;
    display.addEventListener('click' , ()=>{
        answer.classList.remove('hidden')
        display.classList.add('hidden');
        minu.classList.remove('hidden');
    })
})

minus.forEach(display => {
    const parent = display.parentElement;
    const answer = parent.nextElementSibling;
    const pl = display.previousElementSibling;
    display.addEventListener('click' , ()=>{
        answer.classList.add('hidden')
        display.classList.add('hidden');
        pl.classList.remove('hidden');
    })
})
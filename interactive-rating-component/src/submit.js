const listen = document.querySelector('.listen');
listen.addEventListener('click' , (e) => {
    const target = e.target.closest('.click');
    if (!target) return;
    document.querySelectorAll('.click').forEach(ev=>ev.dataset.active='false');
    target.dataset.active = 'true';
})

const s1 = document.querySelector('.section1');
const s2 = document.querySelector('.section2');
let num ;
const number = document.querySelector('.number');

const button = document.querySelector('.submit');
button.addEventListener('click' , () => {
    document.querySelectorAll('.click').forEach(eve => {
        if (eve.dataset.active==='true'){
            num = eve.firstChild.textContent;
            number.textContent = num
            s1.classList.add('hidden');
            s2.classList.remove('hidden');
        }
        
    })
})


const button = document.querySelector('button');
const activeBottom = document.querySelector('#bottom');
button.addEventListener('click',(e)=>{
   if (activeBottom.dataset.active ==='false'){
    activeBottom.dataset.active = 'true'
   }
   else activeBottom.dataset.active = 'false'
})
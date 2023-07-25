
window.onscroll=()=>{
let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrolly > 100);
};
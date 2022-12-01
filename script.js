const menuShow = document.querySelector('.header .menu');
const toggle = document.querySelectorAll('.toggle');

for(const element of toggle){
    element.addEventListener('click', () => {
        menuShow.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a');

for(const link of links){
    link.addEventListener('click', () => {
        menuShow.classList.remove('show')
    })
}



/* Change Background Header */ 
function scrollHeader () {
    const header = document.getElementById('header')

    if(this.scrolY >= 50) 
        header.classList.add('scroll-header');
    else 
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/* MIXITUP FILTER PORTAFOLIO */

let mixerPortafolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link Active Work */

const linkWork= document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=>l.addEventListener('click', activeWork))
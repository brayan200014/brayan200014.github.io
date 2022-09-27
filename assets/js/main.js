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


/* Scroll Sections Active Link */

const sections= document.querySelectorAll('section[id]') 

function scrollActive() {
    const scrollY= window.pageYOffset

    sections.forEach(current => {
        const sectionHeight= current.offsetHeight,
                sectionTop = current.offsetTop -58,
                sectionId= current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' +sectionId +']').classList.add('active-link')

        }else {
            document.querySelector('.nav__menu a[href*=' +sectionId +']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);

/* Drak Light Theme */

const themeButton= document.getElementById('theme-button');
const lightTheme= 'light-theme';
const iconTheme= 'bx-sun';

//Previously selected topic (If user selected)

const selectedTheme= localStorage.getItem('selected-theme');
const selectedIcon= localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the light-theme class

const getCurrentTheme= () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon= () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic 

if(selectedTheme) {
    //If the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the light
    document.body.classList[selectedTheme=== 'dark' ? 'add' : 'remove'](lightTheme);
    themeButton.classList[selectedIcon==='bx bx-moon' ? 'add' : 'remove'](iconTheme) 
}

//Activate /desactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme)
    //We save the theme and tge current icon that the user chosse 
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})



/* Scroll Reveal Animation */

const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal('.home__data');
sr.reveal('.home__handle, .home__scroll', {delay: 900, origin: 'bottom'});
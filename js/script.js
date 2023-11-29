ScrollReveal({
    reset: true ,
    distance:'20px',
    duration:2000,
    delay:100
});

ScrollReveal().reveal('.jumbo-content,.title', { origin: 'top' });
ScrollReveal().reveal('.skills-card,.major-card,.form', { origin: 'bottom' });
ScrollReveal().reveal('.profile-video', { origin: 'left' });
ScrollReveal().reveal('.profile-content,.about-content', { origin: 'right' });

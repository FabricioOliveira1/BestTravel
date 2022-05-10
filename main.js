window.addEventListener('scroll', onScroll)

onScroll()

function onScroll(){
    showNavOnScroll()
    backToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(contact)
    activateMenuAtCurrentSection(about)
}


function showNavOnScroll() {
    if(scrollY > 0){
        navigation.classList.add('scroll')   
    } else {
        navigation.classList.remove('scroll')
    }
}


function backToTopButtonOnScroll() {
    if(scrollY > 400){
        backToTopButton.classList.add('show')   
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card
#about
#about header
#about .content`);



function activateMenuAtCurrentSection(section) {

    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

    const sectionBoundaries = 
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

    const sectionId = section.getAttribute('id');
    
    const menuElement = document.querySelector(`.menu 
    a[href*=${sectionId}]`);

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}
// Fixed home bar 
let nav = document.querySelector('nav') ; 
window.addEventListener('scroll' , _=>  {
     //returns number of pixels the document has been scrolled virtically.
    if(window.scrollY >= nav.offsetHeight ) // return the height of the element
        nav.classList.add('fixed-nav-bar') ; 
    else 
        nav.classList.remove('fixed-nav-bar') ; 
}) ;

document.querySelector('.btn-icon').addEventListener('click' , _=> {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')) {
        document.querySelector('.btn-icon a').innerHTML = '<i class="fa-solid fa-sun"></i>' ; 
    } else {
        document.querySelector('.btn-icon a').innerHTML = '<i class="fa-solid fa-moon"></i>' ; 
    }
}) ;
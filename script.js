
let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick=()=>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec=>{
      let top=window.scrollY;
      let offset=sec.offsetTop-150;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id');
      if(top>=offset && top<offset+height){
          navLinks.forEach(link=>{
              link.classList.remove('active');
              document.querySelector('header nav a[href*='+id+']').classList.add('active');
          });
      }
  });
  let header =document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>100);
  menuIcon.classList.remove('bx-x');
  navbar.classList.toggle.remove('active');
    
  };
window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector('header').style.backgroundColor='#1f242d';
      } else {
        document.querySelector('header').style.backgroundColor='';
      }
    }

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
 ScrollReveal().reveal('.home-content,.heading', {origin:'top'});
 ScrollReveal().reveal('.home-img,.contact form ,.box', {origin:'bottom'});
 ScrollReveal().reveal('.home-content h1,.info', {origin:'left'});
 ScrollReveal().reveal('.home-content p,.about-content', {origin:'right'});
 ScrollReveal().reveal('.about-image', {origin:'left'});


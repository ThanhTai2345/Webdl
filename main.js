var count = 1;
setInterval(() => {
    if (count > 5) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
    count++;
}, 5000);
function displayNav() {
    var getIcon = document.querySelector(".icon-nav");
    var getNav = document.querySelector(".mobile-nav");
    getIcon.addEventListener('click', function () {
        getNav.style.display = "block";
    })
}
function closeNav() {
    var getIcon = document.querySelector(".closeNav");
    var getNav = document.querySelector(".mobile-nav");
    getIcon.addEventListener('click', function () {
        getNav.style.display = "none";
    })
}
ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 2500,
    delay: 100
});
ScrollReveal().reveal('.title', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.subtitle', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.amt', { delay: 500, origin: 'bottom' });

var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
const root = document.querySelector(':root');

c1.addEventListener('click',function(){
    root.style.setProperty('--color2','#009943');
    localStorage.setItem('pickcolor','#009943');
})
c2.addEventListener('click',function(){
    root.style.setProperty('--color2','#e2bb10');
    localStorage.setItem('pickcolor','#e2bb10');
})
c3.addEventListener('click',function(){
    root.style.setProperty('--color2','#0fe3ea');
    localStorage.setItem('pickcolor','#0fe3ea');
})

function loadTheme() {
    if(localStorage.getItem('pickColor') != ''){
        root.style.setProperty('--color2',localStorage.getItem('pickColor'));
    }
}

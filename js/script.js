// toggle class active
const navbarnav = document.querySelector ('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

// menghilangkan nav extra
const menu = document.querySelector ('#menu');

document.addEventListener('click', function (e) {
    if(!menu.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
})
    

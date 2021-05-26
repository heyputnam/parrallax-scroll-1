let bg = document.getElementById('bg');
let cloud = document.getElementById('cloud');
let wave = document.getElementById('wave');
let text = document.getElementById('text');


window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    cloud.style.left = -value * 2 + 'px';
    wave.style.bottom = -value * 0.15 + 'px';
    text.style.bottom = -value * 0.5 + 'px';

})
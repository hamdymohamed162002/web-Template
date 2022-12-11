const navBar = document.getElementById('Navbar');
addEventListener('scroll', () => {
    if (scrollY > 85) {
        navBar.classList.add("nav-active")
    }
    else
        navBar.classList.remove('nav-active');
})
const audio = document.getElementById('audio');
const bar = document.getElementById('progress');
const play_btn = document.getElementById('play');
const timer=document.getElementById('timer');
const icon=document.getElementById('play-btn');
play_btn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.classList.replace('gg-play-button','gg-play-pause')

    }
    else {audio.pause();icon.classList.replace('gg-play-pause','gg-play-button')}
})
audio.ontimeupdate = () => {
    const time = audio.buffered.end(0);
    const current = audio.currentTime;
    const progress = Math.floor((current / time) * 100);
    bar.style.width = `${progress}%`;
    const minute=Math.floor(current/60);
    const seconds=Math.floor(current%60);
    if(seconds<10)
    {
        timer.innerText=`0:0${seconds}`;
    }
    else
    timer.innerText=`${minute}:${seconds}`;
}
const nav=document.getElementById('nav-content')
const mobile=document.getElementById('mobile-btn')
mobile.addEventListener('click',()=>{
nav.style.top='40px';
})
const close_btn=document.getElementById('close-btn');
close_btn.onclick=()=>{
    nav.style.top='-500px'
}
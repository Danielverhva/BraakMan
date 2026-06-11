const cursorGlow=document.querySelector('.cursor-glow');const audio=document.getElementById('themeAudio');const playButton=document.getElementById('playButton');const audioStatus=document.getElementById('audioStatus');const timeDisplay=document.getElementById('timeDisplay');const progressBar=document.getElementById('progressBar');
document.addEventListener('mousemove',e=>{const x=e.clientX,y=e.clientY;document.body.style.setProperty('--x',`${x}px`);document.body.style.setProperty('--y',`${y}px`);if(cursorGlow){cursorGlow.style.left=`${x}px`;cursorGlow.style.top=`${y}px`;}});
function formatTime(seconds){if(!Number.isFinite(seconds))return'00:00';const m=Math.floor(seconds/60);const s=Math.floor(seconds%60);return`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
playButton.addEventListener('click',()=>{audio.paused?audio.play():audio.pause()});
audio.addEventListener('play',()=>{playButton.textContent='❚❚';audioStatus.textContent='BraakMan ontwaakt...'});
audio.addEventListener('pause',()=>{playButton.textContent='▶';audioStatus.textContent='Theme song gepauzeerd'});
audio.addEventListener('ended',()=>{playButton.textContent='▶';audioStatus.textContent='De stilte keert terug'});
audio.addEventListener('loadedmetadata',()=>{timeDisplay.textContent=`00:00 / ${formatTime(audio.duration)}`});
audio.addEventListener('timeupdate',()=>{const progress=(audio.currentTime/audio.duration)*100;progressBar.style.width=`${progress||0}%`;timeDisplay.textContent=`${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`});
const revealElements=document.querySelectorAll('.section,.power-card,.glass-panel');revealElements.forEach(el=>el.classList.add('reveal'));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.12});revealElements.forEach(el=>observer.observe(el));

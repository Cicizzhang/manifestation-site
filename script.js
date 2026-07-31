const glow=document.getElementById('cursorGlow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`;
  });
  card.addEventListener('pointerleave',()=>card.style.transform='');
});

window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  document.querySelectorAll('.parallax img').forEach((img,i)=>{
    img.style.transform=`translateY(${(y%900)*0.025}px) scale(1.04)`;
  });
});

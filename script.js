// Smooth reveal animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
(entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},
{
 threshold:0.15
});


sections.forEach(section=>{
  observer.observe(section);
});


// floating image movement

const floating = document.querySelectorAll(".float");

floating.forEach((item,index)=>{

  item.style.animationDelay = `${index * 1.2}s`;

});


// subtle cursor glow

const glow = document.createElement("div");

glow.style.position="fixed";
glow.style.width="200px";
glow.style.height="200px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background=
"radial-gradient(circle,rgba(180,150,255,.15),transparent 70%)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="1";

document.body.appendChild(glow);


document.addEventListener(
"mousemove",
(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

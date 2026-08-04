// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    gsap.to(loader, {

        opacity:0,

        duration:1,

        delay:.5,

        onComplete(){

            loader.style.display="none";

        }

    });

});
// ===============================
// Lenis
// ===============================

const lenis = new Lenis({

    duration:1.2,

    smoothWheel:true

});

function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);
// ===============================
// Navbar
// ===============================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("active");

    }

    else{

        header.classList.remove("active");

    }

});
// ===============================
// Hero Animation
// ===============================

gsap.timeline()

.from(".logo",{

    y:-50,

    opacity:0,

    duration:1

})

.from(".nav a",{

    y:-20,

    opacity:0,

    stagger:.1

},"-=.6")

.from(".btn-primary",{

    opacity:0,

    y:30

},"-=.4")

.from(".hero-badge",{

    y:30,

    opacity:0

})

.from(".hero-title",{

    y:60,

    opacity:0

})

.from(".hero-description",{

    y:40,

    opacity:0

})

.from(".hero-buttons",{

    y:40,

    opacity:0

})

.from(".hero-info",{

    y:40,

    opacity:0

})

.from(".hero-card",{

    scale:.8,

    opacity:0,

    rotate:5

},"-=1");
gsap.to(".hero-card",{

    y:15,

    repeat:-1,

    yoyo:true,

    duration:3,

    ease:"power1.inOut"

});
const hero=document.querySelector(".hero");

const card=document.querySelector(".hero-card");

hero.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*30;

    const y=(e.clientY/window.innerHeight-.5)*30;

    gsap.to(card,{

        x,

        y,

        rotateY:x,

        rotateX:-y,

        duration:.5

    });

});
const numbers=document.querySelectorAll(".hero-info h2");

numbers.forEach(item=>{

let end=parseInt(item.innerText);

let start=0;

let timer=setInterval(()=>{

start++;

item.innerText=start+"+";

if(start>=end){

clearInterval(timer);

item.innerText=end+"+";

}

},15);

});
gsap.utils.toArray("section").forEach(section=>{

gsap.from(section,{

scrollTrigger:{

trigger:section,

start:"top 80%"

},

opacity:0,

y:100,

duration:1

});

});

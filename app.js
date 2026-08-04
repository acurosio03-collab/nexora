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
window.addEventListener("scroll",()=>{

const scroll=

window.scrollY/

(document.body.scrollHeight-window.innerHeight);

document.querySelector(".progress-bar")

.style.width=(scroll*100)+"%";

});
const cursor=document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

gsap.to(cursor,{

x:e.clientX,

y:e.clientY,

duration:.08

});

});
gsap.utils.toArray(".service-card").forEach(card=>{

    gsap.from(card,{

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        },

        opacity:0,

        y:80,

        duration:1

    });

});
gsap.utils.toArray(".portfolio-card").forEach(card=>{

    gsap.from(card,{

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        },

        opacity:0,

        y:100,

        duration:1

    });

});
gsap.utils.toArray(".process-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {

            trigger: card,

            start: "top 85%"

        },

        opacity: 0,

        y: 80,

        duration: 0.8,

        ease: "power3.out"

    });

});
// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = parseInt(counter.dataset.target);
        let current = 0;

        const increment = Math.ceil(target / 50);

        const updateCounter = () => {

            current += increment;

            if(current >= target){

                counter.innerText = target + "+";

            }else{

                counter.innerText = current + "+";

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

},{
    threshold:0.5
});

counters.forEach(counter => counterObserver.observe(counter));
gsap.utils.toArray(".testimonial-card").forEach(card=>{

    gsap.from(card,{

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        },

        opacity:0,

        y:80,

        duration:1

    });

});
gsap.utils.toArray(".pricing-card").forEach(card=>{

    gsap.from(card,{

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        },

        opacity:0,

        y:80,

        duration:1

    });

});
//=====================================
// FAQ Accordion
//=====================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if(other !== item){

                other.classList.remove("active");

                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if(item.classList.contains("active")){

            answer.style.maxHeight = answer.scrollHeight + "px";

        }else{

            answer.style.maxHeight = null;

        }

    });

});
gsap.from(".faq-item",{

    scrollTrigger:{

        trigger:".faq-wrapper",

        start:"top 80%"

    },

    opacity:0,

    y:60,

    stagger:.15,

    duration:.8

});
gsap.from(".cta-box",{

    scrollTrigger:{

        trigger:".cta",

        start:"top 80%"

    },

    opacity:0,

    scale:.9,

    duration:1

});
gsap.from(".footer-grid > div",{

    scrollTrigger:{

        trigger:".footer",

        start:"top 85%"

    },

    opacity:0,

    y:50,

    stagger:.15,

    duration:.8

});

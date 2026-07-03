// =====================================
// PORTFOLIO V2
// Alisha Khot
// =====================================

// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", function(){

        navItems.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});

// ===============================
// HEADER EFFECT
// ===============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="#0F172A";

header.style.boxShadow="0 5px 25px rgba(0,0,0,.35)";

}

else{

header.style.background="rgba(15,23,42,.85)";

header.style.boxShadow="none";

}

});

// ===============================
// TYPING EFFECT
// ===============================

const titles=[

"Data Analyst",

"Power BI Developer",

];

let titleIndex=0;

let charIndex=0;

const typing=document.querySelector(".hero-text h2");

function type(){

if(charIndex<titles[titleIndex].length){

typing.textContent+=titles[titleIndex].charAt(charIndex);

charIndex++;

setTimeout(type,80);

}

else{

setTimeout(erase,1800);

}

}

function erase(){

if(charIndex>0){

typing.textContent=titles[titleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,40);

}

else{

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

setTimeout(type,300);

}

}

type();

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

const revealElements=document.querySelectorAll(

".hero-text,.hero-image,.about-card,.experience-card,.skill-card,.project-card,.cert-card,.contact-box"

);

revealElements.forEach(el=>observer.observe(el));

// ===============================
// BUTTON HOVER EFFECT
// ===============================

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

// ===============================
// PROJECT CARD GLOW
// ===============================

const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 30px rgba(59,130,246,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});

// ===============================
// SMOOTH SCROLL FOR NAV LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===============================
// CURRENT YEAR IN FOOTER (Optional)
// ===============================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Alisha Khot | Data Analyst Portfolio`;

}

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("🚀 Portfolio loaded successfully.");

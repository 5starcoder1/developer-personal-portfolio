// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){
setTimeout(() => {
loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
}, 500);

}, 1500);
}

});

// ==========================
// MOBILE MENU
// ==========================
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if(menuBtn && nav){

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuBtn.innerHTML =
      nav.classList.contains("active")
      ? "✕"
      : "☰";
  });

}






// ==========================
// TYPING EFFECT
// ==========================

const typing =
document.getElementById("typing");

const words = [
"Software Developer",
"AI Developer",
"Python Programmer",
"Web Developer",
"FlutterFlow Developer",
"Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

if(!typing) return;

const currentWord =
words[wordIndex];

if(!deleting){

typing.textContent =
currentWord.substring(
0,
charIndex + 1
);

charIndex++;

if(charIndex === currentWord.length){

deleting = true;

setTimeout(
typeEffect,
1500
);

return;
}

}else{

typing.textContent =
currentWord.substring(
0,
charIndex - 1
);

charIndex--;

if(charIndex === 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){
wordIndex = 0;
}

}

}

setTimeout(
typeEffect,
deleting ? 60 : 120
);

}

typeEffect();

// ==========================
// DARK MODE
// ==========================

const themeBtn =
document.getElementById("themeBtn");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "light"){

document.body.classList.add("light");

if(themeBtn){
themeBtn.innerHTML = "☀️";
}

}

if(themeBtn){

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

if(
document.body.classList.contains("light")
){

localStorage.setItem(
"theme",
"light"
);

themeBtn.innerHTML = "☀️";

}else{

localStorage.setItem(
"theme",
"dark"
);

themeBtn.innerHTML = "🌙";

}

});

}

// ==========================
// SKILL ANIMATION
// ==========================

const fills =
document.querySelectorAll(".fill");

function animateSkills(){

fills.forEach(fill => {

const top =
fill.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

fill.style.width =
fill.dataset.width + "%";

}

});

}

window.addEventListener(
"scroll",
animateSkills
);

animateSkills();

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements =
document.querySelectorAll(
".timeline-item,.project-card,.glass-card,.skill"
);

function revealOnScroll(){

revealElements.forEach(el => {

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight - 80){

el.style.opacity = "1";

el.style.transform =
"translateY(0px)";

}

});

}

revealElements.forEach(el => {

el.style.opacity = "0";

el.style.transform =
"translateY(40px)";

el.style.transition =
"all .8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// ==========================
// PARTICLES
// ==========================

const particles =
document.getElementById("particles");

if(particles){

for(let i=0;i<50;i++){

const particle =
document.createElement("span");

particle.style.left =
Math.random()*100 + "%";

particle.style.animationDuration =
Math.random()*8 + 8 + "s";

particle.style.animationDelay =
Math.random()*5 + "s";

particle.style.width =
Math.random()*8 + 2 + "px";

particle.style.height =
particle.style.width;

particles.appendChild(
particle
);

}

}

// ==========================
// CONTACT FORM
// ==========================

const contactForm =
document.getElementById(
"contactForm"
);

if(contactForm){

contactForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const button =
contactForm.querySelector(
"button"
);

button.innerHTML =
"Sending...";

setTimeout(() => {

button.innerHTML =
"Message Sent ✓";

contactForm.reset();

setTimeout(() => {

button.innerHTML =
"Send Message";

},2000);

},1500);

});

}

// ==========================
// ACTIVE NAV LINK
// ==========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top =
section.offsetTop - 150;

const height =
section.offsetHeight;

if(
window.scrollY >= top &&
window.scrollY < top + height
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters =
document.querySelectorAll(
".glass-card h2"
);

counters.forEach(counter=>{

const target =
parseInt(
counter.innerText
);

let count = 0;

function updateCounter(){

if(count < target){

count += Math.ceil(
target / 40
);

counter.innerText =
count + "+";

requestAnimationFrame(
updateCounter
);

}else{

counter.innerText =
target + "+";

}

}

updateCounter();

});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log(
"🚀 Rahul Kumar Singh Portfolio Loaded Successfully"
);

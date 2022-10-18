//INPUT VARIABLES

//INITIAL IMAGE
const img = document.querySelector(".map-pictures .zone-all");

//BUTTONS
//Get buttons from HTML

//OUTPUT VARIABLES
const zoneAllButton = document.querySelector("#buttons-container #zone-all");
const zoneDangerButton = document.querySelector("#buttons-container #zone-danger");
const shieldTreesButton = document.querySelector("#buttons-container #shield-trees");
const scientificStudySitesButton = document.querySelector("#buttons-container #scientific-study-sites");
const oldGrowthForestButton = document.querySelector("#buttons-container #old-growth-forest");
const hothamValleyRailwayButton = document.querySelector("#buttons-container #hotham-valley-railway");
const bibbulmunTrackButton = document.querySelector("#buttons-container #bibbulmun-track");
const mundaBiddiTrailButton = document.querySelector("#buttons-container #munda-biddi-trail");
const bikeTrailButton = document.querySelector("#buttons-container #bike-trail");
const walkTrailButton = document.querySelector("#buttons-container #walk-trail");
const faunaEndangeredButton = document.querySelector("#buttons-container #fauna-endangered");
const faunaVulnerableButton = document.querySelector("#buttons-container #fauna-vulnerable");
const habitatIndicativeButton = document.querySelector("#buttons-container #habitat-indicative");
const habitatInterimButton = document.querySelector("#buttons-container #habitat-interim");
const waterPropertiesButton = document.querySelector("#buttons-container #water-properties");
const rehabilitatedAreaButton = document.querySelector("#buttons-container #rehabilitated-area");

//Adding events on each button to show a different picture
zoneAllButton.addEventListener('click', function() {
    img.src = 'images/zone-all.svg';
});

zoneDangerButton.addEventListener('click', function() {
    img.src = 'images/zone-danger.svg';
});

shieldTreesButton.addEventListener('click', function() {
    img.src = 'images/shield-trees.svg';
});

scientificStudySitesButton.addEventListener('click', function() {
    img.src = 'images/scientific-study-sites.svg';
});

oldGrowthForestButton.addEventListener('click', function() {
    img.src = 'images/old-growth-forest-fmb.svg';
});

hothamValleyRailwayButton.addEventListener('click', function() {
    img.src = 'images/hotham-valley-railway.svg';
});

bibbulmunTrackButton.addEventListener('click', function() {
    img.src = 'images/bibbulmun-track.svg';
});

mundaBiddiTrailButton.addEventListener('click', function() {
    img.src = 'images/munda-biddi-trail.svg';
});

bikeTrailButton.addEventListener('click', function() {
    img.src = 'images/bike-trail.svg';
});

walkTrailButton.addEventListener('click', function() {
    img.src = 'images/walk-trail.svg';
});

faunaEndangeredButton.addEventListener('click', function() {
    img.src = 'images/threatened-endangered.svg';
});

faunaVulnerableButton.addEventListener('click', function() {
    img.src = 'images/threatened-vulnerable.svg';
});

habitatIndicativeButton.addEventListener('click', function() {
    img.src = 'images/indicative.svg';
});

habitatInterimButton.addEventListener('click', function() {
    img.src = 'images/interim.svg';
});

waterPropertiesButton.addEventListener('click', function() {
    img.src = 'images/water-properties.svg';
});

rehabilitatedAreaButton.addEventListener('click', function() {
    img.src = 'images/rehabilitated-mined-area.svg';
});

//DANGER ZONE HEADING JS
// Radhakrishnan, Suraj. n.d. "GSAP Text Heading Animation." Codepen. Accessed on October 17, 2022. https://codepen.io/surajr1711/pen/oNbmRxw.
const headingTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
    yoyo: true
});
  
headingTl
    .from(".heading", {
      duration: 1,
      scaleX: 0,
      transformOrigin: "left",
      ease: "expo.inOut"
    })
    .from(
      ".heading h1",
      {
        y: "100%",
        duration: 0.8,
        ease: "expo.out"
      },
      "-=0.2"
    )
    .from(
      ".heading",
      {
        css: { borderBottom: "4px solid black" },
        duration: 2,
        transformOrigin: "right",
        ease: "none"
      },
      "-=1"
    )
    .from(
      ".heading h1",
      {
        duration: 2,
        transformOrigin: "right",
        ease: "none",
        css: { color: "black" }
      },
      "-=2"
    )
;

//SLIDESHOW JS
// W3 Schools. n.d. "How TO - Slideshow." W3 Schools. Accessed on October 17, 2022. https://www.w3schools.com/howto/howto_js_slideshow.asp.
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activate", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activate";
}

//Making buttons active
// Kodebase. 2020. "How to Add Active Class in Javascript." YouTube video, 3:52. https://www.youtube.com/watch?v=3cS0IsV-yhA
let header = document.getElementById("buttons-container");
let btns = header.getElementsByClassName("legend-button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        let current = 
        document.getElementsByClassName("active"); //set button one as active
        current[0].className = // default inactive buttons
        current[0].className.replace("active", ""); //add active on clicked button
        this.className += " active";
    });
}

// GSAP Image fade in 
// Miller Thomas. n.d. "GSAP Scrolltrigger fade-in elements." Codepen. Accessed on October 7, 2022. https://codepen.io/Meuss/pen/eYJZbJN
const boxes = gsap.utils.toArray('.zone-image');

boxes.forEach((box) => {
  const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});
const titles = [
  "Full Stack Developer",
  "Back End Developer",
  "Front End Developer",
  "Web Developer",
  "Software Developer",
];

const maxTitleLength = Math.max(...titles.map((title) => title.length));
let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

let isArrowVisible = true;

const IMAGE_LOOP = 4;
let imgIndex = 0;

const homeLink = document.querySelector('a[href="#home"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const skillsLink = document.querySelector('a[href="#skills"]');
const cvLink = document.getElementById("cv-link");
const contactLink = document.querySelector('a[href="#contact"]');

const homeSection = document.querySelector("#home-section");
const skillsSection = document.querySelector("#skills-section");
const projectsSection = document.querySelector("#projects-section");
const contactSection = document.querySelector("#contact-section");

const titleElement = document.querySelector(".title-text");
const titleContent = document.querySelector(".title-content");
const cursorElement = document.querySelector(".typing-cursor");

const downArrow = document.getElementById("down-arrow");

const xpensraiImages = [...document.querySelectorAll("#xpenser-imgs > img")];
const hangerImages = [...document.querySelectorAll("#hanger-imgs > img")];
const muscleImages = [...document.querySelectorAll("#muscle-imgs > img")];

function init() {
  setTimeout(() => {
    typeTitle();
  }, 2000);

  setInterval(showNextProjectImage, 2500);
}

function typeTitle() {
  const currentTitle = titles[currentTitleIndex];
  const text = isDeleting
    ? currentTitle.slice(0, currentCharIndex - 1)
    : currentTitle.slice(0, currentCharIndex + 1);

  const placeholderText = " ".repeat(maxTitleLength - text.length);

  titleElement.querySelector(
    ".title-content"
  ).textContent = `${text}${placeholderText}`;

  if (!isDeleting && text === currentTitle) {
    isDeleting = true;
    cursorElement.style.display = "none";
    setTimeout(() => {
      cursorElement.style.display = "inline-block";
      setTimeout(() => {
        typeTitle();
      }, 400);
    }, 1000);
  } else if (isDeleting && text === "") {
    isDeleting = false;
    cursorElement.style.display = "inline-block";
    setTimeout(() => {
      typeTitle();
    }, 400);

    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
  } else {
    setTimeout(
      () => {
        isDeleting ? currentCharIndex-- : currentCharIndex++;
        typeTitle();
      },
      isDeleting ? 90 : 100
    );
  }
}

function scrollToProjectsAndHideArrow() {
  projectsSection.scrollIntoView({ behavior: "smooth" });
  downArrow.style.display = "none";
}

function showNextProjectImage() {
  xpensraiImages.at(imgIndex).classList.toggle("active");
  hangerImages.at(imgIndex).classList.toggle("active");
  muscleImages.at(imgIndex).classList.toggle("active");

  imgIndex = (imgIndex + 1) % IMAGE_LOOP;

  xpensraiImages.at(imgIndex).classList.toggle("active");
  hangerImages.at(imgIndex).classList.toggle("active");
  muscleImages.at(imgIndex).classList.toggle("active");
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    if (isArrowVisible) {
      downArrow.style.display = "none";
      isArrowVisible = false;
    }
  } else {
    if (!isArrowVisible) {
      downArrow.style.display = "block";
      isArrowVisible = true;
    }
  }
});

function scrollIntoView(el) {
  el.scrollIntoView({ behavior: "smooth" });
}

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  scrollIntoView(homeSection);
});

projectsLink.addEventListener("click", (e) => {
  e.preventDefault();
  scrollIntoView(projectsSection);
});

skillsLink.addEventListener("click", (e) => {
  e.preventDefault();
  scrollIntoView(skillsSection);
});

cvLink.addEventListener("click", (e) => {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = ".assets/documents/Ahmad_Ali_CV.pdf";
  link.download = "Ahmad_Ali_CV.pdf";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  scrollIntoView(contactSection);
});

downArrow.addEventListener("click", scrollToProjectsAndHideArrow);

init();

// toggle the navbar
function toggleMenu() {
  const navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.classList.toggle("active");
  const toggleButton = document.querySelector(".toggle-button");
  toggleButton.classList.toggle("active");

  // Toggle between "☰" and "✕" symbols
  if (toggleButton.innerHTML === "☰") {
    toggleButton.innerHTML = "✕";
  } else {
    toggleButton.innerHTML = "☰";
  }
}

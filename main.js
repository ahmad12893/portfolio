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

const imagesContainer = document.querySelector(".xpensr-images");
const xpensrai_images = imagesContainer.querySelectorAll(".xpensrai-image");
let xpensraiIndex = 0;

const titleElement = document.querySelector(".title-text");
const cursorElement = document.querySelector(".typing-cursor");
const skillsLink = document.querySelector('a[href="#skills"]');
const imagesContainer2 = document.querySelector(".hanger-images");
const downArrow = document.getElementById("down-arrow");

const homeLink = document.querySelector('a[href="#home"]');
const contactLink = document.querySelector('a[href="#contact"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const projectsSection = document.querySelector(".projects");

const hanger_images = imagesContainer2.querySelectorAll(".hanger-image");

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

function startTyping() {
    setTimeout(() => {
        typeTitle();
    }, 2000);
}

startTyping();

document.addEventListener("DOMContentLoaded", () => {
    const cvLink = document.getElementById("cv-link");

    cvLink.addEventListener("click", (event) => {
        event.preventDefault();

        const downloadLink = document.createElement("a");
        downloadLink.href = ".assets/documents/Ahmad_Ali_CV.pdf";
        downloadLink.download = "Ahmad_Ali_CV.pdf";
        downloadLink.style.display = "none";

        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
    });
});

function scrollToProjectsAndHideArrow() {
    projectsSection.scrollIntoView({ behavior: "smooth" });

    downArrow.style.display = "none";

    downArrow.removeEventListener("click", scrollToProjectsAndHideArrow);

    setTimeout(() => {
        downArrow.addEventListener("click", scrollToProjectsAndHideArrow);
    }, 1000);
}

downArrow.addEventListener("click", scrollToProjectsAndHideArrow);

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

xpensrai_images[xpensraiIndex].classList.add("active");

function showNextXpensraiImage() {
    xpensrai_images[xpensraiIndex].classList.remove("active");
    xpensraiIndex = (xpensraiIndex + 1) % xpensrai_images.length;
    xpensrai_images[xpensraiIndex].classList.add("active");
}

let hangerIndex = 0;
hanger_images[hangerIndex].classList.add("active");

function showNextHangerImage() {
    hanger_images[hangerIndex].classList.remove("active");
    hangerIndex = (hangerIndex + 1) % hanger_images.length;
    hanger_images[hangerIndex].classList.add("active");
}

const imagesContainer3 = document.querySelector(".muscle-images");
const muscle_images = imagesContainer3.querySelectorAll(".muscle-image");
let muscleIndex = 0;
muscle_images[muscleIndex].classList.add("active");

function showNextMuscleImage() {
    muscle_images[muscleIndex].classList.remove("active");
    muscleIndex = (muscleIndex + 1) % muscle_images.length;
    muscle_images[muscleIndex].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    homeLink.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
    });

    projectsLink.addEventListener("click", (event) => {
        event.preventDefault();
        document
            .querySelector("#projects")
            .scrollIntoView({ behavior: "smooth" });
    });

    skillsLink.addEventListener("click", (event) => {
        event.preventDefault();
        document
            .querySelector("#skills")
            .scrollIntoView({ behavior: "smooth" });
    });

    contactLink.addEventListener("click", (event) => {
        event.preventDefault();
        document
            .querySelector("#contact")
            .scrollIntoView({ behavior: "smooth" });
    });
});

setInterval(showNextXpensraiImage, 2000);
setInterval(showNextHangerImage, 2000);
setInterval(showNextMuscleImage, 2000);

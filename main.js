const titles = [
  'Full Stack Developer',
  'Back End Developer',
  'Front End Developer',
  'Web Developer',
  'Software Developer',
];

let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const maxTitleLength = Math.max(...titles.map((title) => title.length));

function typeTitle() {
  const titleElement = document.querySelector('.title-text');
  const cursorElement = document.querySelector('.typing-cursor');
  const currentTitle = titles[currentTitleIndex];
  const text = isDeleting
    ? currentTitle.slice(0, currentCharIndex - 1)
    : currentTitle.slice(0, currentCharIndex + 1);

  const placeholderText = ' '.repeat(maxTitleLength - text.length);

  titleElement.querySelector(
    '.title-content'
  ).textContent = `${text}${placeholderText}`;

  if (!isDeleting && text === currentTitle) {
    isDeleting = true;
    cursorElement.style.display = 'none';
    setTimeout(() => {
      cursorElement.style.display = 'inline-block';
      setTimeout(() => {
        typeTitle();
      }, 400);
    }, 1000);
  } else if (isDeleting && text === '') {
    isDeleting = false;
    cursorElement.style.display = 'inline-block';
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

document.addEventListener('DOMContentLoaded', () => {
  const cvLink = document.getElementById('cv-link');

  cvLink.addEventListener('click', (event) => {
    event.preventDefault();

    const downloadLink = document.createElement('a');
    downloadLink.href = './documents/Ahmad Ali (CV).pdf';
    downloadLink.download = 'Ahmad Ali (CV).pdf';
    downloadLink.style.display = 'none';

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  });
});

const downArrow = document.getElementById('down-arrow');
const portfolioSection = document.querySelector('.portfolio');
let isArrowVisible = true;

function scrollToPortfolioAndHideArrow() {
  portfolioSection.scrollIntoView({ behavior: 'smooth' });

  downArrow.style.display = 'none';

  downArrow.removeEventListener('click', scrollToPortfolioAndHideArrow);

  setTimeout(() => {
    downArrow.addEventListener('click', scrollToPortfolioAndHideArrow);
  }, 1000);
}

downArrow.addEventListener('click', scrollToPortfolioAndHideArrow);

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    if (isArrowVisible) {
      downArrow.style.display = 'none';
      isArrowVisible = false;
    }
  } else {
    if (!isArrowVisible) {
      downArrow.style.display = 'block';
      isArrowVisible = true;
    }
  }
});

const imagesContainer = document.querySelector('.xpensr-images');
const xpensrai_images = imagesContainer.querySelectorAll('.xpensrai-image');
let xpensraiIndex = 0;

xpensrai_images[xpensraiIndex].classList.add('active');

function showNextXpensraiImage() {
  xpensrai_images[xpensraiIndex].classList.remove('active');
  xpensraiIndex = (xpensraiIndex + 1) % xpensrai_images.length;
  xpensrai_images[xpensraiIndex].classList.add('active');
}

const imagesContainer2 = document.querySelector('.hanger-images');

const hanger_images = imagesContainer2.querySelectorAll('.hanger-image');
let hangerIndex = 0;
hanger_images[hangerIndex].classList.add('active');

function showNextHangerImage() {
  hanger_images[hangerIndex].classList.remove('active');
  hangerIndex = (hangerIndex + 1) % hanger_images.length;
  hanger_images[hangerIndex].classList.add('active');
}

const imagesContainer3 = document.querySelector('.muscle-images');
const muscle_images = imagesContainer3.querySelectorAll('.muscle-image');
let muscleIndex = 0;
muscle_images[muscleIndex].classList.add('active');

function showNextMuscleImage() {
  muscle_images[muscleIndex].classList.remove('active');
  muscleIndex = (muscleIndex + 1) % muscle_images.length;
  muscle_images[muscleIndex].classList.add('active');
}

setInterval(showNextXpensraiImage, 2000);
setInterval(showNextHangerImage, 2000);
setInterval(showNextMuscleImage, 2000);

document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('a[href="#home"]');
  homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
  });

  const portfolioLink = document.querySelector('a[href="#portfolio"]');
  portfolioLink.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
  });

  const skillsLink = document.querySelector('a[href="#skills"]');
  skillsLink.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
  });

  const contactLink = document.querySelector('a[href="#contact"]');
  contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });
});

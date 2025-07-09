// Typed.js initialization
let typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// DOM selections
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

// Helper functions
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(index) {
  allSection[index].classList.add("back-section");
}

function showSection(element) {
  const target = element.getAttribute("href").split("#")[1];

  for (let i = 0; i < totalSection; i++) {
    const section = allSection[i];
    if (section.classList.contains("active")) {
      section.classList.remove("active");
      section.classList.add("back-section");
    } else {
      section.classList.remove("back-section");
    }
  }

  const targetSection = document.querySelector("#" + target);
  targetSection.classList.add("active");
}

function updateNav(element) {
  const target = element.getAttribute("href").split("#")[1];

  for (let i = 0; i < totalNavList; i++) {
    const navLink = navList[i].querySelector("a");
    navLink.classList.remove("active");

    if (navLink.getAttribute("href").split("#")[1] === target) {
      navLink.classList.add("active");
    }
  }
}

// Nav item click handling
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalSection; j++) {
      if (allSection[j].classList.contains("active")) {
        addBackSection(j);
        break;
      }
    }

    updateNav(this);
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

// "Hire Me" button click handling — no menu toggle here
const hireMeButtons = document.querySelectorAll(".hire-me");

hireMeButtons.forEach(button => {
  button.addEventListener("click", function () {
    removeBackSection();

    for (let i = 0; i < totalSection; i++) {
      if (allSection[i].classList.contains("active")) {
        addBackSection(i);
        break;
      }
    }

    showSection(this);
    updateNav(this);

    // ✅ DO NOT toggle aside menu here (prevents popup on click)
  });
});

// Aside toggler (burger icon)
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("close");

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

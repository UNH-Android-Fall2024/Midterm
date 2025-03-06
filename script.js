
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
function showSection(sectionId) {
    var sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

function showAllSections(event) {
    event.preventDefault();
    var sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.style.display = "block";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    showAllSections(new Event('dummy'));
});
function navigateToBiography() {
    var aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
    var aboutImage = document.querySelector(".about-image img");
    aboutImage.src = "tongue einstein.jpg";
    aboutImage.alt = "Einstein Tongue";
}
function toggleAbout() {
    var moreText = document.getElementById("more-about");
    var button = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        button.textContent = "Show Less";
    } else {
        moreText.style.display = "none";
        button.textContent = "Continue Reading";
    }
}
function togglePublications() {
    var container = document.getElementById("publications-container");
    var button = document.getElementById("viewMorePublicationsBtn");

    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "grid";
        button.textContent = "See Less";
    } else {
        container.style.display = "none";
        button.textContent = "See More";
    }
}
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'block';
    });
});



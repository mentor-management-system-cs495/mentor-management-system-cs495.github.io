/* -------------- Loader ----------------------- */
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
});
/* -------------- Toggle Navbar ----------------------- */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}
/* -------------- Active Section ----------------------- */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
});
/* -------------- About Tabs ----------------------- */
const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});
/* -------------- Installation Tabs ----------------------- */
const tabsContainerInstallation = document.querySelector(".installment-tabs"),
    installationSection = document.querySelector(".installment-section");

tabsContainerInstallation.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item-installment") && !e.target.classList.contains("active")) {
        tabsContainerInstallation.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        installationSection.querySelector(".tab-content.active").classList.remove("active");
        installationSection.querySelector(target).classList.add("active");
    }
});
/* -------------- Feature Tabs ----------------------- */
const tabsContainerFeatures = document.querySelector(".feature-tabs"),
    featureSection = document.querySelector(".feature-section");

tabsContainerFeatures.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item-feature") && !e.target.classList.contains("active")) {
        tabsContainerFeatures.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        featureSection.querySelector(".tab-content.active").classList.remove("active");
        featureSection.querySelector(target).classList.add("active");
    }
});
/* -------------- Installation Tabs ----------------------- */
const tabsContainerModify = document.querySelector(".modify-tabs"),
    modifySection = document.querySelector(".modify-section");

tabsContainerModify.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item-modify") && !e.target.classList.contains("active")) {
        tabsContainerModify.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        modifySection.querySelector(".tab-content.active").classList.remove("active");
        modifySection.querySelector(target).classList.add("active");
    }
});

/* -------------- FAQ Collapsibles ----------------------- */

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activeFAQ");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* -------------- Portfolio Item Popup ----------------------- */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

//hide popup on clicking outside
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
});


function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src =
        portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
        portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
        portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn--mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll(".main-nav__link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
///////////////////////////////////////////////////////////
// Meteor shower
for (let i = 1; i <= 15; i++) {
  let meteor = document.createElement("span");
  meteor.classList = "meteor";
  document.querySelector(".meteor-shower").append(meteor);
}
///////////////////////////////////////////////////////////
// Dimming other vids when one is hovered over
const allVids = document.querySelectorAll(".section__work-image");

function dimVidOnHover(vidNr, event) {
  if (event === "mouseover") {
    let i = 0;
    for (const iterator of allVids) {
      if (i === vidNr) {
        i++;
        continue;
      }
      i++;
      iterator.classList.add("dimmed");
    }
  } else if (event === "mouseout") {
    let i = 0;
    for (const iterator of allVids) {
      if (i === vidNr) {
        i++;
        continue;
      }
      i++;
      iterator.classList.remove("dimmed");
    }
  }
}
const vidNr1OnHover = allVids[0].addEventListener("mouseover", function () {
  dimVidOnHover(0, "mouseover");
});
const vidNr1OnHoverOut = allVids[0].addEventListener("mouseout", function () {
  dimVidOnHover(0, "mouseout");
});
const vidNr2OnHover = allVids[1].addEventListener("mouseover", function () {
  dimVidOnHover(1, "mouseover");
});
const vidNr2OnHoverOut = allVids[1].addEventListener("mouseout", function () {
  dimVidOnHover(1, "mouseout");
});
const vidNr3OnHover = allVids[2].addEventListener("mouseover", function () {
  dimVidOnHover(2, "mouseover");
});
const vidNr3OnHoverOut = allVids[2].addEventListener("mouseout", function () {
  dimVidOnHover(2, "mouseout");
});
const vidNr4OnHover = allVids[3].addEventListener("mouseover", function () {
  dimVidOnHover(3, "mouseover");
});
const vidNr4OnHoverOut = allVids[3].addEventListener("mouseout", function () {
  dimVidOnHover(3, "mouseout");
});
const vidNr5OnHover = allVids[4].addEventListener("mouseover", function () {
  dimVidOnHover(4, "mouseover");
});
const vidNr5OnHoverOut = allVids[4].addEventListener("mouseout", function () {
  dimVidOnHover(4, "mouseout");
});
const vidNr6OnHover = allVids[5].addEventListener("mouseover", function () {
  dimVidOnHover(5, "mouseover");
});
const vidNr6OnHoverOut = allVids[5].addEventListener("mouseout", function () {
  dimVidOnHover(5, "mouseout");
});
///////////////////////////////////////////////////////////
// Making work section appear on scroll
function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}
function addObserver(el, options) {
  // We are creating a new IntersectionObserver instance
  let observer = new IntersectionObserver((entries, observer) => {
    // This takes a callback function that receives two arguments: the elements list and the observer instance.
    entries.forEach((entry) => {
      // `entry.isIntersecting` will be true if the element is visible
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // We are removing the observer from the element after adding the active class
        observer.unobserve(entry.target);
      }
    });
  }, options);
  // Adding the observer to the element
  observer.observe(el);
}
scrollTrigger(".section__work-image", {
  rootMargin: "-12.5%",
});

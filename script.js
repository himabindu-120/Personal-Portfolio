
const scroll =
  window.requestAnimationFrame ||
  
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
const elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}


loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}


const headerBtn = document.getElementById("header-btn");
const socialContact = document.getElementById("social");
/*const contactForm = document.getElementById("contact");*/

function scrollToSocial() {
  socialContact.scrollIntoView({ behavior: "smooth" }); 
}
  

headerBtn.addEventListener("click", scrollToSocial);
/*socialContact.addEventListener("click", scrollToForm);


const contactFormNoBots = document.getElementById("contact-form-no-bots");
contactFormNoBots.parentNode.removeChild(contactFormNoBots);
*/

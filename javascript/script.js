// Set all my selectors to variables
const body = document.body;
const burgerToggle = document.querySelector("#burger-toggle");
const navigation = document.querySelector("#nav-container");
const breakPoint = 660;

let isBurgerToggled = false; // Keeps track of wether the burger menu is open or not
let windowWidth = window.innerWidth;

// This function handles the overflow of the body.
// When the navigation is open on mobile devices, the overflow on the body becomes hidden, not allowing the user to scroll up or down.
// It is called both when the user resizes the screen and when he opens or closes the burger menu.
const handleOverflow = () => {
  windowWidth = window.innerWidth; // Update variable that keeps track of windows width on resize

  if (windowWidth < breakPoint) {
    isBurgerToggled == true ? body.classList.add("hideOverflow") : body.classList.remove("hideOverflow");
  } else {
    body.classList.remove("hideOverflow");
  }
}


window.addEventListener("resize", handleOverflow); // Calls overflow handler function on resize

burgerToggle.addEventListener('click', function(e) {
  isBurgerToggled = !isBurgerToggled; // Swaps the value of the boolean

  if (isBurgerToggled) {
    navigation.classList.add("visible");
    burgerToggle.classList.add("open");
  } else {
    navigation.classList.remove("visible");
    burgerToggle.classList.remove("open");
  }
  handleOverflow(); 
});
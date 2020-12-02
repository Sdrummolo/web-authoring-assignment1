const burgerToggle = document.querySelector("#burger-toggle");
const navigation = document.querySelector("#nav-container");

let isBurgerToggled = false;

burgerToggle.addEventListener('click', function(e) {
  isBurgerToggled = !isBurgerToggled;

  if (isBurgerToggled) {
    navigation.classList.add("visible");
    burgerToggle.classList.add("open");
    document.body.classList.add("hideOverflow");
  } else {
    navigation.classList.remove("visible");
    burgerToggle.classList.remove("open");
    document.body.classList.remove("hideOverflow");
  }
});
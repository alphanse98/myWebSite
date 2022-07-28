let navBtn = document.querySelector(".navBtn"),
  navBar = document.querySelector(".nav-bar"),
  overLay = document.querySelector(".overLay"),
  navItems = document.querySelectorAll(".navItems");

  let action = () => {
    navBar.classList.toggle("hidden");
    overLay.classList.toggle("hidden");
  };

navBtn.addEventListener("click", function () {
  action();
});
overLay.addEventListener("click", function () {
  action();
});

navItems.forEach((navItemsArr) => {
  console.log(navItemsArr);
  navItemsArr.addEventListener("click", () => {
    action();
  });
});

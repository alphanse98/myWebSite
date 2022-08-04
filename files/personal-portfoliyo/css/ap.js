let navBtn = document.querySelector(".navBtn"),
  navBar = document.querySelector(".nav-bar"),
  overLay = document.querySelector(".overLay"),
  navItems = document.querySelectorAll(".navItems"),
  line1 = document.querySelector(".line1"),
  line2 = document.querySelector(".line2"),
  line3 = document.querySelector(".line3");

let action = () => {
  navBar.classList.toggle("display");
  overLay.classList.toggle("hidden");
  // navBar.style.transform = "translate(0%)"
  line1.classList.toggle("toggle1");
  line2.classList.toggle("toggle2");
  line3.classList.toggle("toggle3");
};

navBtn.addEventListener("click", function () {
  action();
});
overLay.addEventListener("click", function () {
  action();
});

navItems.forEach((navItemsArr) => {
  navItemsArr.addEventListener("click", () => {
    action();
  });
});

let afun = (b) => {
  console.log("a fuction");
  console.log(b());
};



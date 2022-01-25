const mesBtn = document.querySelector(".contact__page");
const tabFace = document.querySelector(".contact__page-with-face");

const hideBtn = document.querySelector(".contact__page-with-face-hide");
const divParagrap = document.querySelector(".product__story");
const closeBtn = document.querySelector(
  ".header__navbar-list-mobile .header__navbar-item:nth-child(1)"
);
const subMenu4 = document.querySelector(
  ".header__navbar-list-mobile .header__navbar-item:nth-child(5)"
);
const navMobile = document.querySelector(".header__navbar-list-mobile");
const overlay = document.querySelector(
  ".header__navbar-list-mobile .header__navbar-overlay"
)
var isActive = false;

var height = $(".header").height();
$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $(".header__navbar").addClass("fixed");
  } else {
    $(".header__navbar").removeClass("fixed");
  }
});

hideBtn.onclick = function (e) {
   isActive == false
    tabFace.style.transform = "translateY(150%)";
    tabFace.style.opacity = 0;
};
displayContact(mesBtn, tabFace, isActive);
// displayNavHeader(closeBtn, navMobile, isActive);
function displayContact(contructor1, contructor2, check) {
  contructor1.onclick = function (e) {
    if (check == false) {
      contructor2.style.transform = "translateY(0)";
      contructor2.style.opacity = 1;
      check = true;
    } else {
      check = false;
      contructor2.style.transform = "translateY(150%)";
      contructor2.style.opacity = 0;
    }
  };
}
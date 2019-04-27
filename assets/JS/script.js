
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("shrink");
    document.getElementById("date").classList.remove("d-lg-block");
    document.getElementById("small_logo").classList.remove("d-lg-none");
    document.getElementById("main-logo").classList.remove("d-lg-block");
    document.getElementById("burger-menu").classList.remove("d-lg-none");
    document.getElementById("header-right").classList.remove("mt-lg-5");
  } else {
    document.getElementById("header").classList.remove("shrink");
    document.getElementById("date").classList.add("d-lg-block");
    document.getElementById("small_logo").classList.add("d-lg-none");
    document.getElementById("main-logo").classList.add("d-lg-block");
    document.getElementById("burger-menu").classList.add("d-lg-none");
    document.getElementById("header-right").classList.add("mt-lg-5");
  }
}
window.onscroll = function() {scrollFunction()};

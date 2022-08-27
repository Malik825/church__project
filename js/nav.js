let header = document.querySelector("header");
function createNav() {
  header.innerHTML = `
      <div class="container">
            <div class="row jbtn align">
                <div class="logo">
                    <a href="index.html"><span>C</span>hurch</a>
                </div>
                <ul class="row nav_menu">
                   <div class="closeNav"><i class="fa fa-times"></i></div>
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="articles.html">Articles</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="hamburger"><i class="fa fa-bars"></i></div>
            </div>
        </div>
        `;
}
createNav();

(() => {
  this.addEventListener("scroll", (e) => {
    let hero = document.querySelector(".home");
    const scrollHeight = window.scrollY;
    let HeroHeight = hero.getBoundingClientRect().height;
    if (scrollHeight > HeroHeight) {
      document.querySelector("header").classList.add("active");
    } else {
      document.querySelector("header").classList.remove("active");
    }
  });
})();

(() => {
  let openNav = (open) => {
    document.querySelector(".nav_menu").classList.add("nav_active");
    document.querySelector("body").classList.add("active");
  };
  let closeNav = (close) => {
    document.querySelector(".nav_menu").classList.remove("nav_active");
    document.querySelector("body").classList.remove("active");
  };

  document.querySelector(".hamburger").addEventListener("click", openNav);
  document.querySelector(".closeNav").addEventListener("click", closeNav);
})();

(() => {
  let allLinks = document.querySelectorAll("ul.nav_menu li a");
  allLinks.forEach((link) =>
    link.addEventListener("click", (clicked) => {
      clicked.stopPropagation();
      allLinks.forEach((remove) => {
        remove.classList.remove("active");
      });
      link.classList.add("active");
    })
  );
})();

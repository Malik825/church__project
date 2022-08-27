$(() => {
  $(window).on("load", function () {
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow(KirchieSpy) {
      $(".slide").removeClass("active").eq(slideIndex).addClass("active");
      if (slideIndex == slideLen - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      setTimeout(slideShow, 3500);
    }
    slideShow();
  });
});

(() => {
  let openDetails = document.querySelectorAll(".openDetails");
  let blogDetails = document.querySelectorAll(".blogDetails");
  let closeDetails = document.querySelectorAll(".closeBlog");
  let modal = (modalClick) => {
    blogDetails[modalClick].classList.add("active");
  };
  let modalClose = (modalClick) => {
    blogDetails[modalClick].classList.remove("active");
  };

  openDetails.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal(i);
    });
  });

  closeDetails.forEach((modalBtn, i) => {
    modalBtn.onclick = () => {
      modalClose(i);
    };
  });
})();
let container = document.querySelector(".formBox"),
  showHidePassword = document.querySelectorAll("#eye"),
  pwFields = document.querySelectorAll(".inputPassword"),
  signUp = document.querySelector(".signup-text"),
  login = document.querySelector(".login-text");

showHidePassword.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", (e) => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        showHidePassword.forEach((icon) => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        pwField.type = "password";
        showHidePassword.forEach((icon) => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});

signUp.addEventListener("click", (e) => {
  container.classList.add("active");
});
login.addEventListener("click", (e) => {
  container.classList.remove("active");
});

// (() => {
//   this.addEventListener("scroll", (e) => {
//     const scrollHeight = window.scrollY;

//     document
//       .querySelector("header")
//       .classList.toggle("active", scrollHeight > 650);
//   });
// })();

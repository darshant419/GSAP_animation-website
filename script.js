document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      // markers: true,
    },
  });

  tl.to(
    "#fanta",
    {
      top: "120%",
      left: "5%",
    },
    "orange"
  );

  tl.to(
    "#orangeSlice",
    {
      top: "160%",
      left: "23%",
    },
    "orange"
  );

  tl.to(
    "#orangeFull",
    {
      width: "15%",
      top: "170%",
      right: "10%",
    },
    "orange"
  );
  tl.to(
    "#leaf",
    {
      top: "105%",
      rotate: "300deg",
      left: "75%",
    },
    "orange"
  );

  tl.to(
    "#leaf2",
    {
      top: "105%",
      rotate: "173deg",
      left: "1%",
    },
    "orange"
  );

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "-20% 25%",
      end: "20% 50%",
      scrub: true,
      markers: true,
    },
  });

  tl2.to(
    ".lemon1",
    {
      rotate: "-20deg",
      left: "50%",
    },
    "ca"
  );
  tl2.to(
    "#sprite",
    {
      rotate: "360deg",
      left: "50%",
    },
    "ca"
  );

  tl2.to(
    ".lemon2",
    {
      rotate: "20deg",
      left: "50%",
    },
    "ca"
  );
  tl2.to(
    "#lipton",
    {
      rotate: "360deg",
      left: "50%",
    },
    "ca"
  );

  tl2.to(
    "#orangeSlice",
    {
      width: "18%",
      left: "42%",
      top: "198%",
    },
    "ca"
  );
  tl2.to(
    "#fanta",
    {
      left: "37%",
      top: "207%",
      width: "28%",
    },
    "ca"
  );

  const burger = document.querySelector(".burger");

  function navbarClick(e) {
    if (!e.target.classList.toggle("active")) {
      gsap.to(".line1", 0.5, { rotate: "45", y: 10, background: "black" });
      gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
      gsap.to(".nav_bar", 1, { clipPath: "circle(2000px at 100% -10%)" });
      document.body.classList.add("hide");
    } else {
      gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
      gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
      gsap.to(".nav_bar", 1, { clipPath: "circle(50px at 100% -10%)" });
      document.body.classList.remove("hide");
    }
  }

  burger.addEventListener("click", navbarClick);

  const menuItems = document.querySelectorAll("nav a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
          duration: 1500,
        });

        // Update URL without page reload
        history.pushState(null, null, targetId);
      }
    });
  });

  // Handle back/forward button navigation
  window.addEventListener("popstate", function () {
    const targetId = location.hash;
    const targetSection = document.querySelector(targetId);

    if (targetSection) {

      gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
      gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
      gsap.to(".nav_bar", 1, { clipPath: "circle(50px at 100% -10%)" });
      document.body.classList.remove("hide");
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
        duration: 1500,
      });
    }
  });
});

document.querySelector(".video-placeholder").addEventListener("click", function () {
    document.querySelector(".custom-alert").style.display = "block";
  });
  
  document.querySelector(".close-alert").addEventListener("click", function () {
    document.querySelector(".custom-alert").style.display = "none";
  });

//   GSAP 
document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animation for Curtain Opening
    gsap.to(".left-curtain", { duration: 3.5, x: "-100%", ease: "power3.out" });
    gsap.to(".right-curtain", { duration: 3.5, x: "100%", ease: "power3.out", onComplete: () => {
        document.querySelector(".curtain").style.display = "none";
    }});

    // Fade In and Scale Up Content
    gsap.to(".main", { duration: 1, opacity: 1, scale: 1, delay: 1 });

    // Play button alert
    document.querySelector(".play-btn").addEventListener("click", () => {
        document.querySelector(".custom-alert").style.display = "block";
    });

    // Close alert
    document.querySelector(".close-alert").addEventListener("click", () => {
        document.querySelector(".custom-alert").style.display = "none";
    });
});

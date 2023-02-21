const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((elm) => {
   elm.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdowns.forEach((x) => {
         if (x !== elm) {
            x.classList.remove("open");
         }
      });
      elm.classList.toggle("open");
   });
});

window.addEventListener("click", (e) => {
   document.querySelector(".open")?.classList.remove("open");
});

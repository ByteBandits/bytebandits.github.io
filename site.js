// mobile menu toggle
(() => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("navMobile");
  if (!burger || !nav) return;
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
})();

const nav1 = (() => {
  const toggleFloatToTop = document.getElementById("myfloat-totop");
  const toggleFloatContact = document.getElementById("myfloat-contact");
  const toggleFloat = document.getElementById("myfloat");

  toggleFloat.addEventListener("click", () => {
    toggleFloatToTop.classList.toggle("hidden");
    toggleFloatContact.classList.toggle("hidden");
  });

  toggleFloatToTop.addEventListener("click", () => {
    toggleFloatToTop.classList.toggle("hidden");
    toggleFloatContact.classList.toggle("hidden");
  });

  toggleFloatContact.addEventListener("click", () => {
    toggleFloatToTop.classList.toggle("hidden");
    toggleFloatContact.classList.toggle("hidden");
  });
})();

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

const nav3 = (() => {
  const items = document.querySelectorAll(".wrap");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const getSelector = item.childNodes[3];
      getSelector.classList.add("selected");
    });
    item.addEventListener("mouseleave", () => {
      const getSelector = item.childNodes[3];
      getSelector.classList.remove("selected");
    });
  });
})();

const nav4 = (() => {
  const toggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("slide");
    toggle.classList.toggle("expand");
  });
})();

const nav6 = (() => {
  const panels = document.querySelectorAll(".panel");

  const shrinkPanels = () => {
    panels.forEach((panel) => panel.classList.remove("open"));
  };

  const handleClick = (panel) => {
    panel.classList.toggle("open");
  };

  panels.forEach((panel) =>
    panel.addEventListener("click", () => {
      shrinkPanels();
      handleClick(panel);
    })
  );
})();

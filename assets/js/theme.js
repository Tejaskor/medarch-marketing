document.addEventListener("DOMContentLoaded", function () {
    var icon = document.getElementById("icon");

    icon.onclick = function () {
      if (document.body.getAttribute("data-theme") === "dark") {
        document.body.setAttribute("data-theme", "light");
        icon.src = icon.getAttribute("src-dark");
      } else {
        document.body.setAttribute("data-theme", "dark");
        icon.src = icon.getAttribute("src-light");
      }
    }
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    var iconToggle = document.getElementById("icon");
    var brandIcons = document.querySelectorAll(".brand-icon");
  
    iconToggle.onclick = function() {
      // Toggle theme
      if (document.body.getAttribute("data-theme") === "dark") {
        document.body.setAttribute("data-theme", "light");
        iconToggle.src = iconToggle.getAttribute("src-dark");
        brandIcons.forEach(img => img.src = img.getAttribute("src-light"));
      } else {
        document.body.setAttribute("data-theme", "dark");
        iconToggle.src = iconToggle.getAttribute("src-light");
        brandIcons.forEach(img => img.src = img.getAttribute("src-dark"));
      }
    }
  });

  
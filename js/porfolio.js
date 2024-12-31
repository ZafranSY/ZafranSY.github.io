document.addEventListener("DOMContentLoaded", () => {
  // Select all nav links with data-value attribute
  const navLinks = document.querySelectorAll(".nav-link[data-value]");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      const value = link.getAttribute("data-value"); // Get the value from data-value attribute

      // Map the value to corresponding URLs
      const paths = {
        home: "../index.html",
        projects: "projects.html",
        experience: "experience.html",
        tools: "tools.html",
        thoughts: "thoughts.html",
      };

      // Redirect to the appropriate page
      if (paths[value]) {
        window.location.href = paths[value];
      }
    });
  });
});

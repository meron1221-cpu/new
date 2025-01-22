// Mobile Menu Toggle
const menuBar = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Smooth Scroll to Section
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Smooth scrolling
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Close mobile menu after clicking a link
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});

// Form Validation
const searchForm = document.querySelector(".search-box form");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission for demo purposes
  const vendorType = this.vendorType.value;
  const city = this.city.value;

  if (vendorType === "Select Vendor Type" || city === "City") {
    alert("Please select both vendor type and city.");
  } else {
    alert(`Searching for ${vendorType} in ${city}...`);
    // Here you can add the logic to perform the search or redirect to a results page
  }
});

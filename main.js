const list = document.querySelectorAll(".reg-category-link");
const registrationGroup = document.querySelector(".registration-group");

list.forEach(function (item) {
  item.addEventListener("click", function () {
    const clickedContent = item.textContent.trim();

    updateContent(clickedContent);
  });
});

function updateContent(category) {
  let content = "";
  switch (category) {
    case "Registration and KYC":
      content = `
        <h3 class="reg-title">${category}</h3>
        <p class="reg-description">
          To get started, Click on the "Sign Up" button to create your
          account. Provide essential information, including your name,
          email address, and a secure password. Rest assured that your
          data is kept confidential with top-notch security measures.
          Additionally, you will undergo a Know Your Customer (KYC)
          process to ensure compliance with regulatory requirements.
          KYC helps verify the identity of investors and prevents
          potential fraudulent activities.
        </p>
        <a href="/signuppage/signup.html" class="reg-btn">Sign Up Now</a>
      `;
      break;

    case "Explore Investment":
      content = `
        <h3 class="reg-title">${category}</h3>
        <p class="reg-description">
        Browse through a curated selection of tokenized real estate properties. Each property listing includes relevant details such as location, property type, investment cost, expected returns, and so on Our platform offers a diverse range of properties, from residential to commercial, ensuring there's something that aligns with your investment goals.
        </p>
        <a href="/signuppage/signup.html" class="reg-btn">Sign Up Now</a>
      `;
      break;

    case "Dig into Details":
      content = `
        <h3 class="reg-title">${category}</h3>
        <p class="reg-description">
        Click on properties of interest to access comprehensive details. Learn about the property's location, market value, potential returns, and more. Our detailed information empowers you to make informed investment decisions. Delve into our educational resources to understand how tokenization works. Grasp the concept of turning real estate assets into digital tokens, making fractional ownership and trading possible
        </p>
        <a href="/signuppage/signup.html" class="reg-btn">Sign Up Now</a>
      `;
      break;

    case "Purchase Tokens":
      content = `
        <h3 class="reg-title">${category}</h3>
        <p class="reg-description">
        Once you've found the perfect property, it's time to invest. Choose the number of tokens you wish to purchase based on your budget and the property's tokenization structure. With a few clicks, confirm your investment. Our secure payment gateway accepts various payment methods including cryptocurrencies and traditional fiat currencies, providing you with convenience and peace of mind.
        </p>
        <a href="/signuppage/signup.html" class="reg-btn">Sign Up Now</a>
      `;
      break;

    case "Review Legal Information":
      content = `
        <h3 class="reg-title">${category}</h3>
        <p class="reg-description">
        Before finalizing your investment, review the legal documentation associated with the property. This step ensures transparency and clarifies your rights and responsibilities as a token holder.
        </p>
        <a href="/signuppage/signup.html" class="reg-btn">Sign Up Now</a>
      `;
      break;

    case "Manage Your Portfolio":
      content = `
        <h3 class="reg-title">${category}</h3>
        <p class="reg-description">
        Access your personalized dashboard to monitor your investment portfolio. Track property performance, token value, and potential returns, all in one place.
        </p>
        <a href="/signuppage/signup.html" class="reg-btn">Sign Up Now</a>
      `;
      break;

    // Add cases for other categories as needed

    default:
      content = ""; // Set default content or handle unknown categories
  }

  // Update the content of the registration group section
  registrationGroup.innerHTML = `<aside>${content}</aside>`;
}

// ----------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   const slideImage = document.getElementById("slide-img");

//   setTimeout(function () {
//     slideImage.style.opacity = "1";
//     slideImage.style.transform = "translateX(0)";
//   }, 300);
// });

// slider
const testimonialSlider = document.querySelector("#testimonialSlider");
let currentIndex = 0;

function showSlide(index) {
  const slideWidth =
    testimonialSlider.querySelector(".testimonies").offsetWidth;
  testimonialSlider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonialSlider.children.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + testimonialSlider.children.length) %
    testimonialSlider.children.length;
  showSlide(currentIndex);
}

// Interval for auto-sliding (uncomment the line below if you want auto-sliding)
setInterval(nextSlide, 5000); // Adjust the time interval as needed

// Initial slide
showSlide(currentIndex);

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Toggle mobile navigation menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

const sendEmail = (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    isClient: document.getElementById("isClient").value,
    message: document.getElementById("message").value,
  };

  // Store in localStorage
  let formDataList = JSON.parse(localStorage.getItem("formDataList")) || [];
  formDataList.push(formData);
  localStorage.setItem("formDataList", JSON.stringify(formDataList));

  console.log("Saved form submissions:", formDataList);

  // Send via EmailJS
  emailjs
    .send("service_19rlxo4", "template_iwmyzcl", {
      from_name: formData.name,
      from_email: formData.email, // goes to Reply-To
      phone: formData.phone,
      is_client: formData.isClient,
      message: formData.message,
      to_email: "jayasuryajsp@gmail.com", // your fixed inbox
    })
    .then(
      () => {
        alert("✅ Message sent successfully!");
        document.getElementById("contactForm").reset();
      },
      (error) => {
        alert("❌ Error sending message. Try again.");
        console.error("Email failed:", error);
      }
    );

  return false;
};

const sendQuestionEmail = (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,   
    email: document.getElementById("email").value,
    message: document.getElementById("question").value, 
  };

  let formDataList = JSON.parse(localStorage.getItem("formDataList")) || [];
  formDataList.push(formData);
  localStorage.setItem("formDataList", JSON.stringify(formDataList));

  console.log("Saved form submissions:", formDataList);

  emailjs
    .send("service_19rlxo4", "template_iwmyzcl", {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "jayasuryajsp@gmail.com", 
    })
    .then(
      () => {
        alert("✅ Message sent successfully!");
        event.target.reset(); 
      },
      (error) => {
        alert("❌ Error sending message. Try again.");
        console.error("Email failed:", error);
      }
    );

  return false;
};

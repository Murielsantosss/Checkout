const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuLinks = document.querySelectorAll(".menu a");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs === "undefined") {
    console.error("EmailJS não foi carregado.");
    return;
  }

  emailjs.init({
    publicKey: "svmK0bwlXMrUK8kcb",
  });

  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (!form || !formStatus) {
    console.error("Formulário ou status não encontrado no HTML.");
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    formStatus.textContent = "Enviando mensagem...";
    formStatus.style.color = "#38bdf8";

    try {
      await emailjs.sendForm("service_swrl9yb", "template_pg1v3yw", form);

      formStatus.textContent = "Mensagem enviada com sucesso!";
      formStatus.style.color = "#22c55e";
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
      formStatus.textContent = "Erro ao enviar a mensagem.";
      formStatus.style.color = "#ef4444";
    }
  });
});

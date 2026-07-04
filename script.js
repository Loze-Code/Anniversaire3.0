/* =========================================================
   INVITATION JORIS 30 ANS - SCRIPT V2
========================================================= */

// =========================
// ENVELOPPE
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");

    if (intro) {

        intro.addEventListener("click", () => {

            const flap = document.querySelector(".flap");
            const letter = document.querySelector(".letter");
            const envelope = document.querySelector(".envelope");

            intro.style.pointerEvents = "none";

            if (flap) {
                flap.style.transition = "0.8s ease";
                flap.style.transform = "rotateX(180deg)";
            }

            if (letter) {

                setTimeout(() => {

                    letter.style.transition = "0.8s ease";
                    letter.style.transform = "translateY(-120px)";
                    letter.style.opacity = "0";

                }, 300);

            }

            if (envelope) {

                setTimeout(() => {

                    envelope.style.transition = "0.8s ease";
                    envelope.style.opacity = "0";
                    envelope.style.transform = "scale(1.2)";

                }, 900);

            }

            setTimeout(() => {

                intro.style.transition = "1s ease";
                intro.style.opacity = "0";

            }, 1400);

            setTimeout(() => {

                intro.remove();

            }, 2400);

        });

    }

    // =========================
    // COMPTE À REBOURS
    // =========================

    const countdown = document.getElementById("countdown");

    if (countdown) {

       const eventDate = new Date("2026-09-19T18:30:00").getTime();

        function updateCountdown() {

            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance <= 0) {

                countdown.innerHTML = "La fête a commencé ! 🎉";
                return;

            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));

            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) /
                (1000 * 60)
            );

            const seconds = Math.floor(
                (distance % (1000 * 60)) /
                1000
            );

            countdown.innerHTML =
                `${days} J • ${hours} H • ${minutes} M • ${seconds} S`;

        }

        updateCountdown();

        setInterval(updateCountdown, 1000);

    }

    // =========================
    // BOUTON HERO
    // =========================

    const discover = document.getElementById("discover");

    if (discover) {

        discover.addEventListener("click", () => {

            document.querySelector(".card-section").scrollIntoView({

                behavior: "smooth"

            });

        });

    
}
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz7M6TDE-sZUVJ-8KfPMf01kSz9Y_EJNwyuo7DyUvF6uPbXwANr8QkAA2r2fI6sKERyIQ/exec"
const form = document.getElementById("rsvpForm");
const confirmation = document.getElementById("confirmation");

if (form) {

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        nom: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        presence: form.querySelector("select").value
    };

    try {
        console.log("Envoi vers Google Sheets...");

  const formData = new FormData();

formData.append("nom", data.nom);
formData.append("email", data.email);
formData.append("presence", data.presence);

const res = await fetch(SCRIPT_URL, {
    method: "POST",
    body: formData
});

const text = await res.text();

if (text === "OK") {
    form.style.display = "none";
    confirmation.style.display = "block";
} else {
    alert("Erreur serveur : " + text);
}

    } catch (err) {
        console.error(err);
        alert("Erreur lors de l'envoi");
    }
});

}
    // =========================
    // PARTICULES
    // =========================

    const particlesContainer = document.getElementById("particles");

    if (particlesContainer) {

        function createParticle() {

            const particle = document.createElement("span");

            const size = Math.random() * 4 + 2;

            particle.style.position = "absolute";
            particle.style.width = size + "px";
            particle.style.height = size + "px";
            particle.style.background = "#C6A15B";
            particle.style.borderRadius = "50%";

            particle.style.left = Math.random() * 100 + "vw";
            particle.style.top = "100vh";

            particle.style.opacity = Math.random();

            particlesContainer.appendChild(particle);

            const duration = Math.random() * 4000 + 5000;
            const drift = (Math.random() - 0.5) * 200;

            particle.animate(
                [
                    {
                        transform: "translate(0,0)",
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        offset: 0.2
                    },
                    {
                        transform: `translate(${drift}px,-120vh)`,
                        opacity: 0
                    }
                ],
                {
                    duration,
                    easing: "linear"
                }
            );

            setTimeout(() => {

                particle.remove();

            }, duration);

        }

        setInterval(createParticle, 250);

    }

});
document.addEventListener("DOMContentLoaded", () => {

  const text = "Le Capitaine Joris serait honoré de vous compter parmi son équipage pour célébrer cette nouvelle étape de vie.";

  const target = document.getElementById("invitationText");

  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 35); // vitesse
    }
  }

  typeWriter();
});
// ===========================
// Animation des sections
// ===========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show-section");
        }

    });

},{
    threshold:0.2
});

sections.forEach(section =>{

    section.classList.add("hidden-section");

    observer.observe(section);

});

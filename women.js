// Countdown Timer Logic
const countdown = () => {
    const targetDate = new Date('March 8, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = "<p>Happy Women's Day!</p>";
    }
};

setInterval(countdown, 1000);

document.getElementById('register-link')?.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    // Your logic to show the form (e.g., open a modal or load the form dynamically)
    console.log('Register link clicked');
    // Example: Show a modal with the form
    // document.getElementById('registration-modal').style.display = 'block';
});

function showPopup() {
    document.getElementById("prizePopup").style.display = "block";
    createConfetti();
}

function closePopup() {
    document.getElementById("prizePopup").style.display = "none";
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

window.onload = showPopup;

function createConfetti() {
    const confettiCount = 100; // Number of confetti pieces
    const duration = 3000; // Duration of the animation in milliseconds

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration
        document.body.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}

// Trigger the confetti effect when the page loads or on a specific event
window.addEventListener('load', createConfetti);
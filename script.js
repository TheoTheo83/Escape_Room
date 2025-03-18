let countdown;
let timeLeft;

function setTimer(minutes, seconds) {
    timeLeft = (parseInt(minutes) * 60) + parseInt(seconds);
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").innerText =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (countdown) return; // Empêche de relancer plusieurs fois
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(countdown);
            countdown = null;
            playAlarm(); // Joue une sonnerie à la fin
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    countdown = null;
    timeLeft = 60 * 60; // Réinitialise à 5 minutes par défaut
    updateTimerDisplay();
}

function playAlarm() {
    const alarm = new Audio('alarm.mp3'); // Assurez-vous d'ajouter un fichier 'alarm.mp3' dans le même dossier
    alarm.play();
}
function checkUserCode() {
    const userInput = document.getElementById("codeInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (userInput === correctCode) {
        alert("Code correct. Accès autorisé.");
        errorMessage.style.display = "none"; // Cache le message d'erreur
    } else {
        errorMessage.style.display = "block"; // Affiche le message d'erreur
    }
}
 
// Initialisation de l'affichage
updateTimerDisplay();
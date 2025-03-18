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
const correctCode = "1234"; // Code secret

function checkSafeCode() {
    const userCode = document.getElementById("codeInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (userCode === correctCode) {
        alert("✅ Code correct ! Le coffre est ouvert !");
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }
}

 
// Initialisation de l'affichage
updateTimerDisplay();
class AlerteVisuel {
    static afficherMessage(message) {
        const alertBox = document.createElement("div");
        alertBox.innerText = message;
        alertBox.style.position = "fixed";
        alertBox.style.top = "50%";
        alertBox.style.left = "50%";
        alertBox.style.transform = "translate(-50%, -50%)";
        alertBox.style.background = "red";
        alertBox.style.color = "white";
        alertBox.style.padding = "20px";
        alertBox.style.fontSize = "24px";
        alertBox.style.fontWeight = "bold";
        alertBox.style.boxShadow = "0px 0px 10px black";
        document.body.appendChild(alertBox);
        
        setTimeout(() => {
            alertBox.remove(); // Supprime l'alerte après 5 secondes
        }, 5000);
    }
}

function playAlarm() {
    const alarm = new Audio('alarm.mp3');
    alarm.play();
    
    // Afficher l'alerte visuelle
    AlerteVisuel.afficherMessage("⏰ TEMPS ÉCOULÉ !");
}

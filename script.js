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
            triggerVisualAlert(); // Active l'effet visuel
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    countdown = null;
    timeLeft = 60 * 60; // Réinitialise à 5 minutes par défaut
    updateTimerDisplay();
    removeVisualAlert(); // Désactive l'effet visuel lors de la réinitialisation
}

function playAlarm() {
    const alarm = new Audio('alarm.mp3'); // Assurez-vous d'ajouter un fichier 'alarm.mp3' dans le même dossier
    alarm.play();
}

let savedCode = ''; // Variable pour sauvegarder le code

// Fonction pour enregistrer le code entré dans le premier champ
function saveSafeCode() {
    savedCode = document.getElementById('safe-code').value;
    console.log('Code enregistré:', savedCode); // Affichage dans la console pour debug
}

// Fonction pour comparer le code sauvegardé avec les entrées suivantes
function checkSafeCode() {
    // Récupérer les valeurs des entrées du deuxième champ
    let code1 = document.getElementById('code1').value;
    let code2 = document.getElementById('code2').value;
    let code3 = document.getElementById('code3').value;
    let code4 = document.getElementById('code4').value;

    // Créer une chaîne à partir des valeurs des entrées
    let enteredCode = code1 + code2 + code3 + code4;

    // Comparer les deux codes
    if (enteredCode === savedCode) {
        document.getElementById('safe-message').innerText = 'Code correct, coffre ouvert !';
        document.getElementById('errorMessage').style.display = 'none'; // Cacher le message d'erreur
        AlerteVisuel.afficherMessage("Félicitations ! Vous avez trouver la bonne combinaison !")
    } else {
        document.getElementById('errorMessage').style.display = 'block'; // Afficher le message d'erreur
        document.getElementById('safe-message').innerText = ''; // Réinitialiser le message de succès
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
        alertBox.style.background = "green";
        alertBox.style.color = "white";
        alertBox.style.padding = "20px";
        alertBox.style.fontSize = "24px";
        alertBox.style.fontWeight = "bold";
        alertBox.style.boxShadow = "0px 0px 10px black";
        alertBox.style.zIndex = "1000"; // Assure qu'il apparaît au-dessus des autres éléments
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
    AlerteVisuel.afficherMessage("⏰ TEMPS ÉCOULÉ ! ⏰");
}

function triggerVisualAlert() {
    document.body.classList.add("alert-effect");
}

function removeVisualAlert() {
    document.body.classList.remove("alert-effect");
}
import time
import os
import sys

def clear_console():
    """Efface l'affichage de la console pour un affichage propre du timer."""
    os.system('cls' if os.name == 'nt' else 'clear')

def countdown(minutes):
    """Compte à rebours en minutes et secondes avec affichage en temps réel."""
    total_seconds = minutes * 60
    
    try:
        while total_seconds:
            mins, secs = divmod(total_seconds, 60)
            timer_display = f"{mins:02}:{secs:02}"
            clear_console()
            print(f"⏳ Temps restant : {timer_display}")
            time.sleep(1)
            total_seconds -= 1
        
        clear_console()
        print("⏰⏰⏰ TEMPS ÉCOULÉ ! ⏰⏰⏰")
        
        # Jouer un son d'alerte si possible (Windows et Linux compatibles)
        try:
            if sys.platform == "win32":
                import winsound
                winsound.Beep(1000, 1000)  # Fréquence 1000Hz, durée 1s
            else:
                os.system('echo -e "\a"')  # Génère un bip sur Mac/Linux
        except Exception as e:
            print("Alerte sonore non supportée sur ce système.")
    
    except KeyboardInterrupt:
        clear_console()
        print("⏸️ Chrono interrompu !")

# Exemple d'utilisation
if __name__ == "__main__":
    # Remplace l'input interactif par une valeur par défaut (5 min)
    minutes = 1  # Modifier cette valeur si besoin
    countdown(minutes)
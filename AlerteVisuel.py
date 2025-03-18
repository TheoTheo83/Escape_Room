import tkinter as tk

class AlerteVisuel:
    def __init__(self, parent):
        self.parent = parent
        self.alert_window = tk.Toplevel(self.parent)  # Créer une fenêtre secondaire
        self.alert_window.title("Alerte !")
        self.alert_window.geometry("300x150")
        self.alert_window.configure(bg="black")
        
        # Message de l'alerte
        self.alert_label = tk.Label(self.alert_window, text="Temps écoulé !", font=("Arial", 20, "bold"), fg="white", bg="black")
        self.alert_label.pack(pady=50)

    def show(self):
        """Démarre le clignotement de l'alerte."""
        self.start_clignotement()

    def start_clignotement(self):
        """Démarre l'effet de clignotement du label."""
        current_color = self.alert_label.cget("foreground")
        new_color = "red" if current_color == "white" else "white"
        self.alert_label.config(foreground=new_color)

        # Replanifie le clignotement après 500ms (0.5 seconde)
        self.alert_window.after(500, self.start_clignotement)

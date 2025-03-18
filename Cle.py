class Cle:
    def __init__(self, detail):
        # Vérification que le détail est bien un chiffre entre 0 et 9
        if 0 <= detail <= 9:
            self.detail = detail
        else:
            raise ValueError("Le détail doit être un chiffre entre 0 et 9.")
    
    def __str__(self):
        return f"Clé avec détail: {self.detail}"

# Exemple d'utilisation
#try:
   # cle1 = Cle(5)
    #print(cle1)  # Affichera : Clé avec détail: 5
    
   # cle2 = Cle(10)  # Cela générera une exception
#except ValueError as e:
   # print(e)

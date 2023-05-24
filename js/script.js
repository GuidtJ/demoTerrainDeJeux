// Récupérer tous les boutons de l'accordéon "Puissance 4"
var puissance4Buttons = document.querySelectorAll("#accordionExample2 button.accordion-button");

// Ajouter un gestionnaire d'événement pour chaque bouton de l'accordéon "Puissance 4"
puissance4Buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Fermer tous les boutons de l'accordéon "Chamboule-tout"
    var chambouleToutButtons = document.querySelectorAll("#accordionExample button.accordion-button");
    chambouleToutButtons.forEach(function(chambouleToutButton) {
      // Vérifier si le bouton est déjà ouvert avant de le fermer
      if (chambouleToutButton.getAttribute("aria-expanded") === "true") {
        chambouleToutButton.click();
      }
    });
  });
});
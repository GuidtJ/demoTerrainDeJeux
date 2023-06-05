const text = 'Louer pour créer votre espace de jeux';

// Cette fonction convertit une chaîne de caractères en tableau
const createLetterArray = (string) => {
  return string.split('');
}

// Cette fonction crée des couches de lettres enveloppées dans des balises span
const createLetterLayers = (array) => {
  return array.map((letter) => {
    let layer = '';
    // Spécifiez le nombre de couches par lettre
    for (let i = 1; i <= 2; i++) {
      // Si la lettre est un espace
      if (letter == ' ') {
        layer += '<span class="space"></span>';
      } else {
        layer += '<span class="letter-' + i + '">' + letter + '</span>';
      }
    }
    return layer;
  });
}

// Cette fonction enveloppe chaque lettre dans un conteneur parent
const createLetterContainers = (array) => {
  return array.map((item) => {
    let container = '';
    container += '<div class="wrapper">' + item + '</div>';
    return container;
  });
}

// Utilisez une promesse pour d'abord afficher les couches de texte dans le DOM
const outputLayers = new Promise(function (resolve, reject) {
  document.getElementById('text').innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text))).join('');
  resolve();
});

// Ensuite, ajustez la largeur et la hauteur de chaque lettre
const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
outputLayers.then(() => {
  return spans.map((span) => {
    setTimeout(() => {
      span.parentElement.style.width = span.offsetWidth + 'px';
      span.parentElement.style.height = span.offsetHeight + 'px';
    }, 250);
  });
}).then(() => {
  // Ensuite, faites glisser les lettres une par une dans la vue
  let time = 250;
  return spans.map((span) => {
    time += 15;
    setTimeout(() => {
      span.parentElement.style.top = '0px';
    }, time);
  });
});

// Dark-Mode------------------------------------------

// Fonction pour basculer entre le mode clair et le mode sombre
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Écouteur d'événement pour le bouton de basculement du mode
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', toggleDarkMode);

// Pagination----------------------------------------------------------------------------

// Récupérer les éléments de pagination
// const paginationItems = document.querySelectorAll('.pagination .page-item');

// // Ajouter un gestionnaire d'événement au clic sur les liens de pagination
// paginationItems.forEach(item => {
//   item.addEventListener('click', (event) => {
//     // Empêcher le comportement par défaut du lien
//     event.preventDefault();

//     // Vérifier si le lien cliqué est actif
//     if (!item.classList.contains('active')) {
//       // Supprimer la classe "active" de tous les liens de pagination
//       paginationItems.forEach(item => item.classList.remove('active'));

//       // Ajouter la classe "active" au lien cliqué
//       item.classList.add('active');

//       // Récupérer l'index du lien cliqué
//       const clickedIndex = Array.from(paginationItems).indexOf(item);

//       // Parcourir tous les liens de pagination
//       paginationItems.forEach((item, index) => {
//         // Vérifier si l'index du lien est inférieur à l'index du lien cliqué
//         if (index < clickedIndex) {
//           // Ajouter la classe "disabled" aux liens précédents
//           item.classList.add('disabled');
//         } else {
//           // Supprimer la classe "disabled" des liens suivants
//           item.classList.remove('disabled');
//         }
//       });
//     }
//   });
// });

function openModal(image) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImage.src = image.src;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}



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
    time += 75;
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


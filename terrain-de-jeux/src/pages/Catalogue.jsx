import React from 'react';
import { Link } from 'react-router-dom';

function Catalogue() {
  const jeux = [
    {
      nom: "Chamboule-tout",
      prix: "10€",
      image: "/img/ChambouleTout/1.JPG",
      lien: "/jeux/chamboule-tout"
    },
    {
      nom: "Puissance 4",
      prix: "20€",
      image: "/img/Puissance 4/1.JPG",
      lien: "/jeux/puissance4"
    },
    // {
    //   nom: "Lancer d'anneaux",
    //   prix: "8€",
    //   image: "/img/Lancer d'anneaux/1.JPG",
    //   lien: "../jeux/lancerAnneaux.html"
    // },
    // {
    //   nom: "Pêche aux canards",
    //   prix: "20€",
    //   image: "/img/Pêche aux canards/1.JPG",
    //   lien: "../jeux/pêcheCannard.html"
    // },
    // {
    //   nom: "Morpion",
    //   prix: "10€",
    //   image: "/img/Morpion/2.JPG",
    //   lien: "../jeux/morpion.html"
    // },
    // {
    //   nom: "Mikado géant",
    //   prix: "10€",
    //   image: "/img/Mikado géant/1.JPG",
    //   lien: "../jeux/mikado.html"
    // },
    // {
    //   nom: "Fer à cheval",
    //   prix: "8€",
    //   image: "/img/Fer à cheval/1.JPG",
    //   lien: "../jeux/ferCheval.html"
    // },
    // {
    //   nom: "Cible à frisbee",
    //   prix: "12€",
    //   image: "/img/Cible à frisbee/1.JPG",
    //   lien: "../jeux/frisbee.html"
    // },
    // {
    //   nom: "Cornhole",
    //   prix: "8€",
    //   image: "/img/Cornhole/1.JPG",
    //   lien: "../jeux/cornhole.html"
    // },
    // {
    //   nom: "Mölkky",
    //   prix: "12€",
    //   image: "/img/Molkky/2.JPG",
    //   lien: "../jeux/molkky.html"
    // },
    // {
    //   nom: "Beer pong géant",
    //   prix: "12€",
    //   image: "/img/Beer pong/1.JPG",
    //   lien: "../jeux/beerPong.html"
    // }
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-3 g-4 mt-4 ms-3 me-3 d-flex justify-content-center">
        {jeux.map((jeu, index) => (
          <div className="col" key={index}>
            <div className="card">
              <h3 className="card-header text-center" id="blue">{jeu.nom}</h3>
              <div id={`carte${index + 1}`}>
                <span onClick={(e) => { e.preventDefault(); openModal(jeu.image); }} style={{ cursor: 'pointer' }}>
                  <img src={jeu.image} className="img-fluid" alt={jeu.nom} />
                </span>
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <h5>Prix de la location : {jeu.prix}</h5>
                <Link to={jeu.lien} className="btn card-link">
                  <button type="button" className="btn btn-outline-info" id="btn">+ Info</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div id="modal" style={{ display: 'none', position: 'fixed', zIndex: 1000, left: 0, top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' }}>
        <span onClick={closeModal} style={{ color: 'white', cursor: 'pointer', position: 'absolute', top: '20px', right: '30px', fontSize: '30px' }}>&times;</span>
        <img id="modal-image" style={{ maxWidth: '90%', maxHeight: '90%' }} alt="Modal" />
      </div>
    </div>
  );
}

function openModal(image) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");
  modal.style.display = "flex"; // Utilisez flex pour centrer l'image
  modalImage.src = image; // Utilisez l'URL de l'image
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

export default Catalogue;

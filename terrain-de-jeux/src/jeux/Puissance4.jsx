import React from 'react';

function Puissance4() {
  return (
    <div className="container mt-4">
      <h1 className="mt-5 text-center">PUISSANCE 4</h1>

      {/* Carousel */}
      <div className="d-flex justify-content-center flex-row">
        <div className="col-sm-4 me-5">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/Puissance 4/1.JPG" className="d-block w-100 carousel-img" alt="Puissance 4" />
              </div>
              <div className="carousel-item">
                <img src="/img/Puissance 4/2.JPG" className="d-block w-100 carousel-img" alt="Puissance 4" />
              </div>
              <div className="carousel-item">
                <img src="/img/Puissance 4/3.jpg" className="d-block w-100 carousel-img" alt="Puissance 4" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Détails du jeu */}
        <ul className="list-group mt-3">
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">Age</span>
            <p className="mt-2 text-center">À partir de 6 ans</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">Nombre de joueurs</span>
            <p className="mt-2 text-center">2 joueurs</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">But du jeu</span>
            <p className="mt-2 text-center">Aligner 4 palets de sa couleur</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">Dimensions</span>
            <p className="mt-2">79 cm de longueur - 72 cm de hauteur - 20.5 cm de profondeur</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">Inclus dans la location</span>
            <p className="mt-2 text-center">Plateau en bois, 42 palets et le panneau en bois</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">Prix de la location</span>
            <p className="mt-2 text-center">20€</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Puissance4;
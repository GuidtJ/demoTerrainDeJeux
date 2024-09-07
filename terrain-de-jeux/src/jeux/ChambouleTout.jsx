import React from 'react';

function ChambouleTout() {
  return (
    <div className="container mt-4">
      <h1 className="mt-5 text-center">CHAMBOULE-TOUT</h1>

      {/* Carousel */}
      <div className="d-flex justify-content-center flex-row">
        <div className="col-sm-4 me-5">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/ChambouleTout/1.JPG" className="d-block w-100 carousel-img" alt="Chamboule-tout" />
              </div>
              <div className="carousel-item">
                <img src="/img/ChambouleTout/2.JPG" className="d-block w-100 carousel-img" alt="Chamboule-tout" />
              </div>
              <div className="carousel-item">
                <img src="/img/ChambouleTout/3.JPG" className="d-block w-100 carousel-img" alt="Chamboule-tout" />
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
            <p className="mt-2 text-center">À partir de 3 ans</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">Nombre de joueurs</span>
            <p className="mt-2 text-center">2 joueurs et +</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">But du jeu</span>
            <p className="mt-2 text-center">Faire tomber le maximum de boîtes en 3 lancers</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">Dimensions</span>
            <p className="mt-2">Boîtes de conserve: 10cm x 6.6cm de diamètre <br />
              Sac de lancer: 11.5cm x 7.7cm x 2.5cm</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">Inclus dans la location</span>
            <p className="mt-2 text-center">10 boîtes, 3 sacs en tissu, <br />
              le tabouret et le panneau en bois</p>
          </li>
          <li className="list-group-item align-items-center">
            <span className="badge bg-info rounded-pill">Prix de la location</span>
            <p className="mt-2 text-center">10€</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChambouleTout;
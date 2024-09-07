import React from 'react';

function WhyRent() {
  return (
    <>
      <hr />
      <h2 className="titlePk container mt-5">Pourquoi louer des jeux pour un événement ?</h2>
      <section>
        <div className="equipe">
          <figure className="card carteEquipe">
            <div className="item1">
              <div className="card-img-overlay move1">
                <p className="card-text">Proposer à vos invités de passer un moment convivial.</p>
              </div>
            </div>
          </figure>
          <figure className="card carteEquipe">
            <div className="item1">
              <div className="card-img-overlay move1">
                <p className="card-text">Permettre les échanges et les rencontres entre vos convives</p>
              </div>
            </div>
          </figure>
          <figure className="card carteEquipe">
            <div className="item1">
              <div className="card-img-overlay move1">
                <p className="card-text">Faire des économies : <br />
                  La location est aujourd'hui une belle alternative économique à l'achat.</p>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}

export default WhyRent;
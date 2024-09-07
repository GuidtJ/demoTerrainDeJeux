import React from 'react';
import { Link } from 'react-router-dom';

function Concept() {
  return (
    <div className="alignement container mt-2">
      <div className="shadow p-4 mb-5 bg-body-tertiary rounded mt-4 d-flex">
        <img className="imgVecteur order" src="/img/heureux-removebg-preview.png" alt="" />
        <div>
          <h2 className="titleh2">Notre concept ?</h2>
          <p className="mt-4 fontText">Vous proposez des jeux à la location pour animer vos événements. Anniversaire, mariage, baptême, soirée d'entreprise...</p>
          <p className="fontText">Nous saurons vous conseiller pour trouver les jeux les plus adaptés à vos invités.</p>
          <p className="fontText">N'hésitez pas à nous <Link to="/contact" style={{textDecoration:'none'}}><span className="bold" style={{color: '#FFBE0B'}}>contacter</span></Link> pour obtenir plus de renseignements ou pour établir ensemble un devis.</p>
        </div>
      </div>
    </div>
  );
}

export default Concept;
import React from 'react';
import imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

function Pagina404() {
  return (
  <>
  <main className = "conteiner flex flex--centro flex--coluna">
   <img  className="doguito-imagem"src={imagem} alt="ilustração doguito" />
    <p>
        Ops! está página não existe
    </p>
  </main>
  
  </>
  );
}

export default Pagina404;
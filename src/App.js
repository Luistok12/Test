// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header.js';
import GeneralContent from './components/Content/GeneralContent';
import ChichaContent from './components/Content/ChichaContent';
import ChichoContent from './components/Content/ChichoContent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GaleriaImagenes from './components/GaleriaImagenes/GaleriaImagenes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='App'>
      <Router>
        {/* <div> No hace falta */}
          <Header /> {/* Utiliza tu componente Header */}

          <Switch>
            <Route exact path="/" component={GeneralContent} />
            <Route path="/chicha" component={ChichaContent} />
            <Route path="/chicho" component={ChichoContent} />
            <Route path="/vistaPrevia" component={GaleriaImagenes} />
          </Switch>
        {/* </div> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;

// Problemas con Switch de react router dom -> Switch solo funciona con la version inferior a 6.0, usar: npm install react-router-dom@5.2.0
// Si el problema sigue borrar la carpeta node modules y package-log.json y luego usar: npm install (Borrar node-sass : npm uninstall node-sass e instalar nuevamente con: npm install)
// Actualiza npm: Asegúrate de tener la última versión de npm instalada. Puedes actualizar npm con: npm install -g npm
// npm cache clean --force [ Para limpiar el cache del npm ]
// Importante la primera linea que tira ERROR! en el cmd si hay algun problema
// Es imprecindible que en un return de una funcion (incluido esta app) siempre este envuelto en un div, de lo contrario nos dara error!

// Componente para redes sociales -> Social media [Opcional]

// Componente!!!
// import React from 'react';
// import SocialMediaIcon from './SocialMediaIcon';
// import './SocialMediaSection.css'; // Importa tus estilos CSS

// const SocialMediaSection = () => {
//   const socialMediaData = [
//     {
//       url: 'URL-DE-RED-SOCIAL',
//       icon: 'icono-red-1.png',
//       alt: 'Red Social 1',
//     },
//     {
//       url: 'URL-DE-RED-SOCIAL',
//       icon: 'icono-red-2.png',
//       alt: 'Red Social 2',
//     },
//     Agrega más datos de redes sociales
//   ];

//   return (
//     <div className="social-media-section">
//       <ul className="social-media-list">
//         {socialMediaData.map((socialMedia, index) => (
//           <li key={index}>
//             <SocialMediaIcon {...socialMedia} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SocialMediaSection;


// "Invocacion"
// import React from 'react';
// import SocialMediaSection from './SocialMediaSection';

// const App = () => {
//   return (
//     <div>
//       <h1>Mi Aplicación</h1>
//       <SocialMediaSection />
//     </div>
//   );
// };

// export default App;


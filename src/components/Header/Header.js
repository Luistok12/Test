import React from 'react';
import '../Header/Header.scss';
import imgHeader from '../../assets/logo192.png';
import { NavLink } from 'react-router-dom';   // Importar para usar la herramienta react router
// import Authentication from '';

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <img src={imgHeader} alt='header-img' />
                <h1>Prueba React</h1>
                <div className="Header-container">
                    {/* <Authentication></Authentication>  */}
                    <nav className="Chichos-links">
                        <ul>
                            <li><NavLink exact to="/" activeClassName="active" className="NavLink">Todos</NavLink></li>
                            <li><NavLink to="/chicha" activeClassName="active" className="NavLink">Chicha</NavLink></li>
                            <li><NavLink to="/chicho" activeClassName="active" className="NavLink">Chicho</NavLink></li>
                            <li><NavLink to="/vistaPrevia" activeClassName="active" className="NavLink">Vista previa React</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
};

export default Header;
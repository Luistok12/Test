import React from 'react';
import '../Header/Header.scss';
import imgHeader from '../../assets/icons/icons8-felpa-24.png';
// import Authentication from '';

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <h1>Prueba React</h1>
                <img src={imgHeader} alt='header-image' />
                {/* <Authentication></Authentication>  */}
                <h2 class='chicha'>Luz</h2>
                <h2 class='chicho'>Demian</h2>
            </header>
        </div>
    );
};

export default Header;
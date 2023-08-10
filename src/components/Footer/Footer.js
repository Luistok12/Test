import React from 'react';
import '../Footer/Footer.scss';
import facebook from '../../assets/redes/facebook (1).png';
import twitter from '../../assets/redes/twitter (1).png';
import instagram from '../../assets/redes/instagram (1).png';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><a href='www.facebook.com'><img src={facebook} alt='facebook' rel='noopenner noreferrer' target='_blank' /></a></li>
                <li><a href='www.twitter.com'><img src={twitter} alt='twitter' rel='noopenner noreferrer' target='_blank' /></a></li>
                <li><a href='www.instagram.com' rel='noopenner noreferrer' target='_blank'><img src={instagram} alt='instagram' /></a></li>
            </ul>
            <p>Derechos reservados 2023</p>
        </footer>
    )
}

export default Footer;

// rel='noopener noreferrer' => Para prevenir problemas de seguridad.
// noopener => Evita posibles ataques de cross-window scripting (XSS) donde el contenido de la página abierta podría manipular la página original.
// noreferrer =>  previene que el navegador envíe información sobre la página de origen (referrer) a la página abierta en la nueva ventana. Ayuda a proteger la privacidad del usuario.
// target="_blank" se usa para abrir un enlace en una nueva ventana o pestaña.
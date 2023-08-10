import React from 'react';
// Instalar react image galery con : npm install react-image-gallery!!!
import Gallery from 'react-image-gallery';
// Importante importar este css!!!
import 'react-image-gallery/styles/css/image-gallery.css';
import img1 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.11 (1).jpeg';
import img2 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.11 (2).jpeg';
import img3 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.11.jpeg';
import img4 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.12.jpeg';

const GaleriaImagenes = () => {
    const images = [
        {
            original: img1,
            thumbnail: img1,
            // description: 'img-1',
        },
        {
            original: img2,
            thumbnail: img2,
            // description: 'img-2',
        },
        {
            original: img3,
            thumbnail: img3,
            // description: 'img-3',
        },
        {
            original: img4,
            thumbnail: img4,
            // description: 'img-4',
        }
    ]

    return (
        // <div className='Galeria'>
            // <h1>Galeria de imagenes:</h1>
            <Gallery items={images} />
        // </div>
    )
}

export default GaleriaImagenes;
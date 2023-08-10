import React from 'react';
import '../Content/ChichoContent.scss';
import imgChicho from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.12.jpeg';

const ChichoContent = () => {
    return(
        <div className='ChichoContent'>
            <img src={imgChicho} alt="chicho-img" />
        </div>
    )
}

export default ChichoContent;
import React from 'react';
import '../Content/ChichaContent.scss';
import img1 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.11 (1).jpeg';
import img2 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.11 (2).jpeg';
import img3 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.11.jpeg';

const ChichaContent = () => {
    return(
        <div className='ChichaContent'>
            <ul>
                <li><img src={img1} alt="img-1"/></li>
                <li><img src={img2} alt="img-2"/></li>
                <li><img src={img3} alt="img-3"/></li>
            </ul>
        </div>
    )
};

export default ChichaContent;
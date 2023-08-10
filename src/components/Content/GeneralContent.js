import React from 'react';
import '../Content/GeneralContent.scss';
import img1 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.11 (1).jpeg';
import img2 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.11 (2).jpeg';
import img3 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.11.jpeg';
import img4 from '../../assets/img/WhatsApp Image 2023-07-26 at 20.10.12.jpeg';

const GeneralContent = () => {
    return(
        <div className='GeneralContent'>
            <ul>
                <li><img src={img1} alt="img1" /></li>
                <li><img src={img2} alt="img2" /></li>
                <li><img src={img3} alt="img3" /></li>
                <li><img src={img4} alt="img4" /></li>
            </ul>
        </div>
    )
}

export default GeneralContent;
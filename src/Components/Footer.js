import React from 'react';

import logo2 from '../Images/Logo2.png';

function Footer() {
    return(
        <div className="footer-logo"
            style ={{ 
                display: "flex",
                flexFlow: "column-wrap",
                justifyContent: "center",
                alignItems: "center"
                }}>
            <img className="bottom-logo" src={logo2} alt="logo" />
        </div>
    )
}

export default Footer;
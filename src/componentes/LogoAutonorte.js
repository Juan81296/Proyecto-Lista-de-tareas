import React from 'react';
import freeCodeCampLogo from '../imagenes/FreecodecampLogo.png'

const FreecodecampLogo = () => {
    return(
        <div className='freecodecamp-logo-contenedor'>
            <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de FreeCodeCamp' />
            </div>

    );
}
export default FreecodecampLogo;


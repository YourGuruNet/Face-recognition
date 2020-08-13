//Izveidots elements, kas ietver sevī visu funkciju un stilu, ko velāk ievieto pamata aplikācijā

import React from 'react';  // Savieno ar react!
import Tilt from 'react-tilt'; // Ievietoju jaunu funkciju ko izmantoju zemāk, ta pirsmtam tika instalēta terminālī.
import './Logo.css'
import brain from './brain.png'

const Logo = ({onRouteChange}) => {     //Izveido funkciju, kas atgriež to zem dotā vārda Logo jeb izdomātā!
    return (           // Instalējām funkciju, ko ievietoju augšā un tālāk izmantoju šeit Tilt!
        <div>
            <Tilt className="Tilt" options={{ max : 100 }} style={{ height: 100, width: 100 }} >
            <div className="pointer Tilt-inner"> <img onClick={() => onRouteChange('Signin')} alt='brain' src={brain} /> </div>
            </Tilt>
        </div>
    );
}
export default Logo;  // exportē jeb palaiž!


// Kad funkcija izveidota to importe aplikācijā jeb app.js
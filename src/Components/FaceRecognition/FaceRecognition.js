//Izveidots elements, kas ietver sevī visu funkciju un stilu, ko velāk ievieto pamata aplikācijā

import React from 'react';  // Savieno ar react!
import './FaceRecognition.css'  // savieno ar css failu

const FaceRecognition = ({imageUrl, box}) => {     //({onInputChange}) izveidotās funkcijas jeb maiīgais, kas izveidots app.js! Ja tas parādās zemāk, tam japarādas arī šeit! Izveido funkciju, kas atgriež to zem dotā vārda ImageLinkForm jeb izdomātā!
    return (                      // Izveido vienkāŗšu css un html ievad modeli
        <div className='center ma'>
             <div className='absolute mt2'>
                 <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/> {/*Izveidojām imageUrl, tur tiks atpsoguļota bilde, kas ievietota */}
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
            </div>
        </div>
    );
    }
    // visi stili, izmantoti no tachyons
export default FaceRecognition;  // exportē jeb palaiž!


// Kad funkcija izveidota to importe aplikācijā jeb app.js
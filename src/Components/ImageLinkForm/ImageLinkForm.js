//Izveidots elements, kas ietver sevī visu funkciju un stilu, ko velāk ievieto pamata aplikācijā

import React from 'react';  // Savieno ar react!
import './ImageLinkForm.css'  // savieno ar css failu

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {     //({onInputChange}) izveidotās funkcijas jeb maiīgais, kas izveidots app.js! Ja tas parādās zemāk, tam japarādas arī šeit! Izveido funkciju, kas atgriež to zem dotā vārda ImageLinkForm jeb izdomātā!
    return (                      // Izveido vienkāŗšu css un html ievad modeli
        <div className='detect-box'>
           <p className='f3'>
            This Magic Brain detect faces in your pictures. Git it a try!  
            </p> 
            <div className='center'>
                <div className='form pa4 br3 shadow-5 center input-image-link'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/> {/* Ievieto lai console uztvertu mainīgo */}
                <button 
                className=' w-30 grow f4 link black bg-orange b--black'
                onClick={onButtonSubmit}
                >Detect</button>
                </div>
            </div>
        </div>
    );
    }
    // visi stili, izmantoti no tachyons
export default ImageLinkForm;  // exportē jeb palaiž!


// Kad funkcija izveidota to importe aplikācijā jeb app.js
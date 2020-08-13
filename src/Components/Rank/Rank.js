//Izveidots elements, kas ietver sevī visu funkciju un stilu, ko velāk ievieto pamata aplikācijā

import React from 'react';  // Savieno ar react!

import './Rank.css'


const Rank = ({name, entries}) => {     //Izveido funkciju, kas atgriež to zem dotā vārda Logo jeb izdomātā!
    return (           // Instalējām funkciju, ko ievietoju augšā un tālāk izmantoju šeit Tilt!
        <div>
            <div className='counter white f3 center'>
                {`${name}, your entry count is`}
            </div>
            <div className='white f1 center'>
                {entries}
            </div>
        </div>
    );
}
export default Rank;  // exportē jeb palaiž!


// Kad funkcija izveidota to importe aplikācijā jeb app.js
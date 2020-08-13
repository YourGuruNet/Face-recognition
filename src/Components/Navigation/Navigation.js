//Izveidots elements, kas ietver sevī visu funkciju un stilu, ko velāk ievieto pamata aplikācijā

import React from 'react';  // Savieno ar react!
import './Navigation.css'  // Savieno ar Navigācijas css failu

const Navigation = ({onRouteChange, isSignedIn}) => { //Izveido funkciju, kas atgriež
        if (isSignedIn) { 
            return (
        <nav className='Sign-out'>
            <p onClick={() => onRouteChange('Signout')} className='hover-bg-orange b bottom-sign ba f5 link grow black pa2 pointer b--orange dim'>Sign Out</p>  
        </nav> 
        ); 
} else {
    return (
        <nav className='Sign-out'>
            <p onClick={() => onRouteChange('Signin')} className='hover-bg-orange b bottom-sign ba f5 link grow black pa2 pointer b--orange dim'>Sign in</p>  
            <p onClick={() => onRouteChange('Register')} className='hover-bg-orange b bottom-sign ba f5 link grow black pa2 pointer b--orange dim'>Register</p>  
        </nav>  
        );
    }
}
 /* Signin ir nosauktais modelis, kas parādīsies pēc klikšķa */
export default Navigation;  // exportē jeb palaiž!


// Kad funkcija izveidota to importe aplikācijā jeb app.js
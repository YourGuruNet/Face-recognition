//Izveidots elements, kas ietver sevī visu funkciju un stilu, ko velāk ievieto pamata aplikācijā

import React from 'react';  // Savieno ar react!
import './Register.css'


class Register extends React.Component {     //Izveido funkciju, kas atgriež to zem dotā vārda Logo jeb izdomātā!
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',    
            name: '',
            family: '',
            phone: ''


        }
    }
    // uz izmaiņām sadaļā tiks ievākta informācija!

    // ievāc phone number, tas ievietots arīzemāk pie inputa
    onPhoneChange = (event) => {
        this.setState({phone: event.target.value})
    }
    // ievāc family name, tas ievietots arīzemāk pie inputa
    onFamilyChange = (event) => {
        this.setState({family: event.target.value})
    }
    // ievāc name, tas ievietots arīzemāk pie inputa
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    // ievāc ēpastu, tas ievietots arīzemāk pie inputa
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    // ievāc paroli un ievietots arī zemāk! un nodos talāk to!
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }
//// Fetch metode!
onSubmitSignIn = () => {                            //Šī pog aievietota pie submit pogas appakšā!
    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name:this.state.name,
            family:this.state.family,
            phone:this.state.phone,
            email: this.state.email,
            password: this.state.password
        })
    })
       .then(response => response.json())
       .then(user => {
           if (user) {
            this.props.loadUser(user)  // šī ir funkcija kas ievietota šeit, bet atrodas app.js!!
           this.props.onRouteChange('Home')   // šo ievieto, lai zemāk pie katra mainīgā nav jaievieto .props!
           }
       })
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    render(){
        return (           // Instalējām funkciju, ko ievietoju augšā un tālāk izmantoju šeit Tilt!
                       //Input  elementiem jabūt aizslēgtiem ar />
    <div className='test'>
        <article className="b-color br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <div className="measure">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input 
                    className="max-width b--orange pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100" 
                    type="text" 
                    name="name"  
                    id="name"
                    onChange={this.onNameChange} // Šis parāda augstāk esošajai funkcijai uz ko attiecas tā!
                />
                </div>
                <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Family Name</label>
                <input 
                    className="max-width b--orange pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100" 
                    type="text" 
                    name="Surname"  
                    id="Surname"
                    onChange={this.onFamilyChange} // Šis parāda augstāk esošajai funkcijai uz ko attiecas tā!
                />
                </div>
                <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="Phone">Phone number</label>
                <input 
                    className="max-width b--orange pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100" 
                    type="text" 
                    name="Phone"  
                    id="Phone"
                    onChange={this.onPhoneChange} // Šis parāda augstāk esošajai funkcijai uz ko attiecas tā!
                />
                </div>
                <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                    className="max-width b--orange pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100" 
                    type="email" 
                    name="email-address"  
                    id="email-address"
                    onChange={this.onEmailChange} // Šis parāda augstāk esošajai funkcijai uz ko attiecas tā!
                />
                </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                    className="max-width b--orange pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password"
                    onChange={this.onPasswordChange}  // Šis parāda augstāk esošajai funkcijai uz ko attiecas tā!
                />
                </div>
                </fieldset>
                <div className="">
                    <input  /* Home ir nosauktais modelis, kas parādīsies pēc klikšķa */
                        onClick={this.onSubmitSignIn} 
                        className="hover-bg-orange b b--orange ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dim" 
                        type="submit" 
                        value="Join now"
                    />
                </div>
                </div>
            </main>
        </article> 
        </div>
        );
    }
}
export default Register;  // exportē jeb palaiž!
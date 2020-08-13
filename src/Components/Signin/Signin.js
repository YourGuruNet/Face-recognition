//Izveidots elements, kas ietver sevī visu funkciju un stilu, ko velāk ievieto pamata aplikācijā

import React from 'react';  // Savieno ar react!
import './Signin.css'

// Sign in savienojums ar backendu!
class Signin extends React.Component {     //Izveido funkciju, kas atgriež to zem dotā vārda Logo jeb izdomātā!
 constructor(props) {
     super(props);
     this.state = {
         signInEmail: '',
         signInPassword: '',
     }
 }
 
 // ievāc ēpastu, tas ievietots arīzemāk pie inputa
onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
 }
 // ievāc paroli un ievietots arī zemāk! un nodos talāk to!
 onPasswordChange = (event) => {
     this.setState({signInPassword: event.target.value})
 }

 onSubmitSignIn = () => {
     fetch('http://localhost:3000/signin', {
         method: 'post',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
             email: this.state.signInEmail,
             password: this.state.signInPassword
         })
     })
     .then(response => response.json())
     .then(user => {
       if(user.id) {
         this.props.loadUser(user);
         this.props.onRouteChange('home');
       }
     })
    
 }
////////////////////////////
    render(){
    const { onRouteChange } = this.props;
    return (                                    // Instalējām funkciju, ko ievietoju augšā un tālāk izmantoju šeit Tilt!
            //Input  elementiem jabūt aizslēgtiem ar />
        <div className="test">  
        <article className="b-color br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <div className="measure">
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
        <div className="mt3">
        <label 
            className="db fw6 lh-copy f6" 
            htmlFor="email-address">
            Email
        </label>
        <input 
            className="b--orange pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100" 
            type="email" 
            name="email-address"  
            id="email-address"
            onChange={this.onEmailChange} 
        />
        </div>
        <div className="mv3">
        <label 
            className="db fw6 lh-copy f6" 
            htmlFor="password">
            Password
        </label>
        <input 
            className="b--orange pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100" 
            type="password" 
            name="password"  
            id="password"
            onChange={this.onPasswordChange} 
        />
        </div>
        </fieldset>
        <div className="">
        <input  /* Home ir nosauktais modelis, kas parādīsies pēc klikšķa */
        onClick={this.onSubmitSignIn} 
        className="hover-bg-orange b b--orange ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dim" 
        type="submit" 
        value="Sign in"
        />
        </div>
        <div className="lh-copy mt3">
        <p 
            onClick={() => onRouteChange('Register')} 
            href="#0" 
            class="pointer b b--orange f6 link dim black db">
            Register
        </p>
        </div>
        </div>
        </main>
        </article> 
        </div>
        );
    }
    
}
export default Signin;  // exportē jeb palaiž!
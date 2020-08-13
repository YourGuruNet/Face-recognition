import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';  // Importē Navigācijas elementu, kurš palaist zemāk
import Logo from './Components/Logo/Logo';   // Importējam logo failu
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'; 
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'; 
import Rank from './Components/Rank/Rank'; 
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'; // importējam vailu pārtaisīs pēc esošā standarta un instalēts ar NPM INSTAL pēc dokomentācijas.
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';


// Sejas atpazīšamas aplikācija
const app = new Clarifai.App({              // Ievietjoam aplikāciju ar idividuālo aplikācijas kodu!
  apiKey: 'cb52c56fe70b4875befa9666ac931e9a'
 });

const particlesOptions = { // izveido paplašinātu elementu, ar izdomātu nosaukumu
  particles: {             // Kura parametrus izveido šeit, bet to lapā ieliek zemāk pie pāŗējiem, lai būtu tīrāks skats
    number: {              // Elements ir kustīga grafika pa ekrānu, skatīt arī css failu.
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

class App extends Component {
    constructor() {   // definējam konstruktoru
      super();        //izsaucam super, lai varētu izmantot this.state
      this.state = {    // Izveidojam state elementu
        input: '',      // Nosaucām to par input tur parādīsies tas ko lietotājs ievada
        imageUrl: '',
        box: {},
        route: 'Signin',          // izveidojam rout state, kas noteiks kur esam lapā tādējādi šī lapa parādīsies pirmām skatīt zemāk
        isSignedIn: false,
        user: {
            id: '',
            name: '',
            email: '',
            family: '',
            phone: '',
            entries: 0,
            joined: ''
        }
      }
    };

///// šī funkcija ievietota zemāk zem register!
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      familyName: data.familyName,
      phoneNumber: data.phoneNumber,
      entries: data.entries,
      joined: data.joined
    }})
  }

//bilžu rāmja funkcija
calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box; // iegūto datu secība, tādā veidā tiek līdz konkrētam info ko vēlas iegūt
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  
  // aprēķins bilžu rāmju atrašanās vieta!
  return{
    leftCol: clarifaiFace.left_col * width, // left col ir iiegūtie procenti reiz width
    topRow:  clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height), // augstums ,īnus dotais procents reiz augstums.
  }
}

displayFaceBox = (box) => {
  this.setState({box: box});
}

//Funkcijas!
    onInputChange = (event) => {  // izveidojam funkciju, lai mainītu vērtības jeb console uztvertu to ko ieraksti
      this.setState({input: event.target.value});
    }
    onButtonSubmit = () => {
     this.setState({imageUrl: this.state.input});  // Izveidojam darbību, pie klikšķa! ko pievieno konkrēti vieta kur nepieciešams skatī zemāk imageUrl ir mainīgais ko ievada!
      app.models.predict(    // Zem click ievietojam jau gatavu funkciju, kas strādā uz klikšķi
        Clarifai.FACE_DETECT_MODEL, // face detect ir funkcijas veids, ko var mainīt
        this.state.input)
        .then(response => {
          if (response) {
            fetch('http://localhost:3000/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
              id: this.state.user.id
         })
            })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
                })
          
          }
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
    }

// onRouteChange funkcija, pecas, tiek nomainīts route vērtība tādējādi, Sign in lapu nomaina pārējās vērtības izņemto Signin
onRouteChange = (route) => { // ja route ir route tad tas dos tādu modeli, kā nosauksim dodot komandu
 if (route=== 'Signout') {
   this.setState({isSignedIn: false})
 } else if (route === 'Home') {
   this.setState({isSignedIn: true})
 }
  this.setState({route: route});
}

    // Visiem zemāk esošajiem elementiem ir izveidots savs fails un mape!
    render() {
     const { isSignedIn, imageUrl, route, box } = this.state;
    return (
    <div className='App'>
      <Particles className='particles'
          params={particlesOptions} />  {/* Visu kas parādāz pēc route liek div klasē zemāk. */}
        <div className='row'>
          <Logo onRouteChange={this.onRouteChange}/>
          
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/> 
         </div>
      { this.state.route === 'Home'  
      ?  <div> 
            <Rank />
            <ImageLinkForm 
             onInputChange={this.onInputChange} 
             onButtonSubmit={this.onButtonSubmit}
                /> 
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
          : (
            route === 'Signin'
            ? <Signin onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />   // ievietots loaduser
          )
        }
   </div>
  /* onRoutChange={this.onRouteChange pie Signin ir funkcija, ka stajā vietā pēctam parādīs pārējo informāciju}*/
    );
 }
}

export default App; // Exportē failu obligāti

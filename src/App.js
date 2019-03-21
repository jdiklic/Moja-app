import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App__Aside"></div>
      
      <div className="App__Form">
      <div className="PageSwitcher">
      <a href="#" className="PageSwitcher__Item">Prijava</a>
      <a href="#" className ="PageSwitcher__Item PageSwitcher__Item--Active">Registriracija</a>
      </div>
      

              <div className="FormTitle">
                  <a href="#" className="FormTitle__Link">Prijava</a> 
                  ili <a href="#" className="FormTitle__Link FormTitle__Link--Active">Registriracija</a>
              </div>


              <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
              <label className="FormField__Label" htmlFor="name">Vaše ime</label>
              <input type="text" id="name" className="FormField__Input" placeholder="Unesite svoje puno ime" name="name" />
              </div>

              <div className="FormField">
              <label className="FormField__Label" htmlFor="email">Vaš E-mail</label>
              <input type="e-mail" id="email" className="FormField__Input" placeholder="Unesite svoju email adresu" name="email" />
              </div>

              <div className="FormField">
              <label className="FormField__Label" htmlFor="password">Vaša lozinka</label>
              <input type="password" id="password" className="FormField__Input" placeholder="Unesite svoju lozinku" name="password" />
              </div>


              <div className="FormField">
              <button className="FormField__Button mr-20"> Registriraj se</button> 
              <a href="#" className="FormField_Link">Već sam registriran/registrirana</a>
              </div>
              
              </form>
              </div>
      </div>
      </div>
      
            

    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      isMenuOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render(){
    return(
      <div>
        {/* ---------------navbar--------------- */}
        <nav className= 'navbar'>
          <div className='container'>
            <a>
            <img className='logo' src='https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='Start Bootstrap' />
            </a>
            <a className='hamburger' onClick={this.toggleMenu}>
              MENU<img src='https://www.mizrahiorthodontics.com/assets/images/menu-icon.png' alt='' />
            </a>
            <div className='link-container'>
              <ul className={`links ${this.state.isMenuOpen ? 'links-open' : null}`}>
                <li className='list-links'>SERVICES</li>
                <li className='list-links'>PORTFOLIO</li>
                <li className='list-links'>ABOUT</li>
                <li className='list-links'>TEAM</li>
                <li className='list-links'>CONTACT</li>
              </ul>
            </div>
          </div>
        </nav>
        {/* ---------------header--------------- */}
        <header className='header'>
          <div className='container-2'>
            <div className='greeting-1'>Welcome To Out Studio!</div>
            <div className='greeting-2'>IT'S NICE TO MEET YOU</div>
            <a className='tell-me-more-button'>TELL ME MORE</a>
          </div>
        </header>
        {/* ---------------services--------------- */}
        <section></section>
      </div>
      )
    }
}

export default App;

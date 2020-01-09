import React from 'react';
import headshot from './zack_headshot.jpg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      displayedImage: -1
    }
  }
  componentDidMount() {
    this.carousel();

    if (window.screen.width < 1300) { // for dynamic display rendering (mobile)
      var introText = document.getElementById('helloWorld');
      introText.innerHTML = `Hello! I'm a full-stack software engineer from the Bay Area looking for a full time position with a great company starting in 2020. If you'd like to get in touch, feel free to email me at: <a href='mailto:ZackMillerApps@gmail.com' id='email'> ZackMillerApps@gmail.com</a>`;
      introText.style.fontSize = '20px';
      document.getElementById('email').style.color = 'lightblue';
      document.getElementById('textGrid').style.marginBottom = '10px';
    }
  }

  carousel() {
    var slides = document.getElementsByClassName('bdaySlides');
    var display = this.state.displayedImage + 1;
    if (display === slides.length) {
      display = 0;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[display].style.display = 'block';

    this.setState({ displayedImage: display });
    setTimeout(() => { this.carousel() }, 3000); // Change image every 3 sec
  }

  render() {
    return (
      <div className='App' >
        <header className='App-header'>
          <div id='textGrid'>
            <div id='mainFlex'>
              <div className='container'>
                <img className='headshot' src={headshot}></img>
                <h1>Zack K. Miller</h1>
              </div>
              <div className='container'>
                <a className='logos' href='https://github.com/hotbodyfitness/' target='_blank'><img src='https://img.icons8.com/color/40/000000/github--v1.png'></img></a>
                <a className='logos' href='https://www.linkedin.com/in/zkmiller/' target='_blank'><img src='https://img.icons8.com/color/40/000000/linkedin-circled.png'></img></a>
              </div>
            </div>
            <p id='helloWorld'>Hello! &nbsp; I'm a full-stack software engineer from the Bay Area looking for a full-time position with a great company starting in January 2020. &nbsp; Here is a sample of some of the apps that I've built. &nbsp; If you'd like to get in touch, feel free to email me at: <a href='mailto:ZackMillerApps@gmail.com' id='email'> ZackMillerApps@gmail.com</a></p>
          </div>
          <div id='projectTop'>
            <div className='bigApp'>
              <a href='http://thebdayapp.com/' target='_blank'>
                <img className='bdaySlides' src='https://i.imgur.com/r6zBVLw.png' alt='TBA'></img>
                <img className='bdaySlides' src='https://i.imgur.com/4sf9hIL.png' alt='TBA' style={{ display: 'none' }}></img>
                <img className='bdaySlides' src='https://i.imgur.com/4kZWZZB.png' alt='TBA' style={{ display: 'none' }}></img>
                <img className='bdaySlides' src='https://i.imgur.com/s5mXnXc.png' alt='TBA' style={{ display: 'none' }}></img>
                <img className='bdaySlides' src='https://i.imgur.com/nxEXvHy.png' alt='TBA' style={{ display: 'none' }}></img>
              </a>
              <div className='bigAppText'>
                <p className='miniAppTitle'>The Birthday App</p>
                <p className='miniAppText'>Built with: React, React Router, MongoDB, Express-Session, Passport, Bcrypt, jQuery, Webpack, HTML, CSS, AWS
                  <br></br> Includes multi-page routing, data persistance, dynamic displays, annimated sidebar that's resizable and hideable, auto-calculated ages, authentication with hashing, an intuitive UX, and a beautiful UI.
                </p>
                <a href='http://thebdayapp.com/' target='_blank' className='bigLinkApp'>Live App</a>
              </div>
            </div>

          </div>
          <div id='projectGrid'>
            <div className='appContainer'>
              <a href='https://minesweeper-zack.herokuapp.com/' target='_blank'>
                <img className='miniApp' src='https://i.imgur.com/Sc48v7D.png' alt='Minesweeper'></img>
              </a>
              <div className='miniAppTextContainer'>
                <p className='miniAppTitle'>Minesweeper</p>
                <p className='miniAppText'>Built with: React, Redux, jQuery, HTML, CSS
                  <br></br> Includes click automation to open adjacent squares.
                </p>
                <a href='https://minesweeper-zack.herokuapp.com/' target='_blank' className='linkApp'>Live App</a>
              </div>
            </div>
            <div className='appContainer'>
              <a href='https://cryptocurrency-charting.herokuapp.com/' target='_blank'>
                <img className='miniApp' src='https://i.imgur.com/AxGya5Q.png' alt='Cryptocurrency'></img>
              </a>
              <div className='miniAppTextContainer'>
                <p className='miniAppTitle'>Cryptocurrency Charting</p>
                <p className='miniAppText'>Built with: React, Chart.js, CoinGecko-API, Webpack
                  <br></br> Includes 10 currencies and 7 time frames for each.
                </p>
                <a href='https://cryptocurrency-charting.herokuapp.com/' target='_blank' className='linkApp'>Live App</a>
              </div>
            </div>
            <div className='appContainer'>
              <a href='https://bowling-zack.herokuapp.com/' target='_blank'>
                <img className='miniApp' src='https://i.imgur.com/kXZs6Wl.png' alt='Bowling'></img>
              </a>
              <div className='miniAppTextContainer'>
                <p className='miniAppTitle'>Bowling</p>
                <p className='miniAppText'>Built with: React, Express, jQuery, Webpack, HTML, CSS
                  <br></br> Includes accurate scoring and animated pins display.
                </p>
                <a href='https://bowling-zack.herokuapp.com/' target='_blank' className='linkApp'>Live App</a>
              </div>
            </div>
            <div className='appContainer'>
              <a href='https://connect-four-zack.herokuapp.com/' target='_blank'>
                <img className='miniApp profile' src='https://i.imgur.com/8b7xd6D.png' alt='Connect_Four'></img>
              </a>
              <div className='miniAppTextContainer'>
                <p className='miniAppTitle'>Connect Four</p>
                <p className='miniAppText'>Built with: React, Node, Express, Webpack, HTML, CSS
                  <br></br> Includes tracking wins and ties with a live scoreboard.
                </p>
                <a href='https://connect-four-zack.herokuapp.com/' target='_blank' className='linkApp'>Live App</a>
              </div>
            </div>
            <div className='appContainer'>
              <a href='https://soundcloud-bottom-player.herokuapp.com/' target='_blank'>
                <img className='miniApp' src='https://i.imgur.com/OhkAgdf.png' alt='Soundcloud'></img>
              </a>
              <div className='miniAppTextContainer'>
                <p className='miniAppTitle'>Soundcloud ~ Bottom Music Player</p>
                <p className='miniAppText'>Built with: React, Express, Webpack, CSS Modules
                  <br></br> Includes music player controls built from scratch.
                </p>
                <a href='https://soundcloud-bottom-player.herokuapp.com/' target='_blank' className='linkApp'>Live App</a>
              </div>
            </div>
            <div className='appContainer'>
              <img className='miniApp profile' src='https://i.imgur.com/PMrQtFq.png' alt='Portfolio'></img>
              <div className='miniAppTextContainer'>
                <p className='miniAppTitle'>Zack K. Miller Portfolio</p>
                <p className='miniAppText'>Built with: React, HTML, CSS
                  <br></br> Includes everything you see here ;-)
                </p>
                <a href='#top' className='linkApp'>Live App</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import headshot from './zack_headshot.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='textGrid'>
          <div id='mainFlex'>
            <div className='container'>
              <img className='headshot' src={headshot}></img>
              <h1>Zack K. Miller</h1>
            </div>
            <div className='container'>
              <a className='logos' href="https://github.com/hotbodyfitness/" target="_blank"><img src="https://img.icons8.com/color/40/000000/github--v1.png"></img></a>
              <a className='logos' href="https://www.linkedin.com/in/zkmiller/" target="_blank"><img src="https://img.icons8.com/color/40/000000/linkedin-circled.png"></img></a>
            </div>
          </div>
          <p>Hello! &nbsp; I'm a full-stack software engineer from the Bay Area looking for a full-time position with a great company starting in January 2020. &nbsp; Here is a sample of some of the apps that I've built. &nbsp; If you'd like to get in touch, feel free to email me at: <a href="mailto:ZackMillerApps@gmail.com" className='email'> ZackMillerApps@gmail.com</a></p>
        </div>
        <div id='projectTop'>
          <div className='bigApp'></div><div className='bigAppText'></div>
        </div>
        <div id='projectGrid'>
          <div className='appContainer'><div className='miniApp'></div><div className='miniAppText'></div></div>
          <div className='appContainer'><div className='miniApp'></div><div className='miniAppText'></div></div>
          <div className='appContainer'><div className='miniApp'></div><div className='miniAppText'></div></div>
          <div className='appContainer'><div className='miniApp'></div><div className='miniAppText'></div></div>
        </div>
      </header>
    </div>
  );
}

export default App;

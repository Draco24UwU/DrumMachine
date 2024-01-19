import { useState } from 'react'
import './App.css'
import "./Button.css"
import Drum from "./Drum"
import {AudioClip, AudioClip2} from "./types"



let Clips = AudioClip;


function App() {

  const [volume, setVolume] = useState(0.50);
  const [audioClips, setAudioClips] = useState(false);

  
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };
  
  const changeClip = () => {
    setAudioClips(!audioClips);
    audioClips ? Clips = AudioClip : Clips = AudioClip2;
  }

  return (
    <> 
      <div>
        <div id="drum-machine">
          <h1>Drum Machine</h1>

          <div className='content'>

            <div id="display">

              {Clips.map((clip) => (
                <Drum audioClip = {clip} key={clip.KeyTrigger} volume = {volume} />
              ))}

            </div>

            <div className='range'>
        
              <label className="switch">
                <input type="checkbox" onChange={() => changeClip()}/>
                <span className="slider"></span>
              </label>

              <input type="range" id="volumeSlider" min="0" max="1" value={volume} onChange={(e) => handleVolumeChange(e)}  step="0.01"/>
              <h3>{Math.round(volume*100)}</h3>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}



export default App

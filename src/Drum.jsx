import PropTypes from 'prop-types';

export default function Drum({audioClip, volume}) {

  const playSound = (audio) => {
    const sound = document.getElementById(audio.KeyTrigger);
    sound.volume = volume;
    sound.play();
   
  }
 
  return (
    <>
      <button className="drum-pad" id= {`drum-${audioClip.KeyTrigger}`} onClick= {() => playSound(audioClip)}>
          <audio src={audioClip.url} id={audioClip.KeyTrigger} className="clip" ></audio>
          {audioClip.KeyTrigger}
      </button>
    </>
  )
}

Drum.propTypes = {
    audioClip: PropTypes.shape({
      KeyTrigger: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string
    }),
    volume: PropTypes.number
  };

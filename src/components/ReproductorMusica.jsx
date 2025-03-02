import React, { useState, useRef } from 'react';

const ReproductorMusica = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='fixed  bottom-5 right-5 z-40'>
      <audio ref={audioRef} src="musica/Bruno Mars - Marry You (Official Lyric Video) - Bruno Mars.mp3" />
      <div className='bg-white rounded-full p-3' onClick={togglePlayPause}>
        {isPlaying ? <img className='w-7' src="icons/pause.svg" alt="" /> : <img className='w-7' src="icons/play.svg" alt="" /> }
      </div>
    </div>
  );
};

export default ReproductorMusica;
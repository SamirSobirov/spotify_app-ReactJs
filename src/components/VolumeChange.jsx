import React, { useState } from 'react';

function VolumeChange() {
  const [volume, setVolume] = useState(50);
  
  const handleVolumeChange = (event) => {
    setVolume(event.target.value); 
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <div>
        Громкость: {volume}
      </div>
      <div>
        {volume > 70 && <i className="fas fa-volume-up"></i>}
        {volume <= 70 && volume > 30 && <i className="fas fa-volume-down"></i>}
        {volume <= 30 && <i className="fas fa-volume-off"></i>}
      </div>
    </div>
  );
}
export default VolumeChange;

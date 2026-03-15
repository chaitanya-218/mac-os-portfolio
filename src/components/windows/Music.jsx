import React from 'react'
import MacWindow from './MacWindow'
import './music.scss'

const Music = ({windowName,setWindowsState}) => {
  return (
    <MacWindow width="27vw" height="55vh" windowName={windowName} setWindowsState={setWindowsState} >
      <div className="music-window">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3Vbkk0?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  )
}

export default Music
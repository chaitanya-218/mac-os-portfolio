import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Music from './components/windows/Music'
import Cli from './components/windows/Cli'
import { useState } from 'react'

const App = () => {



  const [WindowsState, setWindowsState] = useState({})

 
  const [wallpaper] = useState(() => {
    const wallpaper = [
      "/wallpapers/dune.jpg",
      "/wallpapers/fish.jpg",
      "/wallpapers/green.jpg",
      "/wallpapers/lava.jpg",
      "/wallpapers/ocean.jpg",
      "/wallpapers/tree.jpg",
      "/wallpapers/camera.jpg",
      "/wallpapers/bubble.jpg",
    ]

    return wallpaper[Math.floor(Math.random() * wallpaper.length)];
  });

  return (
   <main style={{ backgroundImage: `url(${wallpaper})` }}>
      
      <Nav setWindowsState={setWindowsState} />
      <Dock WindowsState={WindowsState} setWindowsState={setWindowsState}/>

      {WindowsState.Github && <Github windowName="Github" setWindowsState={setWindowsState} />}
      {WindowsState.Note && <Note windowName="Note" setWindowsState={setWindowsState}/>}
      {WindowsState.Resume && <Resume windowName="Resume" setWindowsState={setWindowsState}/>}
      {WindowsState.Music && <Music windowName="Music" setWindowsState={setWindowsState}/>}
      {WindowsState.Cli && <Cli windowName="Cli" setWindowsState={setWindowsState}/>}
   </main>
  )
}

export default App
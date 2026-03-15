import React from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'

const MacWindow = ({children,width="47vw",height="50vh",windowName,setWindowsState}) => {
  return (
    <Rnd default={
    { x: 300,
      y: 200,
      width: width,
      height: height}
    }>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={()=>setWindowsState(state=>({...state, [windowName]:false}))}
                 className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title"><p>Chaitanya Pathak ~ zsh</p></div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default MacWindow
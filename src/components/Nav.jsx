import React from 'react'
import './nav.scss'
import DateTime from './DateTime'
import Cli from './windows/Cli'
import Music from './windows/Music'
import Resume from './windows/Resume'
import Note from './windows/Note'

const Nav = ({setWindowsState}) => {
  return (
    <nav>
        <div className='left'>
            <div className='apple-icon'>
                <img src="/nav-icons/apple.svg" alt="" />
            </div>
            <div onClick={()=>{setWindowsState(state=>({...state, Music:true}))}}
                 className="nav-item">
                 <p>Chaitanya Pathak</p>
            </div>
            <div onClick={()=>{setWindowsState(state=>({...state, Resume:true}))}}
                 className="nav-item">
                 <p>File</p>
            </div>
            <div onClick={()=>{setWindowsState(state=>({...state, Note:true}))}}
                 className="nav-item">
                 <p>Window</p>
            </div>
            <div onClick={()=>{setWindowsState(state=>({...state, Cli:true}))}}
                 className="nav-item">
                 <p>Terminal</p>
            </div>

        </div>
        <div className='right'>
            <div className='apple-icon'>
                    <img src="/nav-icons/wifi.svg" alt="" />
            </div>
            <div className="nav-item">
                <DateTime/>
            </div>
        </div>
    </nav>
  )
}

export default Nav
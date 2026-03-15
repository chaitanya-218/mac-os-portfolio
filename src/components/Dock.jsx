import React from 'react'
import './dock.scss'
import Music from './windows/Music'
import Note from './windows/Note'
import { resume } from 'react-dom/server'
import Cli from './windows/Cli'

const Dock = ({WindowsState,setWindowsState}) => {
  return (
   <footer className='Dock'>
      <div onClick={()=>{setWindowsState(state=>({...state, Github:true}))}}
           className='icon github'><img src="/doc-icon/github.svg" alt="" /> </div>

      <div onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r","_blank")}}
           className='icon calender'><img src="/doc-icon/calender.svg" alt="" /> </div>

      <div onClick={()=>{window.open("https://www.linkedin.com/in/chaitanya-pathak-51b526229/","_blank")}}
           className='icon link'><img src="/doc-icon/link.svg" alt="" /> </div>

      <div onClick={()=>{window.open("mailto:chaitanya21pathak8@gmail.com","_blank")}}
           className='icon mail'><img src="/doc-icon/mail.svg" alt="" /> </div>

      <div onClick={()=>{setWindowsState(state=>({...state, Music:true}))}}
           className='icon music'><img src="/doc-icon/music.svg" alt="" /> </div>

      <div onClick={()=>{setWindowsState(state=>({...state, Note:true}))}}
           className='icon notes'><img src="/doc-icon/notes.svg" alt="" /> </div>

      <div onClick={()=>{setWindowsState(state=>({...state, Resume:true}))}}
           className='icon pdf'><img src="/doc-icon/pdf.svg" alt="" /> </div>

      <div onClick={()=>{setWindowsState(state=>({...state, Cli:true}))}}
           className='icon terminal'><img src="/doc-icon/terminal.svg" alt="" /> </div>
   </footer>
  )
}

export default Dock
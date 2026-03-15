import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'


const Resume = ({windowName,setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} > 
        <div className="resume-window">
            <embed src='/Chaitanya_resume_march2026.pdf' frameborder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume
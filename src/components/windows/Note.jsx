import React, { useState, useEffect } from "react";
import "./note.scss";
import MacWindow from "./MacWindow";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";


const Note = ({windowName,setWindowsState}) => {
  const [markDownText, setmarkDownText] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((response) => response.text())
      .then((text) => setmarkDownText(text));
  }, []);

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="note-window">
        {markDownText ? 
          <SyntaxHighlighter language="typescript" style={atomOneDark}>
            {markDownText}
          </SyntaxHighlighter>
         : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;

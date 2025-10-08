import React from "react";
import "./styles.css";
import MarkdownEditor from "./MarkdownEditor";
 const App=()=>{
   return(
     <div className="app">
        <h1 className="title">Markdown Editor</h1>
        <MarkdownEditor />
     </div>
   )
 };

export default App;

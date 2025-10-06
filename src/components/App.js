import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import "./styles.css";
 const App=()=>{
   return(
     <div className="app">
        <h1 className="title">Markdown Editor</h1>
        <MarkdownEditor />
     </div>
   )
 };

export default App;

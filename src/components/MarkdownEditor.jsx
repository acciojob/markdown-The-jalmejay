import React from "react";
import ReactMarkdown from 'react-markdown';
import "./styles.css"

const MarkdownEditor=()=>{
  const [text,setText]=useState("# Hello World");
  const [preview, setPreview] = useState(text);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
const t = setTimeout(() => setLoading(false), 300);
return () => clearTimeout(t);
}, []);
  
  useEffect(() => {
setPreview(text);
}, [text]);
  
  return(
    <div className="main">
      <textarea className="textarea" value={text} onChange={(e) => setText(e.target.value)} />
      <div className="preview">
        {loading ? <div className="loading">Loading preview...</div>:<ReactMarkDone>{preview}</ReactMarkDone>}
      </div>
    </div>
  )
};

export default MarkdownEditor;

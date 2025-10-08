import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./styles.css";

const MarkdownEditor = () => {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState(text);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setPreview(text);
  }, [text]);

  return (
    <div className="main">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="preview">
        {loading ? (
          <div className="loading">Loading preview...</div>
        ) : (
          <ReactMarkdown>{preview}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;

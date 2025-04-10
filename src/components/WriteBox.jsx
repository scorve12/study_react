// src/components/WriteBox.jsx
import { useState } from 'react';

function WriteBox({ onSubmit }) {
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };
  
  return (
    <div className="write-box">
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write something here..."
          rows={4}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default WriteBox;
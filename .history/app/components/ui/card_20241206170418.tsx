// components/ui/FillFormCard.tsx
import React, { useState } from 'react';

interface SubmitData {
  name: string;
  noteID: string;
  noteInner: string;
}

const FillFormCard = ({ onSubmit }: { onSubmit: (data: SubmitData) => void }) => {
  const [name, setName] = useState('');
  const [noteID, setNoteID] = useState('');
  const [noteInner, setNoteInner] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, noteID, noteInner });
  };

  return (
    <div className="fill-form-card">
      <h2>填寫資料</h2>
      <form onSubmit={handleSubmit}>
        <label>
          名稱:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <br />
        <label>
          註解 ID:
          <input 
            type="text" 
            value={noteID} 
            onChange={(e) => setNoteID(e.target.value)} 
          />
        </label>
        <br />
        <label>
          註解內容:
          <textarea 
            value={noteInner} 
            onChange={(e) => setNoteInner(e.target.value)} 
          />
        </label>
        <br />
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default FillFormCard;
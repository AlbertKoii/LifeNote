import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {useState , useEffect} from "react"
  
  interface NoteInputCardProps {
   id?: number ;
   data: any[];
  }

  const NoteInputCard = ({ onSubmit }: { onSubmit: (data: NoteInputCardProps) => void })=>{
    const [noteID, setNoteID] = useState('');
    const [noteInner, setNoteInner] = useState('');
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit({ id , noteData , });
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
  
  export default NoteInputCard;
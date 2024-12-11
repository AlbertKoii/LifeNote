import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { useState } from "react";
  import axios from "axios";
  import { Currency } from "lucide-react";
  
  interface NoteInputCardProps {
    id?: any;
    date: [
        id: number,
          date: string,
          accounting: {
            accountST: false,
            accountField: "",
            accountInner: "",
            accountAmount: 0,
          },
          noteID: {
            noteST: false,
            noteInner: [],
          },
    ];
  }
  
  const NoteInputCard = ({ onSubmit }: { onSubmit: (data: NoteInputCardProps) => void }) => {

    const [cardOpen , setcardOpen] = useState(true)
    const [noteContent, setNoteContent] = useState("");
    const [err, setErr] = useState("");
    const [data, setData] = useState([]);
  
    const addNoteData = async () => {
      try {
        // 使用 POST 請求來新增記事
        const newNote = {
          id: Date.now().toString(),
          date: new Date().toISOString(),
          accounting: {
            accountST: false,
            accountField: "飲食",
            accountInner: "",
            accountAmount: 0,
          },
          noteID: {
            noteST: false,
            noteInner: noteContent,
          },
        };
  
        const response = await axios.post("http://localhost:3000/Notion", newNote);
        
        setData([...data, response.data]);
        setNoteContent("");
        onSubmit(newNote); 
      } catch (error: any) {
        setErr(error.message);
      }
    };

    const CardMode =()=>{
        setcardOpen(false)
    }
  
    return ({
        
    }
        
    );
  };
  
  export default NoteInputCard;
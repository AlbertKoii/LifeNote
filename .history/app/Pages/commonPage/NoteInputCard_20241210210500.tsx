import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import { IoMdCloseCircleOutline } from "react-icons/io";
  
  
  interface NoteInputCardProps {
    id?: any;
    date: [
      id: number,
      date: string,
      accounting: {
        accountST: boolean,
        accountField: string,
        accountInner: string,
        accountAmount: number,
      },
      noteID: {
        noteST: boolean,
        noteInner: string[],
      },
    ];
  
    onSubmit: (data: NoteInputCardProps) => void;
    onClose: () => void; 
  }
  
  const NoteInputCard = ({ onSubmit, onClose }: NoteInputCardProps) => {
    const [cardOpen, setCardOpen] = useState(true);
    const [noteContent, setNoteContent] = useState("");
    const [err, setErr] = useState("");
    const [data, setData] = useState([]);
  
    useEffect(()=>{

    })
    
  
    const closeCardModel = () => {
      setCardOpen(false);
      onClose(); 
    };
  
    if (!cardOpen) {
      return null; 
    }
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
        <Card className="items-center w-[30rem] h-[30rem] flex flex-col bg-white">
          <CardHeader className="mt-20 items-center ">
            <IoMdCloseCircleOutline onClick={() => closeCardModel()} />
            <CardTitle className="text-2xl">記事</CardTitle>
            <CardDescription>{new Date().toString()}</CardDescription>
          </CardHeader>
          <CardContent className="items-center w-fit">
            <div className="grid grid-rows-1 text-center w-[20rem] ">
              記事內容
            </div>
            <textarea 
              placeholder="輸入記事內容" 
              className="mt-4 w-[20rem] h-[10rem] resize-none overflow-hidden border-neutral-300 border-2" 
              maxLength={400} 
              rows={1} 
              value={noteContent} 
              onChange={(e) => setNoteContent(e.target.value)}
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={addNoteData}>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  export default NoteInputCard;
  
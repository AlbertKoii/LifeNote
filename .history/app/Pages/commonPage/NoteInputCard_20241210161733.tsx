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
  
  interface NoteInputCardProps {
    id?: any;
    date: any[];
  }
  
  const NoteInputCard = ({ onSubmit }: { onSubmit: (data: NoteInputCardProps) => void }) => {
    const [noteContent, setNoteContent] = useState("");
    const [err, setErr] = useState("");
    const [data, setData] = useState([]); // Initialize as an empty array
  
    const addNoteData = async () => {
      const newNote = {
        
        accountingId: {
            id: (data.length + 1).toString(),
            accountingDate: new Date().toISOString(),
            accountMemo: "",
            accountCheckSt: false,
            accountInner: "",
            accountAmount: 39
        }
        ,
        noteID: {
          id: (data.length + 1).toString(),
          noteDate: new Date().toISOString(),
          noteCheckSt: false,
          noteInner: noteContent,
        },
      };
  
      try {
        const response = await axios.post(
          "http://localhost:3000/accounts/1/date",
          newNote
        );
        console.log(response.data);
  
        setData((prevData) => [...prevData, response.data]);
        setNoteContent("");
        onSubmit(response.data); // Call the onSubmit prop
      } catch (error: any) {
        setErr(error.message);
      }
    };
  
    return (
      <div className="flex absolute h-screen z-1">
        <Card className="items-center w-[30rem] h-[30rem] flex flex-col">
          <CardHeader className="mt-20 items-center ">
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
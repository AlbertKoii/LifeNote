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
    date?: [
        id: number,
          date: string
          accounting: {
            accountST: false,
            accountField: "",
            accountInner: "",
            accountAmount: 0,
          },
          noteID: {
            noteST: false,
            noteInner: noteContent,
          },
    ];
  }
  
  const NoteInputCard = ({ onSubmit }: { onSubmit: (data: NoteInputCardProps) => void }) => {
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
        
        // 更新本地狀態
        setData([...data, response.data]);
        setNoteContent("");
        onSubmit(newNote); // Call the onSubmit prop
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
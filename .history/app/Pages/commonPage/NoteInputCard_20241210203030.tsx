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
  import { IoMdCloseCircleOutline } from "react-icons/io";
  import { AlertCircle } from "lucide-react"

  import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"

  
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

    onClose: () => void
  }
  
  const NoteInputCard = ({ onSubmit }: { onSubmit: (data: NoteInputCardProps) => void , onclose: () => void;  }) => {

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

        if (!newNote.noteID.noteInner || newNote.noteID.noteInner.length > 300) {
            setErr("記事內容不可為空值且字數不可超過300字");
            alert(`
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
                `)
            return;
        }
  
        const response = await axios.post("http://localhost:3000/Notion", newNote);
        
        setData([...data, response.data]);
        setNoteContent("");
        onSubmit(newNote); 
      } catch (error: any) {
        setErr(error.message);
      }
    };

    const closeCardModel = () => {
        setcardOpen(false);
        onclose();
    };

    if (!cardOpen) {
        return null; 
    }

  
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
        <Card className="items-center w-[30rem] h-[30rem] flex flex-col bg-white">
          <CardHeader className="mt-20 items-center ">
          <IoMdCloseCircleOutline onClick={()=>closeCardModel()}/>
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
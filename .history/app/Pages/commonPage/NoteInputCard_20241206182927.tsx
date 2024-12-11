import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useState , useEffect} from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from "axios"


  
  interface NoteInputCardProps {
   id?: string ;
   data: any[];
  }

  const NoteInputCard = ({ onSubmit }: { onSubmit: (data: NoteInputCardProps) => void })=>{
    const [id, setId] = useState('');
    const [err, setErr] = useState('')
    const [data , setData] = useState([
        {
            id: '',
            noteDate:  new Date().toISOString().split('T')[0],
            noteCheckSt: false ,
            noteInner : '',
        }     
    ])
    
    const newNote = {
        noteID: {
            id: (data.length + 1).toString(), // 根据现有数据生成新的 ID
            noteDate: new Date().toISOString(),
            noteCheckSt: false,
            noteInner: '你的笔记内容' // 从 textarea 中获取内容
        }
    };

    try {
        const response = await axios.post('http://localhost:3000/accounts/1/date', newNote);
        setData(prevData => [...prevData, response.data]); // 更新状态以包含新笔记
    } catch (error) {
        setErr(error);
    }
};
    
    const newDateData = () => {
        return new Date().toString();
    }
    
  
    return (
        <div className="flex items-center justify-center h-screen">
        <Card className=" items-center w-[30rem] h-[30rem] flex flex-col">
            <CardHeader className="mt-20 items-center ">
                <CardTitle className="text-2xl">記事</CardTitle>
                <CardDescription className="">{newDateData()}</CardDescription>
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
                />
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button onClick={()=>addNoteData()}>Submit</Button>
            </CardFooter>
        </Card>
    </div>
    );
  };
  
  export default NoteInputCard;
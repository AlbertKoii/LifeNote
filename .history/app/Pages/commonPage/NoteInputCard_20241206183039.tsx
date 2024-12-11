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

const NoteInputCard = ({ onSubmit: void }) => {
    const [noteContent, setNoteContent] = useState('');
    const [err, setErr] = useState('');
    
    const addNoteData = async () => {
        const newNote = {
            noteID: {
                id: (Math.random() * 1000).toString(), // 使用随机 ID 或者根据已有数据生成 ID
                noteDate: new Date().toISOString(),
                noteCheckSt: false,
                noteInner: noteContent // 从输入框获取内容
            }
        };

        try {
            const response = await axios.post('http://localhost:3000/accounts/1/date', newNote);
            console.log(response.data); // 输出新创建的数据
            setNoteContent(''); // 清空输入框
        } catch (error: any) {
            setErr(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
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
                        onChange={(e) => setNoteContent(e.target.value)} // 更新输入框内容
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
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
const NoteInputCard = ({ onSubmit }: { onSubmit: (data: NoteInputCardProps) => void }) => {
    const [noteContent, setNoteContent] = useState('');
    const [err, setErr] = useState('');
    const [data, setData] = useState([
        {
            id: '',
            noteDate: new Date().toISOString().split('T')[0],
            noteCheckSt: false,
            noteInner: '',
        }
    ]);

    const addNoteData = async () => {
        const newNote = {
            accountingId: {
                id: Math.floor(Math.random() * 1000), // 为新的会计数据生成一个随机 ID
                accountingDate: new Date().toISOString(),
                accountMemo: "新笔记", // 可以根据需要自定义
                accountCheckSt: false,
                accountInner: "新内容", // 这里可以根据需要填充
                accountAmount: 0 // 根据需要设置金额
            },
            noteID: {
                id: (data.length + 1).toString(), // 根据现有数据生成新的 ID
                noteDate: new Date().toISOString(),
                noteCheckSt: false,
                noteInner: noteContent // 从 textarea 获取内容
            }
        };

        try {
            const response = await axios.post('http://localhost:3000/accounts/1/date', newNote);
            console.log(response.data); // 输出新创建的数据

            // 更新状态以包含新笔记
            setData(prevData => [...prevData, response.data]); 
            setNoteContent(''); // 清空输入框
        } catch (error) {
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

export default NoteInputCard
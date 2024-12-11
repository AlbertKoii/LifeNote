import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface NoteInputCardProps {
    id?: any,
    date: any[];
}

const NoteInputCard = ({ onSubmit }: { onSubmit: (data: NoteInputCardProps) => void }) => {
    
    const [formShow, setFormShow] = useState(true); // 初始化 formShow 为 true
    
    const handleClose = () => {
        setFormShow(false);
    };

    useEffect(() => {
        // 如果 formShow 为 false，則清空資料
        if (!formShow) {
            setData([]);
            setNoteContent('');
            setErr('');
        }
    }, [formShow]);

    const addNoteData = () => {
        // 將資料提交到 onSubmit 函數
        onSubmit({
            id: Math.random().toString(36).substr(2, 9),
            date: new Date().toISOString(),
            content: noteContent,
        });
        
        // 清空資料
        setData([]);
        setNoteContent('');
        setErr('');
        
        // 關閉表單
        handleClose();
    };

    return (
        <>
            {formShow && (
                <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
                    <Card className="w-full">
                        <CardHeader className="flex justify-between items-center">
                            <CardTitle className="text-2xl">記事</CardTitle>
                            <CardDescription>{new Date().toString()}</CardDescription>
                            <IoMdCloseCircleOutline onClick={handleClose} />
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
            )}
        </>
    );
};

export default NoteInputCard;

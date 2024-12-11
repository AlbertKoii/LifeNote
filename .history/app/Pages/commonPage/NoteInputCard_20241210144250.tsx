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
    
    const [formShow, setFormShow] = useState(true); 
    const [noteContent, setNoteContent] = useState("");

    const addNoteData = () => {
        setNoteContent(""); 
        setFormShow(false);
    };

    useEffect(() => {
        if (!formShow) {
            console.log("NoteInputCard 已關閉");
        }
    }, [formShow]); 

    if (!formShow) return null; 

    return (
        <div>
            <Card>
                <CardHeader className="flex justify-between">
                    <CardTitle>新增記事</CardTitle>
                    <IoMdCloseCircleOutline onClick={() => handleTaggleForm(true)} className="cursor-pointer" />
                </CardHeader>
                <CardContent>
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
                    <Button onClick={addNoteData}>提交</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NoteInputCard;

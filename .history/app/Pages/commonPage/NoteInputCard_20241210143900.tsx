import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface NoteInputCardProps {
    onSubmit: (data: { content: string }) => void;
    onClose: () => void; // 新增 onClose 屬性
}

const NoteInputCard = ({ onSubmit, onClose }: NoteInputCardProps) => {
    const [noteContent, setNoteContent] = useState("");

    const addNoteData = () => {
        onSubmit({ content: noteContent });
        setNoteContent(""); // 提交後清空內容
    };

    const handleClose = () => {
        onClose(); // 呼叫 onClose 函數
    };

    return (
        <div>
            <Card>
                <CardHeader className="flex justify-between">
                    <CardTitle>新增記事</CardTitle>
                    <IoMdCloseCircleOutline onClick={handleClose} className="cursor-pointer" />
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

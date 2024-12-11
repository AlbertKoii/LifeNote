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

interface NoteInputCardProps {
    onSubmit: (data: any) => void;
    onClose: () => void;
}

const NoteInputCard = ({ onSubmit, onClose }: NoteInputCardProps) => {
    const [noteContent, setNoteContent] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/notes', { content: noteContent });
            if (response.status === 200) {
                onSubmit(response.data); // Pass the new note data back to the parent
                setNoteContent(""); // Clear input
                onClose(); // Close the card
            }
        } catch (error) {
            console.error("Error submitting note:", error);
        }
    };

    return (
        <div>
            <Card>
                <CardHeader className="flex justify-between">
                    <IoMdCloseCircleOutline onClick={onClose} className="cursor-pointer" />
                    <CardTitle>新增記事</CardTitle>
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
                    <Button onClick={handleSubmit}>提交</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NoteInputCard;
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
import { IoMdCloseCircleOutline } from "react-icons/io";

interface NoteInputCardProps {
    onSubmit: (data: { content: string }) => void;
}

const NoteInputCard = ({ onSubmit }: NoteInputCardProps) => {
    const [formShow, setFormShow] = useState(false); // 初始不顯示表單
    const [noteContent, setNoteContent] = useState("");

    const handleToggleForm = () => {
        setFormShow((prev) => !prev); // 切換表單顯示狀態
    };

    const addNoteData = () => {
        onSubmit({ content: noteContent });
        setNoteContent(""); // 提交後清空內容
        setFormShow(false); // 提交後關閉表單
    };

    return (
        <div>
            <Button onClick={handleToggleForm}>
                {formShow ? "隱藏表單" : "顯示表單"}
            </Button>
            {formShow && (
                <Card>
                    <CardHeader>
                        <CardTitle>新增記事</CardTitle>
                        <IoMdCloseCircleOutline onClick={handleToggleForm} />
                    </CardHeader>
                    <CardContent>
                        <textarea
                            value={noteContent}
                            onChange={(e) => setNoteContent(e.target.value)}
                            placeholder="請輸入你的記事..."
                        />
                    </CardContent>
                    <CardFooter>
                        <Button onClick={addNoteData}>提交</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default NoteInputCard;

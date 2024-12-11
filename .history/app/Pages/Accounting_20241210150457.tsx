import axios from "axios";
import { useState, useEffect } from "react";
import NoteInputCard from "./commonPage/NoteInputCard";

const Note: React.FC = () => {
    const [inner, setInner] = useState<any[]>([]);
    const [err, setErr] = useState(null);
    const [showNoteInputCard, setShowNoteInputCard] = useState(false);

    const noteInner = async () => {
        try {
            const response = await axios.get('http://localhost:3000/accounts/1');
            if (response.status === 200) {
                setInner(response.data.date);
            } else {
                console.log("Error fetching data", response.status);
            }
        } catch (error: any) {
            setErr(error.message);
            console.log("Error in fetch function", error);
        }
    };

    useEffect(() => { noteInner(); }, []);

    const addNoteData = async (noteContent: string) => {
        try {
            const response = await axios.post('http://localhost:3000/accounts/1', {
                noteContent // Assuming your API accepts this structure
            });
            if (response.status === 200) {
                setInner([...inner, response.data]); // Update the state with the new note
            }
        } catch (error: any) {
            setErr(error.message);
            console.log("Error in post function", error);
        }
    };

    return (
        <div className="mt-20 ml-10 mr-10">
            <div className="mb-10 ">
                <button
                    className="border-gray-950 border-2 rounded-3xl p-3 mr-2"
                    onClick={() => setShowNoteInputCard(true)}
                >
                    新增記事
                </button>
                <button className="border-gray-950 border-2 rounded-3xl p-3">刪除記事</button>
            </div>
            <div className="flex absolute z-1 justify-center align-middle ">
                {showNoteInputCard && (
                    <NoteInputCard
                        onSubmit={(data) => {
                            addNoteData(data.noteContent);
                            setShowNoteInputCard(false);
                        }}
                        onClose={() => setShowNoteInputCard(false)}
                    />
                )}
            </div>
            <div className="border">
                {inner.length > 0 ? (
                    inner.map((item, index) => (
                        <div key={index} className="mb-4">
                            {item.noteID && (
                                <div>
                                    <div className="mb-2" key={item.noteDate}>
                                        {new Date(item.noteID.noteDate).toLocaleString()}
                                    </div>
                                    <div className="" key={item.noteID.id}>
                                        {item.noteID.noteInner}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>Something error that can't load date</div>
                )}
            </div>
        </div>
    );
};

export default Note;

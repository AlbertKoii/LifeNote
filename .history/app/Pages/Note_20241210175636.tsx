import axios from "axios"
import { useState , useEffect } from "react"
import { useFetcher } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";
import NoteInputCard from "./commonPage/NoteInputCard";



interface NoteProp{
    id?: number ;
    data: any[];
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<any[]>([])
    const [err , setErr] = useState(null)
    const [showNoteInputCard , setshowNoteInputCard] = useState(false)


    const noteInner = async () => {
        try {
          const response = await axios.get('http://localhost:3000/Notion/');
          console.log(response.data);
    
          if (response.status === 200) {
            if (response.data) {
                setInner(response.data); 
            } else {
              console.log("Error: Invalid data format", response.data);
            }
          } else {
            console.log("Error fetching data", response.status);
          }
        } catch (error:any) {
            setErr(error.message);
          console.log("Error in fetch function", error);
        }
      };

      useEffect (()=> { noteInner()},[])

      const CardShow = () => {
        setshowNoteInputCard(true);
      };

      const handleNoteSubmit = (data: NoteInputCardProps) => {
        // Handle the submitted note data here
        console.log("New note submitted:", data);
        setshowNoteInputCard(false); // Close the card after submission
      };
        
    
    return(
        <div className="mt-20 ml-10 mr-10">
            <div className="mb-10 ">
                <button 
                className="border-gray-950 border-2 rounded-3xl p-3 mr-2"
                onClick= {()=> CardShow()}
                >新增記事</button>
                {showNoteInputCard && (
                <NoteInputCard onSubmit={handleNoteSubmit} />
                )}
                <button className="border-gray-950 border-2 rounded-3xl p-3">刪除記事</button>
            </div>
            <div className="border">
            {
            inner.length > 0 ? (
                inner.map((item, index) => (
                <div key={index} className="mb-4">
                    {item.noteID && (
                    <div>
                        <div className="mb-2" key={item.date}>{new Date(item.date).toLocaleString()}</div>
                        <div className="grid grid-cols-[auto,1fr] gap-4">
                            <Checkbox className="m-0" key={item.noteID.noteCheckSt} />
                            <div className="" key={item.noteID}>
                            {item.noteID.noteInner}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                
                ))
            ) : (
                <div>Something error that can't load date</div>
            )
            }
            </div>

        </div>
    )
}

export default Note
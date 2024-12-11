import axios from "axios"
import { useState , useEffect } from "react"
import { useFetcher } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";
import NoteInputCard from "./commonPage/NoteInputCard";



interface NoteProp{
    id?: number ;
    date: any[];
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<any[]>([])
    const [err , setErr] = useState(null)
    const [showNoteInputCard , setshowNoteInputCard] = useState(false)
    const []

    const noteInner = async () => {
        try {
          const response = await axios.get('http://localhost:3000/accounts/1');
          console.log(response.data);
    
          if (response.status === 200) {
            if (response.data) {
                setInner(response.data.date); 
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

      const addNoteData = async () =>{
        try{
            const response = await axios.post('http://localhost:3000/accounts/1')
            console.log(response.data)
            
            setInner([...inner , response.data.Date]);
        }catch(error: any){
            setErr(error.message)
            console.log("Error in post function", error);
        }
      }
        
    
    return(
      <div className="mt-20 ml-10 mr-10">
      <div className="mb-10 ">
          <button 
          className="border-gray-950 border-2 rounded-3xl p-3 mr-2"
          onClick={() => setshowNoteInputCard(true)}
          >新增記事</button>
          
          <button className="border-gray-950 border-2 rounded-3xl p-3">刪除記事</button>
      </div>
      <div className="flex absolute z-1 justify-center align-middle ">
      {showNoteInputCard && (
          <NoteInputCard 
              onSubmit={(data) => {
                  addNoteData();
                  setshowNoteInputCard(false);
              }}
          />
      )}
      </div>
      <div className="border">
      {
      inner.length > 0 ? (
          inner.map((item, index) => (
          <div key={index} className="mb-4">
              {item.noteID && (
              <div>
                  <div className="mb-2" key={item.noteDate}>{new Date(item.noteID.noteDate).toLocaleString()}</div>
                  <div className="" key={item.noteID.id}>
                  {item.noteID.noteInner}
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
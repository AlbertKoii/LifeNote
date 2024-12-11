import axios from "axios"
import { useState , useEffect } from "react"
import { useFetcher } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";





interface NoteProp{
    id?: number ;
    date: any[];
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<any[]>([])
    const [err , setErr] = useState(null)

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
        
    
    return(
        <div className="mt-20 ml-10 mr-10">
            <div className="mb-10 ">
                <button className="border-gray-950 border-2 rounded-3xl p-3 mr-2">新增記事</button>
                <button className="border-gray-950 border-2 rounded-3xl p-3">刪除記事</button>
            </div>
            <div>
            {
            inner.length > 0 ? (
                inner.map((item, index) => (
                <div key={index}>
                    {item.noteID && (
                    <div className="grid grid-cols-[auto,1fr]">
                        <Checkbox className="m-0" key={item.noteID.noteCheckSt} />
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
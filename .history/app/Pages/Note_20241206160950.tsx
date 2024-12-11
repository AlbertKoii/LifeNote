import axios from "axios"
import { useState , useEffect } from "react"
import { useFetcher } from "react-router";




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
        <div>
            <div>
                <button>新增記事</button>
                <button>刪除記事</button>
            </div>
            {
                noteInner.length > 0? 
                    noteInner.map((item , index )=>(
                        <div key={index}>
                            {
                                
                            }
                        </div>
                        
                    )
                        
                    ):<div>Something error that can't load date</div>
            }

        </div>
    )
}

export default Note
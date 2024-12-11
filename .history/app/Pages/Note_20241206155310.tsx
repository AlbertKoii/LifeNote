import axios from "axios"
import { useState , useEffect } from "react"




interface NoteProp{
    id?: number ;
    date: any[];
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<any[]>([])
    const [err , setErr] = useState(null)

    const noteI = async () => {
        try {
          const response = await axios.get('http://localhost:3000/accounts/1');
          console.log(response.data);
    
          if (response.status === 200) {
            if (response.data) {
              setAccountData(response.data.date); 
            } else {
              console.log("Error: Invalid data format", response.data);
            }
          } else {
            console.log("Error fetching data", response.status);
          }
        } catch (error:any) {
          setError(error.message);
          console.log("Error in fetch function", error);
        }
      };
    
    

    
    return(
        <div>
            

        </div>
    )
}

export default Note
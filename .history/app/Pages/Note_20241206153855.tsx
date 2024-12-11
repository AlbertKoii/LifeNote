import axios from "axios"
import { useState , useEffect } from "react"




interface NoteProp{
    id?: number ;
    date: any[];
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<[]>

    const NoteInner = () =>{
            const response = axios.get('http://localhost:3000/accounts')
            console.log(response.data.date)

            if (response.status === 200)
        }
    }
    
    

    
    return(
        <div>
            

        </div>
    )
}

export default Note
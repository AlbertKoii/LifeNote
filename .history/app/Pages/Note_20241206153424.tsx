import axios from "axios"
import { useState , useEffect } from "react"




interface NoteProp{
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<[]>

    const NoteInner = () =>{
        try{
            response = axios.get()
        }
        
    }
    
    

    
    return(
        <div>
            

        </div>
    )
}

export default Note
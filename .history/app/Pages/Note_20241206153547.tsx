import axios from "axios"
import { useState , useEffect } from "react"




interface NoteProp{
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<[]>

    const NoteInner = () =>{

                
                response = axios.get('http://localhost:3000/accounts')
            
        }
        
    }
    
    

    
    return(
        <div>
            

        </div>
    )
}

export default Note
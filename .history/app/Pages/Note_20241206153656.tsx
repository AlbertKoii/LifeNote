import axios from "axios"
import { useState , useEffect } from "react"




interface NoteProp{
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<[]>

    const NoteInner = () =>{
            const response = axios.get('http://localhost:3000/accounts')
            

            try(response === 200){
                if (response.data){
                    setInner(response.data.d)
                }
            }
        }
        
    }
    
    

    
    return(
        <div>
            

        </div>
    )
}

export default Note
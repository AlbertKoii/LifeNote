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
            console.log(respones.)

            try(response === 200){
                if (response.data){
                    setInner(response.data.date)
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
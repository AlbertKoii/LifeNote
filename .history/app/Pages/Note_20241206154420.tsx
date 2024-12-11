import axios from "axios"
import { useState , useEffect } from "react"




interface NoteProp{
    id?: number ;
    date: any[];
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<[]>

    const NoteInner = () =>{

        try{
            const response = await axios.get('http://localhost:3000/accounts')
            console.log(response.data.date)

            if (response.status === 200){
                if (response.data){
                    setInner(response.data.date)
                }else{
                    console.log('Error Fetching data' , response.data)
                }else{
                    console.log("Data fetching error", response.status)
                }
            }catch(err){
                console.log("Error in Fetching function", err.me)
            }
        }
}
    
    

    
    return(
        <div>
            

        </div>
    )
}

export default Note
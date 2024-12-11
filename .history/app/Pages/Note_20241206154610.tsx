import axios from "axios"
import { useState , useEffect } from "react"




interface NoteProp{
    id?: number ;
    date: any[];
    
}


const Note: React.FC<NoteProp> =()=>{

    const [inner , setInner] = useState<[]>
    const [err , setErr] = useState<NoteProp>()

    const NoteInner = () =>{
        try{
            const response = await axios.get('http://localhost:3000/accounts')
            console.log(response.data);

            if (response.status === 200){
                if (response.data){
                    setInner(response.data.date)
                }else{
                    console.log('Error Fetching data' , response.data)
                }else{
                    console.log("Data fetching error", response.status)
                }
            }catch(err: any){
                setError(err.message)
                console.log("Error in Fetching function", err.message)
            }
        }
}
    
    

    
    return(
        <div>
            

        </div>
    )
}

export default Note
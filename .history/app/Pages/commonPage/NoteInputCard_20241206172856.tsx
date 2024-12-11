import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {useState , useEffect} from "react"
  
  interface NoteInputCardProps {
    noteID: number ,
    noteDate: [], 
    noteStatus: boolean,
    noteInner: string,
  }

  const NoteInputCard: React.FC<NoteInputCardProps>=()=>{

    return(
        <div></div>
    )
    
  }

  export default NoteInputCard;
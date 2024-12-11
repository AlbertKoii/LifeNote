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
   id?: string ;
   data: any[];
  }

  const NoteInputCard = ({ onSubmit }: { onSubmit: (data: NoteInputCardProps) => void })=>{
    const [id, setId] = useState('');
    const [data , setData] = useState([
        {
            id: '',
            noteDate:  new Date().toISOString().split('T')[0],
            noteCheckSt: false ,
            noteInner : '',
        }     
    ])
    
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit({ id , data});
    };
    
    const newDateData = () => {
        return new Date().toString();
    }
    
  
    return (
        <Card  className="justify-center">
        <CardHeader>
          <CardTitle>記事</CardTitle>
          <CardDescription>{newDateData()}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-rows-1">
            記事內容
            <input className="border"></input>
            </div>
        </CardContent>    
        <CardFooter>
            <button>Submit</button>
        </CardFooter>
      </Card>
    );
  };
  
  export default NoteInputCard;
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
        <Card>
        <CardHeader>
          <CardTitle>記事</CardTitle>
          <CardDescription>{newDateData()}</CardDescription>
        </CardHeader>
        <CardContent>
            記事內容
            <input className="border"></input>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );
  };
  
  export default NoteInputCard;
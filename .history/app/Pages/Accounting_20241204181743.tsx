import { useState , useEffect , FC } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios";





interface AccountingProps{
    "Id": number,
    "accountCheckSt": boolean,
    "Date": string,
    "accountInner" : string,
    "accountAmount" : number,
}


const Accounting:  React.FC<AccountingProps> = ()=>{

    const [accountingData, setAccountDate] = useState<AccountingProps[]>([])
    const [error, setError] = useState(null)
    
    const fatchItems = async () =>{
        try{ 
            const response = await axios.get('https://67501a3369dc1669ec19abda.mockapi.io/NoteData/AccountNotion')
            if (response.status === 200 ){
                setAccountDate(response.data)
            }
        }catch(err: any){
            setError(err.message) ;
            console.log("Error get function" , err)
        }
    } 
    useEffect(
    ()=>{fatchItems()},[]
    )
    
    
              
        return (
        <div className="m-0 p-0 w-screen">
            <div className="inline-grid grid-cols-3 gap-10 box-border ml-">
                <button className=" border-gray-950 border-2 rounded-3xl p-3">新增支出</button>
                <button className=" border-gray-950 border-2 rounded-3xl p-3">新增收入</button>
                <button className=" border-gray-950 border-2 rounded-3xl p-3">刪除</button>
            </div>
            <ul>
            {accountingData.map((field, index) => (
            <li key={index} className="grid grid-cols-4 gap-2">
              <Checkbox/>
              {accountCheckSt}
            </li>
          ))}
            </ul>
            
            
        
        
        </div>
    );
};

export default Accounting
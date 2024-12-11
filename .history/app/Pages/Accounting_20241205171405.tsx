import { useState , useEffect , FC } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios";





interface AccountingProps{
    "id": number, 
    "date": string ,
    "accountCheckSt": false,
    "accountInner": string,
    "accountAmount": number
}


const Accounting:  React.FC<AccountingProps> = ()=>{

    const [accountData, setAccountDate] = useState<AccountingProps[]>([])
    const [error, setError] = useState(null)
    
    const fatchItems = async () =>{
        try{ 
            const response = await axios.get('http://localhost:3000/accounts/1')
            console.log(response)
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
            {accountData.map((field) => (
                
                    <li key={field.id} className="grid grid-cols-4 gap-2">
                        <Checkbox 
                            checked={field.accountCheckSt} 
                            // onChange={() => handleCheckboxChange(field.accountCheckSt)}
                        />
                    <li>{field.accountInner}</li>
                    <li>{field.accountAmount}</li>
                    </li>
                
                ))}
            </ul>
            
        </div>
    );
};

export default Accounting
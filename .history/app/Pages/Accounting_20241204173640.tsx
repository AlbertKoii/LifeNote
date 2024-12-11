import { useState , useEffect , FC } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios";





interface AccountingProp{
    "Id": number,
    "CheckBoxStatus": boolean,
    "Date": string,
    "ItemInner" : string,
    "Amount" : number,
}


const Accounting:  React.FC<AccountingProp> = ()=>{

    const [accountingData, setAccountDate] = useState<AccountingProp[]>([
            {   Id: 0, 
                CheckBoxStatus: false,
                Date: new Date().toISOString().split('T')[0], 
                ItemInner: '', 
                Amount: 0 }
            ])
    const fatchItems = async () =>{
        const {data} = await axios.get('https://67501a3369dc1669ec19abda.mockapi.io/NoteData/AccountNotion')
        if (data.Success && Array.isArray(data.Data)){
            setAccountDate(data.Data.map((item: { DateOfBirth: string | number | Date; })=>{
                ...item,
            }))
        }
    }
    
              
        return (
        <div className="m-0 p-0 w-screen">
            <div className="inline-grid grid-cols-3 gap-10 box-border ml-">
                <button className=" border-gray-950 border-2 rounded-3xl p-3">新增支出</button>
                <button className=" border-gray-950 border-2 rounded-3xl p-3">新增收入</button>
                <button className=" border-gray-950 border-2 rounded-3xl p-3">刪除</button>
            </div>
            <ul>
                <Checkbox />
                {
                    
                }
            </ul>
            
            
        
        
        </div>
    );
};

export default Accounting
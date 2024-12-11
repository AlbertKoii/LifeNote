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
            setAccountDate(data.Data.map((item: { Date: string | number | Date; })=>({
                ...item,
                Date: new Date(item.Date).toISOString().split('T')[0],
            })));
        }else {
            console.error("Error fetching data:", data.Msg);
          }
        } 

        const handleInputChange = (index: number, field: keyof AccountingProps, value: any) => {
            setAccountDate(prev => prev.map((item, i) => i === index ? { ...item, [field]: value } : item));
          };
    
    
              
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
              <input className="border-black border-2 w-60" type="text" placeholder="記帳事件" value={field.Name} 
              onChange={(e) => handleInputChange(index, 'accountInner', e.target.value)} />
              <input className="border-black border-2 w-60" type="date" value={field.DateOfBirth} 
              onChange={(e) => handleInputChange(index, 'Date', e.target.value)} />
              <input className="border-black border-2 w-60" type="text" placeholder="Address" value={field.Address} 
              onChange={(e) => handleInputChange(index, 'Address', e.target.value)} />
              <Divider className="w-screen"/>
            </li>
          ))}
            </ul>
            
            
        
        
        </div>
    );
};

export default Accounting
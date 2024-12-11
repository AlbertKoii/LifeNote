import { useState , useEffect , FC } from "react"
import { Checkbox } from "@/components/ui/checkbox"




interface AccountingProp{
    "id": number,
    "Date": ,
    "ItemInner" : [],
    "Amount" : [],
    
}


const Accounting:  React.FC<AccountingProp> = ()=>{

    const [accountingData, setAccountDate] = useState<AccountingProp>()
    
    const AccountingForm: [
        {
            
        }
    ]
    
    

    
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
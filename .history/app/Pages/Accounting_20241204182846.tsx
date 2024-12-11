import { useState , useEffect , FC } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios";





interface AccountingProps{
    "accountingID": number,
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

    const handleCheckboxChange = async (accountingID: number) => {
        // 找到當前項目
        const currentItem = accountingData.find(item => item.accountingID === accountingID);
        
        if (currentItem) {
            // 切換狀態
            const updatedItem = { ...currentItem, accountCheckSt: !currentItem.accountCheckSt };

            try {
                // 發送 PUT 請求更新後端數據
                await axios.post(`https://67501a3369dc1669ec19abda.mockapi.io/NoteData/AccountNotion`, updatedItem);
                
                // 更新本地狀態
                setAccountDate(prevData =>
                    prevData.map(item =>
                        item.accountingID === accountingID ? updatedItem : item
                    )
                );
            } catch (err) {
                console.error("Error updating data:", err);
                setError("更新數據時出錯");
            }
        }
    };
    
    
              
        return (
        <div className="m-0 p-0 w-screen">
            <div className="inline-grid grid-cols-3 gap-10 box-border ml-">
                <button className=" border-gray-950 border-2 rounded-3xl p-3">新增支出</button>
                <button className=" border-gray-950 border-2 rounded-3xl p-3">新增收入</button>
                <button className=" border-gray-950 border-2 rounded-3xl p-3">刪除</button>
            </div>
            <ul>
            {accountingData.map((field) => (
                    <li key={field.accountingID} className="grid grid-cols-4 gap-2">
                        <Checkbox 
                            checked={field.accountCheckSt} 
                            onChange={() => handleCheckboxChange(field.accountingID)} // 當 Checkbox 變更時調用處理函數
                        />
                        <span>{field.accountInner}</span>
                        <span>{field.accountAmount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accounting
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
    
    const fatchItems = async () => {
        try {
            const response = await axios.get('http://localhost:3000/accounts/0');
            
            if (response.status === 200) {
                // 假設 response.data 是一個對象，並且 id 是一個屬性
                if (response.data.id) {
                    setAccountDate(response.data.id);  
                } else {
                    console.log("Error: Invalid data format", response.data);
                }
            } else {
                console.log("Error fetching data", response.status);
            }
        } catch (err) {
            setError(err.message);
            console.log("Error in fetch function", err);
        }
    };
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
            {accountData.length > 0 ?
            accountData.map((index) => (
                <div key={index.id}>
                    <div >
                        <Checkbox/>
                    </div>
                    <div key={index.date}>{index.date}</div>
                    <div key={index.accountInner}>{index.accountInner}</div>
                    <div key={index.accountAmount}>{index.accountAmount}</div>
                </div>
            ))
        : <div>Date Loading Failed</div>
        }
            
        </div>
    );
};

export default Accounting
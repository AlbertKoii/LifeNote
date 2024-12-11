import { useState, useEffect, FC } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";


interface AccountingProps {
  id?: number;
  date: any[];
}

const Accounting: React.FC<AccountingProps> = () => {
  const [accountData, setAccountData] = useState<any[]>([]); 
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Notion');
      console.log(response.data);

      if (response.status === 200) {
        if (response.data) {
          setAccountData(response.data); 
        } else {
          console.log("Error: Invalid data format", response.data);
        }
      } else {
        console.log("Error fetching data", response.status);
      }
    } catch (error:any) {
      setError(error.message);
      console.log("Error in fetch function", error);
    }
  };

  useEffect(() => { fetchItems(); }, []); 

  return (
    <div className="w-screen justify-center">
        <></>
        <div className="flex justify-center">
            <div className="inline-grid grid-cols-4 gap-10 justify-center font-black">
                <button className="border-gray-950 border-2 rounded-3xl p-3">新增支出</button>
                <button className="border-gray-950 border-2 rounded-3xl p-3">新增收入</button>
                <button className="border-gray-950 border-2 rounded-3xl p-3">刪除</button>
                <button className="border-gray-950 border-2 rounded-3xl p-3">新增支出總類</button>
            </div>
        </div>
        {accountData.length > 0 ?
            accountData.map((item, index) => (
            <div key={index} className="flex justify-center">
                {item.accountingId && (
                    <div className="grid grid-cols-3 gap-4 font-black">
                        <Checkbox key={item.accountCheckSt}/>
                        <div className="flex justify-center" key={item.}>{item.accountingId.accountInner}</div>
                        <div className="flex justify-center" key={item.accountingId.id}>{item.accountingId.accountAmount}</div>
                    </div>
                )} 
          </div>
        ))
        : <div>Date Loading Failed</div>}
    </div>
  );
};

export default Accounting;
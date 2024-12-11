import { useState, useEffect, FC } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

interface AccountingProps {
  id?: number;
  date: any[]; // Adjusted type to match the actual structure
}

const Accounting: React.FC<AccountingProps> = () => {
  const [accountData, setAccountData] = useState<any[]>([]); // Adjusted type to match the actual structure
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/accounts/1');
      console.log(response.data);

      if (response.status === 200) {
        if (response.data) {
          setAccountData(response.data.date); // Set accountData to the nested 'date' array in response.data
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

  useEffect(() => { fetchItems(); }, []); // Ensure fetchItems runs only once on mount

  return (
    <div className="w-screen">
      <div className="inline-grid grid-cols-3 gap-10 justify-center box-border">
        <button className="border-gray-950 border-2 rounded-3xl p-3">新增支出</button>
        <button className="border-gray-950 border-2 rounded-3xl p-3">新增收入</button>
        <button className="border-gray-950 border-2 rounded-3xl p-3">刪除</button>
      </div>
      {accountData.length > 0 ?
        accountData.map((item, index) => (
          <div key={index}>
            {item.accountingId && (
                <div className="grid grid-cols-3 gap-4">
                <Checkbox key={item.accountingId.id}/>
                <div key={item.accountingId.id}>{item.accountingId.accountInner}</div>
                <div key={item.accountingId.id}>{item.accountingId.accountAmount}</div>
                </div>
            )}
            
          </div>
        ))
        : <div>Date Loading Failed</div>}
    </div>
  );
};

export default Accounting;

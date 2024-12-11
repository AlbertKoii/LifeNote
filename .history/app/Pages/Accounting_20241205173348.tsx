import { useState, useEffect, FC } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

interface AccountingProps {
  "id": number,
  "date": string,
  "accountCheckSt": boolean,
  "accountInner": string,
  "accountAmount": number
}

const Accounting: React.FC<AccountingProps> = () => {

  const [accountData, setAccountData] = useState<AccountingProps[]>([]);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/accounts/1');
      console.log(response);

      if (response.status === 200) {
        // Check if response.data is an array or object
        if (Array.isArray(response.data)) {
          setAccountData(response.data);
        } else {
          // Handle case where response.data is not an array
          setError("Invalid data format");
          console.log("Error: Invalid data format", response.data);
        }
      } else {
        setError("Failed to fetch data");
        console.log("Error fetching data", response.status);
      }
    } catch (err: any) {
      setError(err.message);
      console.log("Error fetching function", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="m-0 p-0 w-screen">
      <div className="inline-grid grid-cols-3 gap-10 box-border ml-">
        <button className="border-gray-950 border-2 rounded-3xl p-3">新增支出</button>
        <button className="border-gray-950 border-2 rounded-3xl p-3">新增收入</button>
        <button className="border-gray-950 border-2 rounded-3xl p-3">刪除</button>
      </div>
      {accountData.length > 0 ? (
        accountData.map((item) => (
          <div key={item.id}>
            <Checkbox key={item.accountCheckSt} />
            <div key={item.date}>{item.date}</div>
            <div key={item.accountInner}>{item.accountInner}</div>
            <div key={item.accountAmount}>{item.accountAmount}</div>
          </div>
        ))
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
};

export default Accounting;

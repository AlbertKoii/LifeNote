import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

interface AccountingProps {
  id?: number;
  date: any[];
}

const Accounting: React.FC<AccountingProps> = () => {
  const [accountData, setAccountData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Notion');
        console.log(response.data);

        if (response.status === 200) {
          if (response.data) {
            setAccountData(response.data);
          } else {
            setError("Error: Invalid data");
          }
        } else {
          setError(`Error: ${response.statusText}`);
        }
      } catch (error) {
        setError(`Error: ${error.message}`);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {accountData.length > 0 ? (
        accountData.map((item) => (
          <div key={item.id} className="flex justify-center">
            {item.noteID?.noteInner !== null && item.noteID?.noteInner !== undefined ? (
              <div className="grid grid-cols-4 gap-4 font-black">
                <Checkbox checked={item.accounting?.noteST} />
                <div className="flex justify-center">{item.accounting?.accountInner}</div>
                <div className="flex justify-center">{item.accounting?.accountField}</div>
                <div className="flex justify-center">{item.accounting?.accountAmount}</div>
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div>Data Loading Failed</div>
      )}
    </div>
  );
};

export default Accounting;

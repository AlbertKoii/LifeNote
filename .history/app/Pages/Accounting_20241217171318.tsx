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
    } catch (error: any) {
      setError(error.message);
      console.log("Error in fetch function", error);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  return (
    <div className="w-screen justify-center">
      <div className="flex justify-center">
        <div className="inline-grid grid-cols-1 gap-4">
          {accountData.map((item: any, index: number) => (
            // 條件判斷：如果 noteInner 為空值或 undefined，則顯示該項目
            (item.noteID?.noteInner === null || item.noteID?.noteInner === undefined) && (
              <div key={index} className="flex items-center gap-2">
                <Checkbox />
                <div className="flex flex-col">
                  <span className="font-medium">{item.date}</span>
                  <span className="text-sm text-muted-foreground">{item.noteID?.noteST}</span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accounting;

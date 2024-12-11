import { useState, useEffect, FC } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"

  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
  ]

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
    <div className="w-screen justify-center">
        <></>
        <div className="flex justify-center">
            <div className="inline-grid grid-cols-3 gap-10 justify-center font-black">
                <button className="border-gray-950 border-2 rounded-3xl p-3">新增支出</button>
                <button className="border-gray-950 border-2 rounded-3xl p-3">新增收入</button>
                <button className="border-gray-950 border-2 rounded-3xl p-3">刪除</button>
            </div>
        </div>
        {accountData.length > 0 ?
            accountData.map((item, index) => (
            <div key={index} className="flex justify-center">
                {item.accountingId && (
                    <div className="grid grid-cols-3 gap-4 font-black">
                        <Checkbox key={item.accountingId.id}/>
                        <div className="flex justify-center" key={item.accountingId.id}>{item.accountingId.accountInner}</div>
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

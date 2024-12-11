import { useState, useEffect, FC } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

interface AccountingProps {
    accountingID: number;
    accountCheckSt: boolean;
    accountInner: string;
    accountAmount: number;
}

const Accounting: FC = () => {
    const [accountingData, setAccountDate] = useState<AccountingProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchItems = async () => {
        try {
            const response = await axios.get('https://67501a3369dc1669ec19abda.mockapi.io/NoteData/AccountNotion');
            if (response.status === 200) {
                setAccountDate(response.data);
            }
        } catch (err: any) {
            setError(err.message);
            console.log("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // 處理 Checkbox 狀態變更
    const handleCheckboxChange = (accountingID: number) => {
        setAccountDate(prevData =>
            prevData.map(item =>
                item.accountingID === accountingID 
                    ? { ...item, accountCheckSt: !item.accountCheckSt } // 切換狀態
                    : item
            )
        );
    };

    return (
        <div className="m-0 p-0 w-screen">
            <div className="inline-grid grid-cols-3 gap-10 box-border">
                <button className="border-gray-950 border-2 rounded-3xl p-3">新增支出</button>
                <button className="border-gray-950 border-2 rounded-3xl p-3">新增收入</button>
                <button className="border-gray-950 border-2 rounded-3xl p-3">刪除</button>
            </div>
            {error && <p className="text-red-500">錯誤: {error}</p>} {/* 顯示錯誤信息 */}
            <ul>
                {accountingData.map((field) => (
                    <li key={field.accountingID} className="grid grid-cols-4 gap-2">
                        <Checkbox 
                            checked={field.accountCheckSt} 
                            onChange={() => handleCheckboxChange(field.accountingID)} // 當 Checkbox 變更時調用處理函數
                        />
                        <span>{field.accountingID}</span>
                        <span>{field.accountInner}</span>
                        <span>{field.accountAmount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accounting;
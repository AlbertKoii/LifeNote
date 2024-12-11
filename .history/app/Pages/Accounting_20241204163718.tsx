import { useState , useEffect , FC } from "react"



interface AccountingProp{
    
}


const Accounting:  React.FC<AccountingProp> = ()=>{
    
    

    
        return (
        <div className="m-0 p-0 w-screen">
            <div className="inline-grid grid-cols-4 gap-10 box-border ml-">
                <button className=" border-gray-950 border-2 rounded-3xl p-3">新增支出</button>
                <button className=" border-gray-950 border-2 rounded-3xl p-3">新增收入</button>
                <button className=" border-gray-950 border-2 rounded-3xl p-3">刪除</button>
            </div>
            
        
        
        </div>
    );
};

export default Accounting
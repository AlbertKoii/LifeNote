import { useState , useEffect , FC } from "react"



interface AccountingProp{
    
}


const Accounting:  React.FC<AccountingProp> = ()=>{
    
    

    
        return (
        <div className="m-0 p-0 w-screen">
            <div>
                <button className="border-size">新增支出</button>
                <button>刪除支出</button>
                <button>新增收入</button>
                <button>刪除收入</button>
            </div>
            
        
        
        </div>
    );
};

export default Accounting
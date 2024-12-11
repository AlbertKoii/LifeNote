import { useState , useEffect } from "react"


import { GiTakeMyMoney } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { RiCriminalLine } from "react-icons/ri";

import { useNavigate , Link } from "react-router";




interface MainLayoutProps{
    
}



const MainLayout : React.FC<MainLayoutProps> = () =>{


const [pageKey, setPageKey] = useState<string | null>(null);
const [isClicked, setIsClicked] = useState<boolean>(false); 
const navigate = useNavigate();

// const [LoginStatus , setLoginStatus] = useState(false)
// const [AccountArray , setAccountArray] = useState<[
//   Account : string,
//   Password : string
// ]>

useEffect(() => {
    if (isClicked && pageKey) {
        switch (pageKey) {
            case '1':
                navigate("/Accounting");
                break;
            case '2':
                navigate("/common/Note");
                break;
            case '3':
                navigate("/common/RemixData");
                break;
            default:
                console.log('無法找到對應的頁面');
        }
        // 重置 isClicked 為 false，以便下一次點擊時能再次觸發導航
        setIsClicked(false);
    }
}, [isClicked, pageKey, navigate])


const handleChangePage = (key: string) => {
    setIsClicked(true);
    setPageKey(key);
};

    return (
        <div className="w-screen grid grid-rows-2 ">
            <h1 className="flex items-center justify-center h-fit mt-40 text-4xl">
                選擇紀錄內容
            </h1>
            <div className="w-screen grid grid-cols-3 gap-4">
                <div 
                    className="flex justify-center items-center border-black border-4 rounded-full bg-red-300"
                    key="1"
                    onClick={() => handleChangePage("1")}>
                    <div>
                        <GiTakeMyMoney className="text-[15rem]" />
                        <div className="flex justify-center items-center text-2xl">記帳</div>
                    </div>
                </div>
                <div 
                    className="flex justify-center items-center border-black border-4 rounded-full bg-blue-300"
                    key="2"
                    onClick={() => handleChangePage("2")}>
                    <div>
                        <BiTask className="text-[15rem]" />
                        <div className="flex justify-center items-center text-2xl">記事</div>
                    </div> 
                </div>
                <div 
                    className="flex justify-center items-center border-black border-4 rounded-full bg-yellow-300"
                    key="3"
                    onClick={() => handleChangePage("3")}>
                    <div>
                        <RiCriminalLine className="text-[15rem]" />
                        <div className="flex justify-center items-center text-2xl">總紀錄</div>
                    </div>
                </div>
            </div>

            {/* 根據 isClicked 顯示 Link */}
            {isClicked && (
                <div className="mt-4 text-center">
                    {/* 根據 pageKey 顯示不同的 Link */}
                    {pageKey === '1' && <Link to="/login">Login again</Link>}
                    {pageKey === '2' && <Link to="/login">Login again</Link>}
                    {pageKey === '3' && <Link to="/login">Login again</Link>}
                </div>
            )}
        </div>
    );
}


export default MainLayout;



import { useState , useEffect } from "react"


import { GiTakeMyMoney } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { RiCriminalLine } from "react-icons/ri";

import { useNavigate , Link } from "react-router";




interface MainLayoutProps{
    
}



const MainLayout : React.FC<MainLayoutProps> = () =>{


// const [LoginStatus , setLoginStatus] = useState(false)
// const [AccountArray , setAccountArray] = useState<[
//   Account : string,
//   Password : string
// ]>
const [pageKey, setPageKey] = useState<string | null>(null);
const [clickStatus, setClickStatus] = useState<boolean>(false);

const handleChangePage = (key: string) => {
    setClickStatus(true);
    setPageKey(key);
};

return (
    <div className="w-screen grid grid-rows-2">
        <h1 className="flex items-center justify-center h-fit mt-40 text-4xl">
            選擇紀錄內容
        </h1>
        <div className="w-screen grid grid-cols-3 gap-4">
            {clickStatus && pageKey === "1" ? (
                <Link to="./Accounting" />
            ) : (
                <div
                    className="flex justify-center items-center border-black border-4 rounded-full bg-red-300 cursor-pointer"
                    key="1"
                    onClick={() => handleChangePage("1")}
                >
                    <div>
                        <GiTakeMyMoney className="text-[15rem]" />
                        <div className="flex justify-center items-center text-2xl">記帳</div>
                    </div>
                </div>
            )}

            <div
                className="flex justify-center items-center border-black border-4 rounded-full bg-blue-300 cursor-pointer"
                key="2"
                onClick={() => handleChangePage("2")}
            >
                <div>
                    <BiTask className="text-[15rem]" />
                    <div className="flex justify-center items-center text-2xl">記事</div>
                </div>
            </div>

            <div
                className="flex justify-center items-center border-black border-4 rounded-full bg-yellow-300 cursor-pointer"
                key="3"
                onClick={() => handleChangePage("3")}
            >
                <div>
                    <RiCriminalLine className="text-[15rem]" />
                    <div className="flex justify-center items-center text-2xl">總紀錄</div>
                </div>
            </div>
        </div>
    </div>
);
};

export default MainLayout;



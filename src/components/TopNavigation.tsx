import { useTelegramContext } from '../context/TelegramContext';
import { FaUserTie } from "react-icons/fa6";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

export default function TopNavigation() {
    const { telegramUser } = useTelegramContext();
    return (
        <div
            className={`fixed top-0 w-full py-2 z-10 bg-zinc-950 border-b-2 border-zinc-400 rounded-b-lg `}
        >
            <div className='flex justify-between items-center px-2 '>
                <div className={`flex flex-col justify-center items-center bg-gray-800 p-1 rounded-md w-14 h-12 `}>
                    <div>{<FaUserTie size={20} className='text-green-400' />}</div>
                    <div className={`text-xs pt-1 text-green-400 font-bold`}>{telegramUser?.username}</div>
                </div>
                <div className={`flex flex-col justify-center items-center bg-gray-800 p-1 rounded-md  w-14 h-12`}>
                    <div>{<RiMoneyRupeeCircleLine size={20} className='text-orange-400' />}</div>
                    <div className={`text-xs pt-1 text-orange-400 font-bold`}>{1000}</div>
                </div>
            </div>
        </div>

    )
}

import React, { useState } from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import { BiBitcoin } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { PiCoins } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";
import { useTelegramContext } from '../context/TelegramContext';
import { FaUserTie } from "react-icons/fa6";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const NavigationOptions = [
    { title: 'Exchange', Icon: MdCurrencyExchange, iconClass: 'text-green-400', titleClass: 'text-green-400 font-bold', isActive: false },
    { title: 'Mine', Icon: BiBitcoin, iconClass: 'text-red-400', titleClass: 'text-red-400 font-bold', isActive: false },
    { title: 'Friends', Icon: FaUsers, iconClass: 'text-pink-400', titleClass: 'text-pink-400 font-bold', isActive: false },
    { title: 'Earn', Icon: PiCoins, iconClass: 'text-orange-400', titleClass: 'text-orange-400 font-bold', isActive: false },
    { title: 'Airdrop', Icon: BsCashCoin, iconClass: 'text-blue-400', titleClass: 'text-blue-400 font-bold', isActive: false },
]
export default function TopNavigation() {
    const { telegramUser } = useTelegramContext();
    // console.log("telegramUser ", telegramUser)
    const [navigation, setNavigation] = useState(NavigationOptions);
    const setNavigationStatus = (tabIndex: number) => {
        console.log(' INDEX: ', tabIndex);
        const nav = navigation.map((item, index) => {
            return { ...item, isActive: index == tabIndex }
        })
        setNavigation(nav)
    }
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
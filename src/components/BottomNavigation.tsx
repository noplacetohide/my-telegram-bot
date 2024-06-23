import { useState } from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import { BiBitcoin } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { PiCoins } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";

const NavigationOptions = [
    { title: 'Exchange', Icon: MdCurrencyExchange, iconClass: 'text-green-400', titleClass: 'text-green-400 font-bold', isActive: true },
    { title: 'Mine', Icon: BiBitcoin, iconClass: 'text-red-400', titleClass: 'text-red-400 font-bold', isActive: false },
    { title: 'Friends', Icon: FaUsers, iconClass: 'text-pink-400', titleClass: 'text-pink-400 font-bold', isActive: false },
    { title: 'Earn', Icon: PiCoins, iconClass: 'text-orange-400', titleClass: 'text-orange-400 font-bold', isActive: false },
    { title: 'Airdrop', Icon: BsCashCoin, iconClass: 'text-blue-400', titleClass: 'text-blue-400 font-bold', isActive: false },
]
export default function BottomNavigation() {
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
            className={`fixed bottom-0 w-full py-2 z-10   bg-zinc-950 border-t-2 border-zinc-400 rounded-t-lg`}
        >
            <div className="grid grid-cols-5 gap-2 justify-items-center px-2 ">
                {navigation.map((nav, index) => (
                    <div className={`w-full flex flex-col justify-center items-center ${nav.isActive ? ' bg-gray-800 p-1 rounded-md' : ''}`} key={index} onClick={() => setNavigationStatus(index)}>
                        <div>{<nav.Icon size={20} className={nav.iconClass} />}</div>
                        <div className={`text-xs pt-1 ${nav.titleClass}`}>{nav.title}</div>
                    </div>
                ))}
            </div>
        </div>

    )
}

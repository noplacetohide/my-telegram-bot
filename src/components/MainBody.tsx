import React, { useEffect, useState } from 'react'
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { bear, coin, highVoltage, notcoin, rocket, trophy } from '../images';
import { IoIosArrowForward } from "react-icons/io";

export default function MainBody() {

    const [points, setPoints] = useState(298923);
    const [energy, setEnergy] = useState(2532);
    const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
    const pointsToAdd = 12;
    const energyToReduce = 12;

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (energy - energyToReduce < 0) {
            return;
        }
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPoints(points + pointsToAdd);
        setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);
        setClicks([...clicks, { id: Date.now(), x, y }]);
    };

    const handleAnimationEnd = (id: number) => {
        setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
    };
    const formatNumber = (points: number) => {
        const obj1 = new Intl.NumberFormat('en-US');
        return obj1.format(points);
    }
    return (
        <div className='h-screen w-full flex justify-centers items-center flex-col py-24 gap-4'>
            <div className="w-full cursor-pointer">
                <div className="bg-[#1f1f1f] text-center py-2 rounded-xl">
                    <a href='https://www.web3agent.io/' target='_blank'>
                        <p className="text-lg">Visit Web3Agent <IoIosArrowForward size={18} className="ml-0 mb-1 inline-block" /></p>
                    </a>
                </div>
            </div>
            <div className='flex items-center justify-center gap-1 text-4xl text-orange-300 font-medium'>
                <RiMoneyRupeeCircleFill className='w-12 h-12 text-orange-300' /> {formatNumber(points)}
            </div>
            <div className='flex items-center justify-center gap-1 text-4xl'>
                <div className="relative mt-2" onClick={handleClick}>
                    <img src={notcoin} width={256} height={256} alt="notcoin" />
                    {clicks.map((click) => (
                        <div
                            key={click.id}
                            className="absolute text-5xl font-bold opacity-0"
                            style={{
                                top: `${click.y - 42}px`,
                                left: `${click.x - 28}px`,
                                animation: `float 1s ease-out`
                            }}
                            onAnimationEnd={() => handleAnimationEnd(click.id)}
                        >
                            12
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-2 text-gray-400'>
                Tap and Earn in Cryptos!
            </div>
        </div>
    )
}

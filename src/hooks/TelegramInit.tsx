import React, { useEffect } from 'react';

const TelegramInit: React.FC = ({ children }: any) => {
    useEffect(() => {
        console.log("WINDOW: ", window)
        const initData = (window as any)?.Telegram?.WebApp?.initData;
        console.log("TELEGRAM DATA: ", initData)
    }, []);
    return (
        <div>
            {children}
        </div>
    );
};

export default TelegramInit;
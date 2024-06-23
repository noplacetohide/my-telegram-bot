import React, { useEffect } from 'react';

const TelegramInit = ({ children }: { children: React.ReactNode }) => {
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
import { createContext, useContext, useState, useEffect } from 'react'
import queryString from 'query-string';
const INIT_VALUE: any = {

}
export const BottomTabInfoContext = createContext(INIT_VALUE);

export const useTelegramContext = () => {
    const context = useContext(BottomTabInfoContext);
    if (context === undefined) {
        throw new Error("BottomTabInfoContext must be used within provider");
    }
    return context;
};
export function BottomTabActionProvider({ children }: { children: React.ReactNode }) {
    const [telegramUser, setTelegramUser] = useState({})
    useEffect(() => {
        try {
            console.log("WINDOW: ", window)
            const initData = (window as any)?.Telegram?.WebApp?.initData;
            console.log("TELEGRAM DATA->: ", initData)
            const parsed: any = queryString.parse('query_id=AAHH5IQvAgAAAMfkhC_QdgAH&user=%7B%22id%22%3A5092205767%2C%22first_name%22%3A%22Kalakar%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22kalakar0%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1719108761&hash=d5c1a0d69177179e05b8165dd1c2fa8733e6be13673b89dd202ce2dfccdba507');
            console.log("parsed ", JSON.parse(parsed?.user))
            setTelegramUser(JSON.parse(parsed?.user))
        } catch (error) {
            console.log("ERROR", error)
        }
    }, []);
    return (
        <BottomTabInfoContext.Provider value={{
            telegramUser
        }}>
            {children}
        </BottomTabInfoContext.Provider>
    )
}

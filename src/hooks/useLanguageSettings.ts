import { useEffect, useState } from "react";
import { useUser } from "./useUser";


export const useLanguageSettings = (): number => {
    const user = useUser();
    const [langCode, setLangCode] = useState<number>(0);

    const detectedLanguage: string = window.navigator.language; 

    useEffect(() => {
        if (user === null) {
            setLangCode((): number => {
                if (detectedLanguage === "pl") {
                    return 0;
                }
                else {
                    return 1;
                }
            })
        }
        else {
            setLangCode(user?.language);
        }
    }, [user, detectedLanguage])

    return langCode;
}
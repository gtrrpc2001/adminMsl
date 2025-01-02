import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent));
        };

        checkMobile(); // 초기 확인

        window.addEventListener('resize', checkMobile); // 사이즈 변경 시 확인

        return () => {
            window.removeEventListener('resize', checkMobile); // 언마운트 시 이벤트 제거
        };
    }, []);

    return isMobile;
};
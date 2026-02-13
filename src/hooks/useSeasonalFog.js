import { useState, useEffect } from 'react';

export const useSeasonalFog = () => {
    const [isFoggySeason, setIsFoggySeason] = useState(false);

    useEffect(() => {
        const checkSeason = () => {
            const month = new Date().getMonth(); // 0-indexed (Nov=10, Dec=11, Jan=0)
            const foggyMonths = [10, 11, 0];
            setIsFoggySeason(foggyMonths.includes(month));
        };

        checkSeason();
    }, []);

    return { isFoggySeason };
};

import { useEffect, useState } from "react";

const MAX_REQUESTS_PER_SECOND = 10;

export const useFirestoreWithRateLimiting = () => {
    const [tokenCount, setTokenCount] = useState(MAX_REQUESTS_PER_SECOND);
    const [canMakeRequest, setCanMakeRequest] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTokenCount((prevTokenCount) =>
                Math.min(prevTokenCount + 1, MAX_REQUESTS_PER_SECOND)
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const makeRequest = async (cb: () => Promise<void>) => {
        if (!canMakeRequest || tokenCount <= 0) return;
        setCanMakeRequest(false);
        setTokenCount((prevTokenCount) => prevTokenCount - 1);
        try {
            await cb();
        } finally {
            setCanMakeRequest(true);
        }
    };

    return { makeRequest };
};

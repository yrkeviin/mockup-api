const isClient = typeof window !== 'undefined';

export const getSessionsStorage = (key, initialValue) => {
    if (!isClient) return initialValue;

    const stored = sessionStorage.getItem(key);

    return stored ? JSON.parse(stored) : initialValue;
}

export const setSessionStorage = (key, value) => {
    if (isClient) {
        setSessionStorage.setItem(key, JSON.stringify(value));
    }
}
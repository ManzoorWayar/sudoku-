import { useState, useEffect } from 'react';

const getSavedValue = (key: any, initialValue: any) => {
    const savedValue = JSON.parse(localStorage.getItem(key) || '{}');

    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();

    return initialValue;
}

const useLocalStorage = (key: any, initialValue: any) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
        localStorage.setItem('clickValue', '1')
    }, [key, value])

    localStorage.setItem('clickValue', '1')

    return [value, setValue];
}

export default useLocalStorage;

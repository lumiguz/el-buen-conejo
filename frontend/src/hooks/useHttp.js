import { useCallback, useState } from "react"

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const sendRequest = useCallback(
        async (url, method = 'GET', body = null) => {
            setIsLoading(true);
            setError(null);
            setData(null);
            try {
                const response = await fetch(url, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers: body ? { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        //'Authorization': 'Bearer ' + localStorage.getItem('token')
                    } : {}
                });

                if (!response.ok) {
                    throw new Error('Request failed!');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message || 'Something went wrong!');
            }
            setIsLoading(false);
        }, []
    );
    return { isLoading, error, data, sendRequest };
}
import { useCallback, useState } from "react"

export const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4NDkyMDcxLCJpYXQiOjE2OTg0MDU2NzEsImp0aSI6IjczODJkNDE1OGY4NDRhZTVhNjA3NGEzMmJhYzU4ZTI0IiwidXNlcl9pZCI6ImI1NmU0YzYwLTNhMDItNDJiZS1iZjNhLWJkNjE5ZThiODEwZSJ9.eKuAogU9nT9UjRUj9AErJ0jR28j-P_Q0q083_XQd7AI"
}

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const sendRequest = useCallback(
        async (url, method = 'GET', body = null, dinamicHeaders) => {
            setIsLoading(true);
            setError(null);
            setData(null);

            try {
                const response = await fetch(url, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers: dinamicHeaders
                });

                if (!response.ok) {
                    throw new Error('Request failed!');
                }

                const data = await response.json();
                console.log(data)
                setData(data);

            } catch (error) {
                console.error(error.message);
                setError(error.message || 'Something went wrong!');
            }
            setIsLoading(false);
        }, []
    );

    return { isLoading, error, data, sendRequest };
}
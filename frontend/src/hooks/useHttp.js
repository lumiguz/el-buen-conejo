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
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4NTg4ODk4LCJpYXQiOjE2OTg1MDI0OTgsImp0aSI6ImUyYTIxMTNkZjk4ZDQ3NWQ5ZWVhY2UyMGVhZmRlOWYxIiwidXNlcl9pZCI6ImI1NmU0YzYwLTNhMDItNDJiZS1iZjNhLWJkNjE5ZThiODEwZSJ9.NoS4vTOYIXsJbxYi4TWwETiHfdk6Iz9SseXFd_RZBr8"
                    }
                });

                if (!response.ok) {
                    throw new Error('Request failed!');
                }

                const data = await response.json();
                setData(data);

            } catch (error) {
                console.log(error);
                setError(error.message || 'Something went wrong!');
            }
            setIsLoading(false);
        }, []
    );

    return { isLoading, error, data, sendRequest };
}
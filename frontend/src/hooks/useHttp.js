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
                        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MjU5OTYxLCJpYXQiOjE2OTgxNzM1NjEsImp0aSI6IjlkNWE5MTdlOTg2YTQ5ZGM4NDJmNjQ4YTQ3ZGU4MWJkIiwidXNlcl9pZCI6ImM0MTAxMTI5LTgzMWEtNGFmNC04Nzk2LWU5ZTVmOTU2NDBmNSJ9.slHVTvQUeGdYXXNRI6NcuPui6qfjUV17yyY2edY3VMY"
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
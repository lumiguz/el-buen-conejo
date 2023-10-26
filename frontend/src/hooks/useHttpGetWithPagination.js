import { useState, useCallback } from "react";

const useHttpGetWithPagination = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const sendRequest = useCallback(async (url) => {
        setIsLoading(true);
        setError(null);
        try {
            let allData = [];
            let nextPageUrl = url;
            while (nextPageUrl) {
                const response = await fetch(nextPageUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MzQwNzIyLCJpYXQiOjE2OTgyNTQzMjIsImp0aSI6ImE2YzVlNzI5NDYxZjRjNGU4OGRlYmFiYmI0NzZiNGQ5IiwidXNlcl9pZCI6ImM0MTAxMTI5LTgzMWEtNGFmNC04Nzk2LWU5ZTVmOTU2NDBmNSJ9.5LCIjuLFKipjGPWN_WDPSXcOodTGa_Al_UYtDFt5ag8"
                    }
                });
                if (!response.ok) {
                    throw new Error('Request failed!');
                }
                const pageData = await response.json();
                allData.push(...pageData.results);
                nextPageUrl = pageData.next_link;
            }
            setData(allData);
        } catch (error) {
            console.log(error);
            setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return { isLoading, error, data, sendRequest };
};

export default useHttpGetWithPagination;

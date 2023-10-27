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
                        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4NDAyMjg1LCJpYXQiOjE2OTgzMTU4ODUsImp0aSI6ImMyNjgzNDM0ZDJkMzQ1OGM4M2ZjZjQ1ZDZiNTZjOGU1IiwidXNlcl9pZCI6ImI1NmU0YzYwLTNhMDItNDJiZS1iZjNhLWJkNjE5ZThiODEwZSJ9.yfjMdGUlx9kkY6ivDxTx5NsrzHu6cM1N2lgZaxo3shg"
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

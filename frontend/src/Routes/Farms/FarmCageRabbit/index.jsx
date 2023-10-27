import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import useHttpGetWithPagination from "../../../hooks/useHttpGetWithPagination";

const Index = () => {
    const id = useLoaderData();
    console.log(id);

    const { isLoading, data, error, sendRequest } = useHttpGetWithPagination();
    useEffect(() => {
        sendRequest(`https://apiebc.online/api`);
    }, [sendRequest, id]);

  return (
    <div></div>
  )
}

export default Index
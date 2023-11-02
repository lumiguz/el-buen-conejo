import styles from "../CageDetails/ViewDetails.module.css";
import { Link, useLocation, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import useHttpGetWithPagination from "../../../hooks/useHttpGetWithPagination";
import { apiUrls } from "../../../utils/links";


const ViewDetails = () => {

    const id = useLoaderData();
    console.log(id);
    const navigate = useNavigate();
    const location = useLocation();

    const { isLoading, data, error, sendRequest } = useHttpGetWithPagination();
    useEffect(() => {
        sendRequest(`${apiUrls.urlRabbits}?cage_id=${id.cageId}`);
    }, [sendRequest, id]);
    console.log(data);

    return (
        <>

            <nav className={styles.navFlex}>
                <Link to="/profile"
                    className={location.pathname === "/profile" ? styles.breadcrumbActive : styles.breadcrumbNotActive}
                >
                    Perfil
                </Link>
                    <span className={styles.breadcrumbArrow}>&gt;</span>
                <Link to="/cage/details"
                    className={location.pathname.startsWith("/cage/details") ? styles.breadcrumbActive : styles.breadcrumbNotActive}
                >
                    Jaula
                </Link>
            </nav>

            <section className={styles.flexContainerDetails}>

                <div className={styles.card}>
                    <label className={styles.labelPrivacy}>
                        Publico o privado
                    </label>
                    <label className={styles.labelName}>
                        Nombre de la jaula: {id.cageId}
                    </label>
                    <label className={styles.labelGender}>
                        Macho
                    </label>

                </div>

                <div className={styles.divBtn}>
                    <button onClick={() => navigate('/cage/details/edit')} className={styles.buttonEditar}> Editar </button>
                </div>


                <div className={styles.flexContainerDetailsDiv1}>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {data &&
                        data.map((rabbit) => (
                            <div
                            key={rabbit.id}
                            className={`card ${styles.cardSize} m-4 shadow ${rabbit.genre === 'Hembra' ? styles.backColorF : styles.backColor}`}
                            >
                            <img
                                src={rabbit.photo}
                                alt='rabbitProfile'
                                className={`card-img-top img-fluid rounded ${styles.imgSize} mt-2`}
                            />

                            <div className='card-body'>
                                <h6 className='card-subtitle mb-2'>
                                <span className='fw-bold'>Raza: </span>
                                {rabbit.breed}
                                </h6>
                                {/* Genre */}
                                <p className='card-text'>
                                <span className='fw-bold'>Genero: </span>
                                {rabbit.genre}
                                </p>
                                {/* Age */}
                                <p className='card-text'>
                                <span className='fw-bold'>Edad: </span>
                                {rabbit.age}
                                </p>
                                {/* birth date */}
                                <p className='card-text'>
                                <span className='fw-bold'>
                                    Fecha de Nacimiento: <br />
                                </span>
                                {rabbit.birthday}
                                </p>
                                {/* Weight */}
                                <p className='card-text'>
                                <span className='fw-bold'>Peso: </span>
                                {rabbit.weight}Kg
                                </p>
                                {/* Price */}
                                <p className='card-text'>
                                <span className='fw-bold'>Precio: </span>${rabbit.price} MXN
                                </p>
                            </div>
                            </div>
                        ))}
                    
                </div>

                
            </section>
        </> 
    );
};

export default ViewDetails;
import styles from "../CageDetails/ViewDetails.module.css";
import { useNavigate } from "react-router-dom";



const ViewDetails = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className={styles.flexContainerDetails}>
                <div className={styles.flexContainerDetailsDiv1}>
                    <h1>Detalles</h1>
                    {/* TODO: Made the details view */}
                    <button onClick={() => navigate('/cage/details/edit')} className={styles.buttonEditar}> Editar </button>
                </div>

                
            </section>
        </> 
    );
};

export default ViewDetails;
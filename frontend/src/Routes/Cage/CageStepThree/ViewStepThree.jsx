import styles from "../CageStepThree/ViewStepThree.module.css";
import { useNavigate } from "react-router-dom";
import rectangle3 from "../../../assets/rectangle3.png";


const ViewStepThree = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className={styles.flexContainerThree}>
                <div className={styles.flexContainerThreeDiv1}>
                    <h6>Paso 3</h6>
                    <h1>Añade los conejos</h1>
                    <p className={styles.instructionsTextThree}>En este paso, agrega todos los conejos que se encuentran en esta jaula y dales una descripción detallada, como su raza, edad y su reproducción, entre otros datos</p>
                    <button onClick={() => navigate('/cage/details')} className={styles.buttonSiguiente}> Siguiente </button>
                </div>

                <div className={styles.flexContainerThreeDiv2}>
                    <img
                        src={ rectangle3 }
                        className={styles.imagenThree}
                    />   
                </div>
            </section>
        </> 
    );
};

export default ViewStepThree;
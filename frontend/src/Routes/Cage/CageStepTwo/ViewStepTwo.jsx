import styles from "../CageStepTwo/ViewStepTwo.module.css";
import { useNavigate } from "react-router-dom";
import rectangle2 from "../../../assets/rectangle2.png";


const ViewStepTwo = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className={styles.flexContainerTwo}>
                <div className={styles.flexContainerTwoDiv1}>
                    <h6>Paso 2</h6>
                    <h1>Añade los conejos</h1>
                    <p className={styles.instructionsTextTwo}>En este paso, agrega todos los conejos que se encuentran en esta jaula y dales una descripción detallada, como su raza, edad y su reproducción, entre otros datos</p>
                    <button onClick={() => navigate('/cage/step2/addrabbit')} className={styles.buttonComenzar}> Siguiente </button>
                </div>

                <div className={styles.flexContainerTwoDiv2}>
                    <img
                        src={ rectangle2 }
                        className={styles.imagenTwo}
                    />   
                </div>
            </section>
        </> 
    );
};

export default ViewStepTwo;
import styles from "../CageStepOne/ViewStepOne.module.css";
import { useNavigate } from "react-router-dom";
import rectangle1 from "../../../assets/rectangle1.png";


const ViewStepOne = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className={styles.flexContainerOne}>
                <div className={styles.flexContainerOneDiv1}>
                    <h6>Paso 1</h6>
                    <h1>Registra tus jaulas</h1>
                    <p className={styles.instructionsTextOne}>En este paso, te pediremos información sobre las jaulas de tu granja para que luego agregues sus conejos. Además podrás marcarla como  privada o pública por si deseas compartila con otros productores</p>
                    <button onClick={() => navigate('/cage/step1/form1')} className={styles.buttonComenzar}> Siguiente </button>
                </div>

                <div className={styles.flexContainerOneDiv2}>
                    <img
                        src={ rectangle1 }
                        className="imagenOne"
                    />   
                </div>
            </section>
        </> 
    );
};

export default ViewStepOne;
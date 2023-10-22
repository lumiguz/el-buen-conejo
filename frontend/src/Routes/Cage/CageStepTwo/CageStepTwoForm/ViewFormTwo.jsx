import RabbitForm from "../../../../Components/RabbitForm/RabbitForm";
import styles from "../CageStepTwoForm/ViewFormTwo.module.css";
import { useNavigate } from "react-router-dom";


const ViewFormTwo = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className={styles.flexContainerForm}>
                <div className={styles.flexContainerFormDiv1}>
                    <RabbitForm/>
                    <button onClick={() => navigate('/cage/step3')} className={styles.buttonFormRabbit}> Continuar </button>
                </div>

                
            </section>
        </> 
    );
};

export default ViewFormTwo;
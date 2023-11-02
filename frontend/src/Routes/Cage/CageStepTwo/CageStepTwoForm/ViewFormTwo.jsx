import RabbitCage from "../../../../Components/RabbitCageForm/RabbitCage";
/* import RabbitForm from "../../../../Components/RabbitForm/RabbitForm"; */
import styles from "../CageStepTwoForm/ViewFormTwo.module.css";
import { useNavigate, useLoaderData } from "react-router-dom";

const ViewFormTwo = () => {

    const navigate = useNavigate();
    const cageId= useLoaderData();  // el id: #....

    return (
        <>
            <section className={styles.flexContainerForm}>
                <div className={styles.flexContainerFormDiv1}>
                    <RabbitCage />
                </div>

                
            </section>
        </> 
    );
};

export default ViewFormTwo;
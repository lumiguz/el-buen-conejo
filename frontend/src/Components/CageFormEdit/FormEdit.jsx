import styles from "../CageFormEdit/FormEdit.module.css";
import { useNavigate } from "react-router-dom";

const FormEdit = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className={styles.flexContainerForm}>
                <div className={styles.flexContainerFormDiv1}>

                    <h1>Editar Jaula</h1>
                    <p className={styles.instructionsTextForm}>Modifica los datos de esta jaula, esto no afectará a los conejos</p>
                    
                        <label className={styles.labelForm}>
                            Título    
                        </label>
                        <input id="inputCageTitles" className={styles.inputForm} placeholder="002"/>

                        <label className={styles.labelForm}>
                            Número de lote o identificación
                        </label>
                        <input id="inputCageLotNumber" className={styles.inputForm} placeholder="Número de lote"/>

                        <label className={styles.labelForm}>
                        Privacidad
                        </label>
                        <select id="selectCagePrivacy" className={styles.selectForm}>
                            <option>Privado</option>
                            <option>Publico</option>
                        </select>

                    <h6 className={styles.Caption}>Mantenlo en privado si no quieres que otros vean los conejos de esta jaula</h6>

                    <button onClick={() => navigate('/cage/details')} className={styles.buttonFormCage}> Guardar cambios </button>
                </div>

                
            </section>
        </> 
    );
};

export default FormEdit;
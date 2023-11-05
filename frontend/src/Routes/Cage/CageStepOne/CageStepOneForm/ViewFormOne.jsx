import { useState } from "react";
import styles from "../CageStepOneForm/ViewFormOne.module.css";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../../../hooks/useHttp";

const ViewFormOne = () => {

    const { isLoading, error, data, sendRequest, isntOk } = useHttp();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        farm_id: "ae4f4c87-71a3-455f-9cde-a9b5964b5fdd",
        title: '',
        lotNumber: '',
        privacy: 'Private'
    });
    
    // Event handler to update form data when input fields change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
    // Update corresponding form field value in state
        setFormData({ ...formData, [name]: value });
    };

    // Event handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Define the API endpoint URL
        const urlCages = 'https://apiebc.online/api/cages/';

        try {
            // Make a POST request to the API endpoint with form data using the custom hook
            await sendRequest(urlCages, 'POST', formData);
            // Handle successful API response
            console.log('Data successfully posted to the API:', data);
        } catch (error) {
            // Handle errors in API request
            console.error('Error posting data to the API:', error);
        }

        setTimeout(() => {
            navigate('/cage/step2')
        }, 2000);
    };


    

    return (
        <>
            <section className={styles.flexContainerForm}>
                <div className={styles.flexContainerFormDiv1}>

                    <h1>Crear Jaula</h1>
                    <p className={styles.instructionsTextForm}>Primero crea una jaula para luego agregar sus conejos</p>
                    
                        <label className={styles.labelForm}>
                            Título    
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className={styles.inputForm}
                            placeholder="Título"
                        />

                        <label className={styles.labelForm}>
                            Número de lote o identificación
                        </label>
                        <input
                            type="text"
                            name="lotNumber"
                            value={formData.lotNumber}
                            onChange={handleInputChange}
                            className={styles.inputForm}
                            placeholder="Número de lote"
                        />

                        <label className={styles.labelForm}>
                        Privacidad
                        </label>
                        <select
                            name="privacy"
                            value={formData.privacy}
                            onChange={handleInputChange}
                            className={styles.selectForm}
                        >
                            <option>Privado</option>
                            <option>Publico</option>
                        </select>

                    <h6 className={styles.Caption}>Mantenlo en privado si no quieres que otros vean los conejos de esta jaula</h6>

                    <button onClick={handleSubmit} className={styles.buttonFormCage}> Crear jaula </button>
                    {/* <button onClick={() => navigate('/cage/step2')} className={styles.buttonFormCage2}> Continuar </button> */}
                </div>

                
            </section>
        </> 
    );
};

export default ViewFormOne;
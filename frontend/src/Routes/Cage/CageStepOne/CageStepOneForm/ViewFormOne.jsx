import { useState } from "react";
import styles from "../CageStepOneForm/ViewFormOne.module.css";
import { useNavigate } from "react-router-dom";

const ViewFormOne = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        farm_id: "aca3bd5a-cb48-4123-b996-ae615f990936",
        title: '',
        lotNumber: '',
        privacy: 'Private'
    });

    const urlCages = 'https://apiebc.online/api/cages/';

    const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4NDkyMDcxLCJpYXQiOjE2OTg0MDU2NzEsImp0aSI6IjczODJkNDE1OGY4NDRhZTVhNjA3NGEzMmJhYzU4ZTI0IiwidXNlcl9pZCI6ImI1NmU0YzYwLTNhMDItNDJiZS1iZjNhLWJkNjE5ZThiODEwZSJ9.eKuAogU9nT9UjRUj9AErJ0jR28j-P_Q0q083_XQd7AI';


    // Event handler to update form data when input fields change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
    // Update corresponding form field value in state
        setFormData({ ...formData, [name]: value });
    };

    // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Make a POST request to the API endpoint with form data using fetch API
    fetch(urlCages, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(formData) // Convert form data to JSON string
    })
      .then((response) => response.json()) // Parse JSON response from the API
      .then((data) => {
        // Handle successful API response
        console.log('Data successfully posted to the API:', data);
      })
      .catch((error) => {
        // Handle errors in API request
        console.error('Error posting data to the API:', error);
      });
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
                            placeholder="002"
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
                    <button onClick={() => navigate('/cage/step2')} className={styles.buttonFormCage2}> Continuar </button>
                </div>

                
            </section>
        </> 
    );
};

export default ViewFormOne;
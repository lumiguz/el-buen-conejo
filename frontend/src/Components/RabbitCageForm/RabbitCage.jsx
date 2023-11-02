import { useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { apiUrls } from "../../utils/links";
import { useLoaderData } from "react-router-dom";
import FormSection from '../../UI/FormSection';
import Button from '../../UI/Button';
import AppLink from '../../UI/AppLink';
import FormSelect from '../../UI/FormSelect'
import {BREED_CHOICE, GENRE} from "../../utils/breeds";

const RabbitCage = () => {

    const id = useLoaderData();
    const { sendRequest } = useHttp();
    const [littersImage, setLittersImage] = useState(
        '/static/images/littersPlaceHolder.svg'
    );

    const [formData, setFormData] = useState({
        breed: "",
        genre: "",
        birthday: "",
        tag: "",
        price: "",
        weight: "",
        cage_id: id
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <h1 className="my-4"> Añade un conejo nuevo a la Jaula </h1>
            <form onSubmit={handleSubmit}>
                <div className="d-flex gap-2">
                    <FormSelect 
                        id="genre"
                        label="Género"
                        value={formData.genre}
                        list={GENRE} 
                        onChange={handleInputChange}
                        />
                    <FormSelect 
                        id="breed"
                        label="Raza"
                        value={formData.breed}
                        list={BREED_CHOICE} 
                        onChange={handleInputChange}
                    />
                </div>
                <FormSection  
                    id="birthday"
                    label="Fecha de nacimiento"
                    onChange={handleInputChange}
                    type="date"
                    value={formData.password}
                    />
                    <FormSection  
                        id="tag"
                        type="text"
                        label="Nombre"
                        placeholder="Conejo 1"
                        onChange={handleInputChange}
                        value={formData.password}
                    />
                <div className="d-flex gap-2">
                    <FormSection  
                        id="weight"
                        type="text"
                        label="Peso (Kg)"
                        placeholder="$"
                        onChange={handleInputChange}
                        value={formData.password}
                    />
                    <FormSection  
                        id="price"
                        label="Precio (MXP)"
                        type="text"
                        placeholder="$"
                        onChange={handleInputChange}
                        value={formData.password}
                        />
                </div>
                <Button type="submit" className="btn-success w-100 my-3">
                    Continuar
                </Button>
            </form>
        </>
    )
}

export default RabbitCage;
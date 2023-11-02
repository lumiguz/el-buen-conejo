import { useRef, useState } from "react";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";

const UpdateImage = () => {
  const id = useLoaderData();
  const fileInput = useRef();
  const [searchParams] = useSearchParams();
  const apiUrl = decodeURIComponent(searchParams.get("apiurl"));
  const beforeUrl = decodeURIComponent(searchParams.get("beforeurl"));
  const navigate = useNavigate();
  const [farmImage, setFarmImage] = useState(
    "/static/images/littersPlaceHolder.svg"
  );

  const handleImageUpload = async (event) => {
    const { files } = event.target;
    if (files && files[0]) {
      setFarmImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("photo", fileInput.current.files[0]);

    fetch(`${apiUrl}${id}/change_photo/`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${Cookies.get("authToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al subir la imagen");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate(beforeUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2>Actualizar fotografía</h2>
        <h5 className="fw-normal">Añade la imagen que deseas utilizar</h5>

        <div className="my-3">
          <img
            src={farmImage}
            alt="camadaExample"
            className="rounded-circle w-auto"
            width="250"
            height="250"
          />
        </div>

        <div className="my-3">
          <input
            type="file"
            className="form-control"
            id="file"
            ref={fileInput}
            onChange={handleImageUpload}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Actualizar
        </button>
      </div>
    </form>
  );
};

export default UpdateImage;

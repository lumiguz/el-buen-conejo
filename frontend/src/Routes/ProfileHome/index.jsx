
import MenuProfile from "../../Components/MenuProfile/MenuProfile";
import Profile from "../../Components/Profile";
import { useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";
import { apiUrls } from "../../utils/links";


let userId = ""
const cuenta = JSON.parse(localStorage.getItem('logedAccount'))
console.log(cuenta)
console.log(typeof(cuenta))
userId = JSON.parse(localStorage.getItem("userId"))
console.log("El id del usuario es:", userId)




const ProfileHome =  () =>{

    const { isLoading, error, data, sendRequest } = useHttp();


useEffect(() => {
    sendRequest(`${apiUrls.urlProfiles}?user_id=${userId}`)

}, [sendRequest]);

console.log(data)
console.log(error)


if (data) {
    // Accede a las propiedades de data una vez que los datos estén disponibles
    const profileId = data.results[0].user_id;
    const profilePhoto = data.results[0].photo;
    const profileName = data.results[0].first_name
    ;
    console.log(profileName)
    

    return (
        <>
        <Profile name = {profileName}/>
        <MenuProfile/>
    </>
    );
  } else {
    // Muestra un mensaje de carga o cualquier otro indicador mientras los datos se están cargando
    return <p>Cargando...</p>;
  }
}

//     return(
//         <>
//             <Profile/>
//             <MenuProfile/>
//         </>
//     )

// }

export default ProfileHome;
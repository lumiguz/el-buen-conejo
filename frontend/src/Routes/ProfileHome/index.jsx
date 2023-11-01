
import MenuProfile from "../../Components/MenuProfile/MenuProfile";
import Profile from "../../Components/Profile";

const cuenta = JSON.parse(localStorage.getItem('logedAccount'))
console.log(cuenta)
console.log(typeof(cuenta))
const userId = localStorage.getItem("userId")
console.log("El id del usuario es:", userId)


const ProfileHome =  () =>{


    return(
        <>
            <Profile/>
            <MenuProfile/>
        </>
    )

}

export default ProfileHome;
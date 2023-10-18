import { useLocation } from "react-router-dom";
import { useMyContext } from "../context/AppContextProvider";

export function useIsAuthPath(authPaths) {
    const location = useLocation();
    return authPaths.some(path => location.pathname.includes(path));
}

export function useIsLoggedIn() {
    // your code for isLoggedIn is here
    const usuario = useMyContext();
    console.log(usuario);
    return usuario !== null;
}
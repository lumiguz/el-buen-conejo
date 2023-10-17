import { useLocation } from "react-router-dom";

export function useIsAuthPath(authPaths) {
    const location = useLocation();
    return authPaths.some(path => location.pathname.includes(path));
}

export function isLoggedIn() {
    // your code for isLoggedIn is here
}
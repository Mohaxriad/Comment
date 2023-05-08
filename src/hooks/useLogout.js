import axios from "../api/axios";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useLogout = () => {
    const { setAuth } = useAuth();
const refresh = useRefreshToken()
    return async () => {
        setAuth({});
        try {
            const newAccessToken = await refresh()
            const response = await axios('/auth/logout', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${newAccessToken}`,
                },
                withCredentials: true


            });
        } catch (err) {
            console.error(err);
        }
    };
}

export default useLogout;
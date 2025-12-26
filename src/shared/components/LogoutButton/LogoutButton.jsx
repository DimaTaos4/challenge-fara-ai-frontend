import styles from "./LogoutButton.module.css"
import { useNavigate } from "react-router-dom"
const LogoutButton = () => {
    const navigate = useNavigate()
    const onLogout = () => {
        localStorage.clear();
        navigate("/login", { replace: true });
    };

    return (
        <button className={styles.logoutBtn} onClick={onLogout}>
            Logout
        </button>
    )
}
export default LogoutButton
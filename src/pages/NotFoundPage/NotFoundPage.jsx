import styles from './NotFoundPage.module.css';

import faraAiLogo from "../../assets/fara-ai-logo.jpeg"

import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.notFoundPage}>
            <img src={faraAiLogo} alt="Fara AI Logo" />
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <button className={styles.btnGoHome} onClick={() => navigate("/")}>Go home</button>
        </div>
    )
}
export default NotFoundPage;
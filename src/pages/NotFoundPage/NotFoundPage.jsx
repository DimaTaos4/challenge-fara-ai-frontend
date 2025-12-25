import styles from './NotFoundPage.module.css';

import faraAiLogo from "../../assets/fara-ai-logo.jpeg"

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundPage}>
            <img src={faraAiLogo} alt="Fara AI Logo" />
            <h1>404</h1>
            <h3>Page Not Found</h3>
        </div>
    )
}
export default NotFoundPage;
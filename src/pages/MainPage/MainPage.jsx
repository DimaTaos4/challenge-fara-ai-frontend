import styles from './MainPage.module.css';
import { Link } from 'react-router-dom';
import faraAiLogo from '../../assets/fara-ai-logo.jpeg';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <h1 className={styles.title}>Welcome to the challenge from fara.ai</h1>
            <img src={faraAiLogo} alt="Fara AI Logo" className={styles.logo} />
            <Link to="/login" className={styles.link}>Start the challenge</Link>
        </div>
    )
}
export default MainPage;
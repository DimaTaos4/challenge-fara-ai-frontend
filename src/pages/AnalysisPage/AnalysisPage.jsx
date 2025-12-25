import styles from './AnalysisPage.module.css';
import { useAuthToken } from '../../shared/hooks/useAuthToken';
const AnalysisPage = () => {

    const { username } = useAuthToken()

    return (
        <div>
            <h2 className={styles.title}>Hello {username}</h2>
            <h3>That is your store</h3>
            <div>
            </div>
        </div>
    )
}

export default AnalysisPage;
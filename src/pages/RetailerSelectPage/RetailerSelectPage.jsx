import styles from "./RetailerSelectPage.module.css"
import { useAuthToken } from "../../shared/hooks/useAuthToken"
const RetailerSelectPage = () => {

    const { username } = useAuthToken()

    return (
        <div className={styles.retSelPage}>
            <h3>{username}, select one of retailers</h3>
        </div>
    )
}
export default RetailerSelectPage
import styles from "./RetailerSelectPage.module.css"
import { useAuthToken } from "../../shared/hooks/useAuthToken"

import { useEffect, useState } from "react"

import { getAllRetailers } from "../../shared/api/retailers/retailersRoutes"

const RetailerSelectPage = () => {

    const [retailersData, setRetailersData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { username } = useAuthToken()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getAllRetailers();
                setRetailersData(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        console.log(retailersData);
    }, [retailersData])

    const element = retailersData.map(retailer => <li key={retailer.key}>{retailer.name}</li>)

    return (
        <div className={styles.retSelPage}>
            {loading && <span>Loading...</span>}
            <h3>{username}, select one of retailers</h3>
            {error && <p className={styles.error}>{error}</p>}
            <ul>
                {element}
            </ul>
        </div>
    )
}
export default RetailerSelectPage
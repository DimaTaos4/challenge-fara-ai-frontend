import styles from "./RetailerSelectPage.module.css"

import { useEffect, useState } from "react"

import { getAllRetailers } from "../../shared/api/retailers/retailersRoutes"

import LogoutButton from "../../shared/components/LogoutButton/LogoutButton"

import { useNavigate } from "react-router-dom";

const RetailerSelectPage = () => {
    const navigate = useNavigate()
    const [retailersData, setRetailersData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

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

    const onSelectRetailer = (key) => {
        navigate(`/analysis?retailerKey=${key}`)
    }

    const element = retailersData.map(retailer => <li key={retailer.key} onClick={() => onSelectRetailer(retailer.key)}>{retailer.name}</li>)



    return (
        <div className={styles.retSelPage}>
            {loading && <span>Loading...</span>}
            <p className={styles.hint}>
                Please choose a retailer to see the analysis.
            </p>
            {error && <p className={styles.error}>{error}</p>}
            <ul>
                {element}
            </ul>
            <LogoutButton />
        </div>
    )
}
export default RetailerSelectPage
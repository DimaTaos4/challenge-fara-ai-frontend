import styles from './LoginPage.module.css';
import { useForm } from 'react-hook-form';
import faraAiLogo from "../../assets/fara-ai-logo.jpeg"
import { loginUserApi } from '../../shared/api/users/usersRoutes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { register, reset, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await loginUserApi(data);
            const token = response.token
            const username = response.username
            localStorage.setItem("token", token)
            localStorage.setItem("username", username)

            navigate("/analysis")
            reset();
        } catch (error) {
            console.error("Fail by logging in:", error.message);
            setError(error.message)
        } finally {
            setLoading(false)
        }
    };


    return (
        <div className={styles.loginPage} >
            <img src={faraAiLogo} alt="Fara AI Logo" className={styles.logo} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputGroup}>
                    <input type="text" placeholder='Email' {...register("email", { required: true })} className={styles.input} />
                    {errors.email && <span className={styles.error}>Email is required</span>}
                </div>
                <div className={styles.inputGroup}>
                    <input type="password" placeholder='Password' {...register("password", { required: true })} className={styles.input} />
                    {errors.password && <span className={styles.error}>Password is required</span>}
                </div>
                <button type="submit" className={styles.loginButton}>Login <span>{loading && <span>Loading...</span>}</span></button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    )
}
export default LoginPage;
export const useAuthToken = () => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    return { token, username }
}

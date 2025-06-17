import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"http://localhost:3000"
})

axiosInstance.interceptors.request.use((config)=>{
    const accessToken = sessionStorage.getItem(accessToken);

    if(accessToken){
        config.headers.Athorization = `Bearer ${accessToken}`
    }
console.log("token token")
    return config
},(error)=>Promise.reject(error))

export default axiosInstance
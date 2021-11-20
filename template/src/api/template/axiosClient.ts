import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create()

export const setToken = (token: string | null)=>{
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

//TODO: Uncomment interceptor
// instance.interceptors.response.use( (response: AxiosResponse)=>{
//     //TODO: Intercept response
//     return response
// }, async (error: AxiosError)=>{
//     //TODO: Intercept Error
// })

export default instance
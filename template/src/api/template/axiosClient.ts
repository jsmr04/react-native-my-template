import axios from "axios";

const instance = axios.create()

export const setToken = (token: string | null)=>{
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance
import axios from 'axios'
import { vanillaUseStore } from 'hooks/useStore';

const accessTokenInsertion = (config) => {
    // Do something before request is sent
    if (config.url === "/auth/login") return config
    const state = vanillaUseStore.getState() as any;
    config.headers.Authorization = `Bearer ${state.accessToken}`
    return config
}
const accessTokenError = (error) => {
    // Do something with request error
    return Promise.reject(error)
}

let options = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    headers: {
        'ngrok-skip-browser-warning': 6029
    }
}

const instance = axios.create(options)

instance.interceptors.request.use(accessTokenInsertion, accessTokenError)

export default instance
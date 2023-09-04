import axios from 'axios'
import { vanillaUseStore } from 'hooks/useStore';
import { RefreshToken } from 'services/Auth';

const accessTokenInsertion = (config) => {
    // Do something before request is sent
    if (config.url === "/auth/login") return config
    // const state = vanillaUseStore.getState() as any;
    const accessToken = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${accessToken}`
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
instance.interceptors.response.use((res) => res, async (err) => {
    const originalConfig = err?.config

    if (!originalConfig?.sent && err?.response?.status === 401) {
        originalConfig.sent = true

        try {
            const refreshToken = localStorage.getItem('refreshToken')
            const response = await RefreshToken({ token: refreshToken })
            vanillaUseStore.setState({
                token: response.token,
                refreshToken: response.refreshToken
            })
            localStorage.setItem('token', response.token);
            localStorage.setItem('refreshToken', response.refreshToken);

            originalConfig['headers'] = {
                Authorization: `Bearer ${response.token}`
            }

            return instance(originalConfig)
        } catch (err) {
            localStorage.setItem('token', null)
            localStorage.setItem('refreshToken', null)
            return Promise.reject(err);
        }
    }
})

export default instance
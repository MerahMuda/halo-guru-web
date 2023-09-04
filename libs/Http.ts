import axios from 'axios'
import { vanillaUseStore } from 'hooks/useStore';
import { RefreshToken } from 'services/Auth';

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
// instance.interceptors.response.use((res) => res, async (err) => {
//     const originalConfig = err?.config

//     if (!originalConfig?.sent && err?.response?.status === 401) {
//         originalConfig.sent = true

//         try {
//             const state = vanillaUseStore.getState() as any
//             const response = await RefreshToken({ token: state.refreshToken })
//             vanillaUseStore.setState({
//                 token : response.token,
//                 refreshToken : response.refreshToken
//             })
//             originalConfig['headers'] = {
//                 Authorization: `Bearer ${response.token}`
//             }

//             return instance(originalConfig)
//         } catch (err) {
//             vanillaUseStore.setState({ accessToken: "", refreshToken: "" })
//             return Promise.reject(err);
//         }
//     }
// })

export default instance
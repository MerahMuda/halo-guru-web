import { create } from "zustand";
import { persist } from "zustand/middleware"
import { createStore } from "zustand/vanilla"

const persistedStore = persist(
    (set) => ({
        profile: {},
        accessToken: '',
        refreshToken: '',
        setProfile: (profile: any) => set(() => ({ profile })),
        setToken: (accessToken: any) => set(() => {
            localStorage.setItem('token', accessToken)
            return ({ accessToken })
        }),
        setRefreshToken: (refreshToken: any) => set(() => {
            localStorage.setItem('refreshToken', refreshToken)

            return ({ refreshToken })
        }),
        resetToken: () => set(() => {
            localStorage.setItem('token', null);
            localStorage.setItem('refreshToken', null);

            return ({ accessToken: "", refreshToken: "" })
        })
    }),
    {
        name: "HaloGuru-admin"
    }
)
const initStore = create(
    persistedStore
)
export const vanillaUseStore = createStore(persistedStore)

const useStore = () => {
    const {
        accessToken, refreshToken, setToken, setRefreshToken, resetToken, profile, setProfile
    } = initStore((state: any) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        setToken: state.setToken,
        setRefreshToken: state.setRefreshToken,
        resetToken: state.resetToken,
        profile: state.profile,
        setProfile: state.setProfile
    }))

    return {
        accessToken, refreshToken, setToken, setRefreshToken, resetToken, setProfile, profile
    }
}

export default useStore
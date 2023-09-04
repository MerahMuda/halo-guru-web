'use client'
import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material"
import useStore from "hooks/useStore"
import { useRouter } from "next/navigation"
import { FC, FormEvent, useEffect, useState } from "react"
import { AuthLogin } from "services/Auth"

const LoginPage: FC = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {
        accessToken, setToken, setRefreshToken, setProfile
    } = useStore()
    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const formData = new FormData(e.currentTarget);
            const obj = {}
            formData.forEach((value, key) => obj[key] = value);
            const response = await AuthLogin(obj);
            setToken(response.data.token)
            setRefreshToken(response.data.refreshToken)
            setProfile(response.data.user)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('refreshToken', response.data.refreshToken)
            router.push("/gtk")
        } catch (e) {

        }
        finally {
            setIsLoading(false)
        }
    }

    if (accessToken) router.push("/gtk")

    return (
        <form onSubmit={login}>
            <Grid container display={"flex"} rowGap={4} p={6} textAlign={"center"}>
                <Grid item xs={12}>
                    <Typography variant="h3">&quot;JAYA GUPTA&quot;</Typography></Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">Jaringan Pelayanan Guru Pada Kota Denpasar</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth variant="outlined" name="email" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth variant="outlined" name="password" type="password" />
                </Grid>
                <Grid container item xs={12} justifyContent={"center"}>
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained" sx={{ padding: 2 }} type="submit">
                            Login
                        </Button>
                        {
                            isLoading && <CircularProgress />
                        }
                    </Grid>
                </Grid>
            </Grid>
        </form>

    )
}

export default LoginPage
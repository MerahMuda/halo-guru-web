'use client'
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { FC } from "react"

const LoginPage: FC = () => {
    const router = useRouter()
    const login = async () => {
        try {
            //hit api
            router.push("/gtk")
        } catch (e) {

        }
    }
    return (
        <Grid container display={"flex"} rowGap={4} p={6} textAlign={"center"}>
            <Grid item xs={12}>
                <Typography variant="h3">&quot;JAYA GUPTA&quot;</Typography></Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Jaringan Pelayanan Guru Pada Kota Denpasar</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth variant="outlined" />
            </Grid>
            <Grid container item xs={12} justifyContent={"center"}>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" sx={{ padding: 2 }} onClick={login}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LoginPage
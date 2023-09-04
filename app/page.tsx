'use client'

import { Grid } from '@mui/material';
import useStore from 'hooks/useStore';
import Head from 'next/head'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const Homepage = () => {

    const {
        accessToken
    } = useStore()
    const router = useRouter()
    useEffect(() => {
        if (accessToken) router.push("/gtk")
        router.push("/login")
    }, [accessToken])
    return (
        <>
            <Head>
                <title> Homepage </title>
            </Head>
            <Grid >
                Redirecting
            </Grid>
        </>
    )
}

export default Homepage;
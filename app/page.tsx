'use client'

import { Container, Grid } from '@mui/material';
import WithAuth from 'libs/WithAuth';
import Head from 'next/head'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const Homepage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        if (isLoggedIn) router.push("/gtk")
        router.push("/login")
    }, [isLoggedIn]);

    return (
        <WithAuth>
            <Head>
                <title> Homepage </title>
            </Head>
            <Grid >
                Redirecting
            </Grid>
        </WithAuth>
    )
}

export default Homepage;
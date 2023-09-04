'use client'

import { Container, Grid } from '@mui/material';
import WithAuth from 'libs/WithAuth';
import Head from 'next/head'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const Homepage = () => {
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
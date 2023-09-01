'use client'

import { Container, Grid, Paper } from "@mui/material"
import { useTheme } from "@mui/material/styles"

const LayoutLogin = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const theme = useTheme()
    return (
        <Grid container height="100vh" width="100vw" bgcolor={theme.palette.primary.main} color={theme.palette.primary.contrastText}>
            <Container maxWidth="xl" sx={{ padding: 5, height: '100%', width: "100%" }}>
                <Grid container justifyContent={"space-between"} height={"100%"}>
                    <Grid item xs={3} p={4} alignItems={"center"} display="flex" height="100%" justifyContent={"center"}>
                        <img src="/images/walkot-dps-2.svg" height="50%" />
                    </Grid>
                    <Grid item xs alignItems={"center"} display="flex" height="100%" width="100%" justifyContent={"center"}>
                        <Paper elevation={5} sx={{
                            height: "70%",
                            width: "100%",
                            display: "flex", flexDirection: "column", gap: "20px",
                            backgroundColor: `${theme.palette.grey[200]} !important`,
                            borderRadius: "20px",
                            padding: 2
                        }}>
                            {children}
                        </Paper>
                    </Grid>
                    <Grid item xs={3} p={4} alignItems={"center"} display="flex" height="100%" justifyContent={"center"}>
                        <img src="/images/wakil-walkot-dps-2.svg" height="50%" />
                    </Grid>
                </Grid>


            </Container>
        </Grid>
    )
}

export default LayoutLogin
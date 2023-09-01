import { School } from "@mui/icons-material"
import { Avatar, Grid, Paper, Container as ContainerMUI, Box } from "@mui/material"
import BreadcrumbsComponent from "components/Breadcrumbs"
import ItemList, { ItemProps } from "components/NavigationList"

const navigationList: ItemProps[] = [
    {
        key: "GTK-link",
        href: "/gtk",
        label: "GTK",
        icon: <School />
    }
]

const Sidebar = () => {
    return (
        <Grid
            minWidth={"180px"}
            bgcolor={"#C42713"}
            height={"100%"}
        >
            <Grid height={"70px"}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 2px 8px"
                color="white"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                JAYA GUPTA Admin
            </Grid>
            <ItemList items={navigationList} />
        </Grid>
    )
}
const Container = ({ children }) => {
    return (
        <Grid height="100%" width={"calc(100% - 180px)"} display={"flex"} flexDirection={"column"}>
            <Grid
                height={"70px"}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 2px 8px"
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                p={2}
            >
                <Box>
                    <BreadcrumbsComponent />
                </Box>
                <Box>
                    <Avatar src="" />

                </Box>
            </Grid>
            <Grid flex={1} >
                <ContainerMUI maxWidth="xl" sx={{ padding: 6, height: "100%", width: "100%" }}>
                    <Paper elevation={5} sx={{
                        padding: 2, height: "100%", display: "flex", flexDirection: "column", gap: "20px"
                    }}>
                        {children}
                    </Paper>
                </ContainerMUI>
            </Grid>
        </Grid>
    )
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Grid container height="100vh" width="100vw">
            <Sidebar />
            <Container>
                {children}
            </Container>
        </Grid>
    )
}

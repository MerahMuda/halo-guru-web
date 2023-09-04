'use client'
import { School } from "@mui/icons-material"
import { Avatar, Grid, Paper, Container as ContainerMUI, Box, Typography, Stack, ButtonBase, Menu, MenuItem } from "@mui/material"
import BreadcrumbsComponent from "components/Breadcrumbs"
import ItemList, { ItemProps } from "components/NavigationList"
import useStore from "hooks/useStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

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
    const {
        profile, resetToken
    } = useStore();
    const [name, setName] = useState('')
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        resetToken()
        router.push("/login")
    }

    useEffect(() => {
        setName(profile.nama)
    }, [profile.nama])

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
                    <ButtonBase
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"}>
                            <Avatar alt={name} />
                            <Typography textTransform={"capitalize"} variant="h6">{name}</Typography>
                        </Stack>
                    </ButtonBase>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Grid>
            <Grid height={"calc(100% - 70px)"} >
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

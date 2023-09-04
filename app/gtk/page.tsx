'use client'
import { Add } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import Table from "components/Table"
import useGrid from "hooks/useGrid"
import { GTKDto } from "libs/GTK"
import { GTKColDef } from "libs/GTK/gridColumnDef"
import { resolveMockData } from "libs/GTK/mockData"
import WithAuth from "libs/WithAuth"
import { useRouter } from "next/navigation"
import { GetGTK } from "services/GTK"


const GTK = () => {
    const grid = useGrid<GTKDto>({
        apiCall: GetGTK,
        defaultPageSize: 10,
    })

    const router = useRouter()
    const redirectToCreate = () => router.push("/gtk/create")
    return (
        <>
            <Box display="flex" justifyContent={"flex-end"} gap={2} >
                <Button variant="contained" onClick={redirectToCreate}>
                    Import
                </Button>
                <Button variant="contained" startIcon={<Add />} onClick={redirectToCreate}>
                    Add New
                </Button>
            </Box>
            <Box height="85%" >
                <Table
                    columns={GTKColDef}
                    rows={grid.rows || []}
                    rowCount={grid.meta?.totalRows || 0}
                    loading={grid.isLoading}
                    pageSizeOptions={[5, 10, 15, 25]}
                    paginationModel={grid.paginationModel}
                    onPaginationModelChange={grid.setPaginationModel}
                    paginationMode="server"
                />
            </Box>
        </>
    )
}

export default GTK
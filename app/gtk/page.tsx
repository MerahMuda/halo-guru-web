'use client'
import { Add } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import Table from "components/Table"
import useGrid from "hooks/useGrid"
import { GTKDto } from "libs/GTK"
import { GTKColDef } from "libs/GTK/gridColumnDef"
import { resolveMockData } from "libs/GTK/mockData"
import { useRouter } from "next/navigation"


const GTK = () => {
    const grid = useGrid<GTKDto>({
        apiCall: resolveMockData,
        defaultPageSize: 5,
    })

    const router = useRouter()
    const redirectToCreate = () => router.push("/gtk/create")
    return (
        <>
            <Box display="flex" justifyContent={"flex-end"}>
                <Button variant="contained" startIcon={<Add />} onClick={redirectToCreate}>
                    Add New
                </Button>
            </Box>
            <Box flex={1}>
                <Table
                    columns={GTKColDef}
                    rows={grid.rows}
                    rowCount={grid.meta.totalRows || 0}
                    loading={grid.isLoading}
                    pageSizeOptions={[5, 10, 15]}
                    paginationModel={grid.paginationModel}
                    onPaginationModelChange={grid.setPaginationModel}
                />
            </Box>
        </>
    )
}

export default GTK
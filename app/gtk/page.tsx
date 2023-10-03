'use client'
import { Add, FileDownload, FilterAlt, FilterAltOff } from "@mui/icons-material"
import { Box, Button, Grid } from "@mui/material"
import DialogAlert from "components/Dialog"
import Table from "components/Table"
import useApi from "hooks/useAPI"
import useGrid from "hooks/useGrid"
import { GTKDto } from "libs/GTK"
import { GTKColDef } from "libs/GTK/gridColumnDef"
import { resolveMockData } from "libs/GTK/mockData"
import WithAuth from "libs/WithAuth"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { DeleteGTK, GetGTK } from "services/GTK"


const GTK = () => {
    const grid = useGrid<GTKDto>({
        apiCall: GetGTK,
        defaultPageSize: 10,
    })
    const deleteRow = useApi({
        apiPost: (id) => DeleteGTK(id),
        fetching: false
    })
    const [dataDialog, setDataDialog] = useState<any>();
    const [isOpen, setOpen] = useState<boolean>(false);
    const router = useRouter()
    const redirectToCreate = () => router.push("/gtk/create");
    const redirectToEdit = (id) => router.push(`/gtk/edit/${id}`);
    const redirectToDetail = (id) => router.push(`/gtk/detail/${id}`);
    const handleSubmit = () => {
        deleteRow.post(dataDialog.id)
        setOpen(false)
        grid.fetchData()
    }
    return (
        <WithAuth>
            <Box display="flex" justifyContent={"flex-end"} gap={2} >
                <Button variant="contained"
                    startIcon={<FilterAltOff />}
                    onClick={() => {
                        grid.resetFilter()
                    }} disabled={!grid.filterModel?.items.length}>
                    Reset Filters
                </Button>
                <Button variant="contained"
                    startIcon={<FilterAlt />}
                    onClick={grid.fetchData}>
                    Apply Filters
                </Button>
                <Button variant="contained" startIcon={<FileDownload />} onClick={redirectToCreate}>
                    Import
                </Button>
                <Button variant="contained" startIcon={<Add />} onClick={redirectToCreate}>
                    Add New
                </Button>
            </Box>
            <Box height="85%">
                <Table
                    columns={GTKColDef({
                        onEditClick: redirectToEdit,
                        onDeleteClick: (data) => {
                            setDataDialog(data);
                            setOpen(true)
                        },
                        onViewClick: redirectToDetail
                    })}
                    rows={grid.rows || []}
                    rowCount={grid.meta?.totalRows || 0}
                    loading={grid.isLoading}
                    pageSizeOptions={[5, 10, 15, 25]}
                    paginationModel={grid.paginationModel}
                    onPaginationModelChange={grid.setPaginationModel}
                    paginationMode="server"
                    filterMode="server"
                    onFilterModelChange={grid.onFilterChange}
                    filterModel={grid.filterModel}
                />
            </Box >
            <DialogAlert title="Delete Row" onSubmitClick={handleSubmit} open={isOpen} handleClose={() => setOpen(false)} onCancelClick={() => setOpen(false)}>
                Delete row with this data ?
                <br />
                NIP/NUPTK : <b>{dataDialog?.nip_nuptk}</b>
                <br />
                Nama : <b>{dataDialog?.nama}</b>
            </DialogAlert>
        </WithAuth>
    )
}

export default GTK
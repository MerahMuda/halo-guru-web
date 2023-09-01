import { GridColDef } from "@mui/x-data-grid";

const GTKColDef: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 90 },
    { field: 'nip_nuptk', headerName: 'NIP/NUPTK', width: 150 },
    { field: 'name', headerName: 'Nama', width: 150 },
    // { field: 'password', headerName: 'Column 1', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'last_online', headerName: 'Last Online', width: 150 },
    { field: 'photo', headerName: 'Foto', width: 150 },
    { field: 'unit_kerja', headerName: 'Unit Kerja', width: 150 },
    { field: 'riwayat_pendidikan', headerName: 'Riwayat Pendidikan', width: 150 },
    { field: 'biografi', headerName: 'Biografi', width: 150 },
    // { field: 'firebase_token', headerName: 'Firebase Token', width: 150 },
    { field: 'updated_at', headerName: 'Updated At', width: 150 },
    { field: 'created_at', headerName: 'Created At', width: 150 },
    { field: 'role_id', headerName: 'Role Id', width: 90 },
    { field: 'mata_pelajaran', headerName: 'Mata Pelajaran', width: 150 },
    // { field: 'mata_pelajaran_id', headerName: 'Column 1', width: 90 },
    { field: 'media_pembelajaran', headerName: 'Media Pembelajaran', width: 150 },
    // { field: 'media_pembelajaran_id', headerName: 'Column 1', width: 90 },
    { field: 'pangkat', headerName: 'Pangkat', width: 150 },
    { field: 'golongan', headerName: 'Golongan', width: 150 },
    { field: 'jabatan', headerName: 'Jabatan', width: 150 },
    // { field: 'jabatan_id', headerName: 'Column 1', width: 90 },
]

export {
    GTKColDef
}
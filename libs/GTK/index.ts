import { GridColDef } from '@mui/x-data-grid';


type GTKDto = {
    id: string | number
    nip_nuptk: string
    name: string
    password: string
    status: string
    last_online: string | Date
    photo: string
    unit_kerja: string
    riwayat_pendidikan: string
    biografi: string
    firebase_token: string
    updated_at: string | Date
    created_at: string | Date

    role_id: string | number // FK

    mata_pelajaran: string
    media_pembelajaran: string
    pangkat: string
    golongan: string
    jabatan: string

    mata_pelajaran_id: string | number
    media_pembelajaran_id: string | number
    jabatan_id: string | number
}

export {
    type GTKDto
}
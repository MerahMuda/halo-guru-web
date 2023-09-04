import { GridColDef } from '@mui/x-data-grid';


type GTKDto = {
    id: string | number
    nip_nuptk: string
    nama: string
    password: string
    status: string
    terakhir_online: string | Date
    foto: string
    unit_kerja: string
    riwayat_pendidikan: string
    biografi: string
    firebase_token: string
    updatedAt: string | Date
    createdAt: string | Date

    role_id: string | number // FK
    role_nama: string

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
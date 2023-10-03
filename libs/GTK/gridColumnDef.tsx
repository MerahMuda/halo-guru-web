import { Delete, Edit, Visibility } from "@mui/icons-material";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";

const GTKColDef = (params: any): GridColDef[] => {
  const {
    onEditClick,
    onDeleteClick,
    onViewClick
  } = params;
  return [
    { field: 'id', headerName: 'Id', width: 90 },
    { field: 'nip_nuptk', headerName: 'NIP/NUPTK', width: 150 },
    { field: 'nama', headerName: 'Nama', width: 150 },
    // { field: 'password', headerName: 'Column 1', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'terakhir_online', headerName: 'Last Online', width: 150 },
    { field: 'foto', headerName: 'Foto', width: 150 },
    { field: 'unit_kerja', headerName: 'Unit Kerja', width: 150 },
    { field: 'riwayat_pendidikan', headerName: 'Riwayat Pendidikan', width: 150 },
    { field: 'biografi', headerName: 'Biografi', width: 150 },
    // { field: 'firebase_token', headerName: 'Firebase Token', width: 150 },
    { field: 'updatedAt', headerName: 'Updated At', width: 150 },
    { field: 'createdAt', headerName: 'Created At', width: 150 },
    // { field: 'role_id', headerName: 'Role Id', width: 90 },
    { field: 'roleNama', headerName: 'Role', width: 90 },
    { field: 'mata_pelajaran', headerName: 'Mata Pelajaran', width: 150 },
    // { field: 'mata_pelajaran_id', headerName: 'Column 1', width: 90 },
    { field: 'media_pembelajaran', headerName: 'Media Pembelajaran', width: 150 },
    // { field: 'media_pembelajaran_id', headerName: 'Column 1', width: 90 },
    { field: 'pangkat', headerName: 'Pangkat', width: 150 },
    { field: 'golongan', headerName: 'Golongan', width: 150 },
    { field: 'jabatan', headerName: 'Jabatan', width: 150 },

    // { field: 'jabatan_id', headerName: 'Column 1', width: 90 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (data) => {
        return [
          <GridActionsCellItem
            icon={<Visibility />}
            label="View Detail"
            className="textPrimary"
            onClick={() => onViewClick(data?.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<Edit />}
            label="Edit"
            className="textPrimary"
            onClick={() => onEditClick(data?.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<Delete />}
            label="Delete"
            onClick={() => onDeleteClick(data.row)}
            color="inherit"
          />,
        ];
      },
    }]
}
export {
  GTKColDef,
}
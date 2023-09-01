import { FC } from 'react';
import { DataGrid, GridColDef, DataGridProps } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];

const Table: FC<DataGridProps> = (props) => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid {...props} />
        </div>
    );
}

export default Table;
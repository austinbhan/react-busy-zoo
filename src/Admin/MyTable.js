import * as React from 'react';
import { namesTable } from './Data';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First name', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 130 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={namesTable}
        columns={columns}
      />
    </div>
  );
}

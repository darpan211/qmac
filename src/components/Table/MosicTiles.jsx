import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'dimention', label: 'DIMENTION', minWidth: 170 },
  { id: 'thickness', label: 'THICKNESS (APPORX.)', minWidth: 100 },
  {
    id: 'population',
    label: 'NO.OF TILES PER BOX',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'COVERAGE AREA (APPROX.)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'WEIGHT (APPROX.)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(dimention, thickness, population, size,density) {
  return { dimention, thickness, population, size, density };
}

const rows = [
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  createData('300X300 MM', '8.5 MM',' 10 PCS.', '9.68 SQ.FT.','14.37 KGS.(APPROX.)'),
  
];

export default function MosicTiles() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" style={{marginBottom:'0px'}}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,backgroundColor:'rgb(52 58 64)',color:'white',fontWeight:'bold',border: '1px solid',borderBottom:'0px',textAlign:'center'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} style={{ backgroundColor:'rgb(52 58 64)'}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{color:'white',border: '1px solid',borderBottom:'0px',textAlign:'center'}} >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className='table-pagination'
      />
    </Paper>
  );
}
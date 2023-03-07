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
  { id: 'tiles', label: 'TILES  PER BOX(Pcs)', minWidth: 100 },
  {
    id: 'area1',
    label: 'AREA COVERAGE PER BOX(SQ.FT.) APPROX',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'area2',
    label: 'AREA COVERAGE PER BOX(SQ.MT.) APPROX',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'density',
    label: 'WEIGHT PER BOX(KG.) APPROX',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'thickness',
    label: 'THICKNESS(mm) APPROX',
    minWidth: 170,
    align: 'right',
  },
];

function createData(dimention, tiles, area1, area2,density,thickness) {
  return { dimention, tiles, area1, area2, density,thickness };
}

const rows = [
  createData('100x300mm', '33','10.65', '0.99','13.50','8.00'),
  createData('100x200mm	', '50',' 10.76', '1.00','13.00','8.00'),
  createData('100x300mm', '33','10.65', '0.99','13.50','8.00'),
  createData('100x200mm	', '50',' 10.76', '1.00','13.00','8.00'),
  createData('100x300mm', '33','10.65', '0.99','13.50','8.00'),
  createData('100x200mm	', '50',' 10.76', '1.00','13.00','8.00'),
  createData('100x300mm', '33','10.65', '0.99','13.50','8.00'),
  createData('100x200mm	', '50',' 10.76', '1.00','13.00','8.00'),
  
];

export default function SubweyTiles() {
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
                  style={{ minWidth: column.minWidth,backgroundColor:'rgb(52 58 64)',color:'white',fontWeight:'bold',border: '1px solid',borderBottom:'0px',textAlign:'center' }}
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
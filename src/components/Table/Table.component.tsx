import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useFetchActivities } from '../../services/Activities.service';
import { Box, Typography } from '@mui/material';

import './Table.component.scss';

interface IRow {
  activity: string,
  type: string,
  participants: number,
  price: number,
  key: string
}

function createData(
  activity: string,
  type: string,
  participants: number,
  price: number,
  key: string
) {
  return { activity, type, participants, price };
}

const CustomTable = () => {
  const { data } = useFetchActivities();

  if (data?.error) {
    return (
      <Box className='error-container'><Typography className='error-text'>{data?.error}</Typography></Box>
    )
  }

  const rows = data?.map((activityObj: IRow) => {
    return createData(activityObj.activity, activityObj.type, activityObj.participants, activityObj.price, activityObj.key)
  });

  return (
    <>
      {data && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>Activity</b></TableCell>
                <TableCell><b>Type</b></TableCell>
                <TableCell align="center"><b>participants</b></TableCell>
                <TableCell align="center"><b>price</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: IRow) => (
                <TableRow
                  key={row.key}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.activity}
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell align="center">{row.participants}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
      }
    </>
  );
}

export default CustomTable;
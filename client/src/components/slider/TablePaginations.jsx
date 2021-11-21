import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './TablePaginations.scss'


const TablePaginations = () => {

  

  return ( 
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination count={2} variant="outlined" color="primary" size="large" />
      </Stack>
    </div>
    
   );
}
 
export default TablePaginations;
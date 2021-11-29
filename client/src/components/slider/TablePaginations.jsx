
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './TablePaginations.scss'
import "../../styles/mixins.scss";
import "../../styles/variables.scss";


const TablePaginations = (props) => {
  const { component, page, onPageChange, rowsPerPage, onRowsPerPageChange } = props

  return ( 
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination
          component={component}
          count={100}
          page={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={onRowsPerPageChange}
          variant="outlined" 
          color="primary" 
          size="large" 
        />
      </Stack>
    </div>
    
   );
}
 
export default TablePaginations;
import Pagination from '@mui/material/Pagination';

const PaginationMovie = ({ pages, handleChange, page}) => {
  return (
    <div className="container_pagination">
      <Pagination
        sx={{
          '& .MuiPaginationItem-root': {
            border: '1px solid #f5f5f5',
            color: '#f5f5f5',
            '&:hover' : {
              bgcolor: '#f5f5f580'
            }
          },
          '& .Mui-selected': {
            bgcolor: '#f5f5f540',
            '&:hover': {
              bgcolor: '#f5f5f520'
            }
          }
        }}
        page={page}
        count={pages}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </div>
  )
}

export default PaginationMovie
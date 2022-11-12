import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'


const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const handlePageNumberChange = (event, value) => onPageChanged(value)

    return <Stack spacing={2} alignItems='center' >
         <Pagination count={pagesCount} 
         siblingCount={5}
         size='large'
         shape="rounded" 
         onChange={handlePageNumberChange}
         color='secondary'
          />
    </Stack >
}

export default Paginator

import { useState } from 'react'

export function useTablePagination(totalItems: number) {
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(20)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const handleItemsPerPageChange = (items: number) => {
        setItemsPerPage(items)
    }

    return {
        currentPage,
        itemsPerPage,
        pageCount: Math.round(totalItems / itemsPerPage),
        handlePageChange,
        handleItemsPerPageChange,
    }
}

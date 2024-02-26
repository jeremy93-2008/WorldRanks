interface PaginationProps {
    currentPage: number
    itemsPerPage: number
    pageCount: number
    onNextPage: () => void
    onPreviousPage: () => void
    onPageChange: (page: number) => void
}

export function Pagination(props: PaginationProps) {
    const { currentPage, pageCount, onPreviousPage, onPageChange, onNextPage } =
        props
    return (
        <div className="flex justify-center">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex mt-4 -space-x-px text-xs">
                    <li>
                        <a
                            className="cursor-pointer select-none px-4 py-2 border border-modal rounded-l-lg hover:bg-zinc-800"
                            onClick={onPreviousPage}
                        >
                            Previous
                        </a>
                    </li>
                    {[...new Array(pageCount)].map((_, index) => (
                        <li key={index}>
                            <a
                                className={
                                    currentPage === index
                                        ? 'cursor-pointer select-none px-4 py-2 border border-modal bg-neutral-800 hover:bg-zinc-800'
                                        : 'cursor-pointer select-none px-4 py-2 border border-modal hover:bg-zinc-800'
                                }
                                onClick={() => onPageChange(index)}
                            >
                                {index + 1}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            className="cursor-pointer select-none px-4 py-2 border border-modal rounded-r-lg hover:bg-zinc-800"
                            onClick={onNextPage}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

interface TagProps extends React.PropsWithChildren {
    isSelected?: boolean
    onClick?: () => void
}
export function Tag(props: TagProps) {
    const { isSelected, onClick, children } = props
    return (
        <div
            onClick={onClick}
            className={
                isSelected
                    ? 'cursor-pointer bg-modal flex justify-center px-4 py-1 rounded-xl'
                    : 'cursor-pointer text-primary px-4 py-1'
            }
        >
            {children}
        </div>
    )
}

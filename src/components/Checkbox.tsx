interface CheckboxProps {
    label: string
    isChecked?: boolean
    onChange?: (isChecked: boolean) => void
}

export function Checkbox(props: CheckboxProps) {
    const { label, isChecked, onChange } = props
    return (
        <div className="flex items-center mb-4">
            <input
                id={`checkbox-${label}`}
                type="checkbox"
                checked={isChecked}
                onChange={(evt) => onChange?.(evt.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                htmlFor={`checkbox-${label}`}
                className="ms-2 text-sm font-medium text-primary"
            >
                {label}
            </label>
        </div>
    )
}

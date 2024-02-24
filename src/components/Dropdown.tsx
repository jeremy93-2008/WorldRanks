export interface Option {
    label: string
    value: string
}

interface DropdownProps {
    selectedValue?: string
    onChange: (value: string) => void
    options: Option[]
}

export function Dropdown(props: DropdownProps) {
    const { selectedValue, onChange, options } = props
    return (
        <section className="flex flex-1 flex-col">
            <div className="flex flex-1 border-[1px] border-modal rounded-xl px-3">
                <select
                    value={selectedValue}
                    onChange={(e) => onChange(e.target.value)}
                    className="bg-transparent w-full py-3 focus:outline-none placeholder:text-primary"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    )
}

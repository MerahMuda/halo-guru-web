import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

export interface Option {
    value: string | number
    label: string
}

interface DropdownProps {
    options: Option[]
    onChange(): void
    id?: string,
    name: string,
    label?: string,
    defaultValue?: string
}
const Dropdown = (props: DropdownProps) => {
    const {
        options,
        onChange, name, label,
        id = name,
        defaultValue
    } = props
    return (
        <FormControl fullWidth>
            {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
            {options.length ? <Select
                labelId="demo-simple-select-label"
                name={name}
                id={id}
                onChange={onChange}
                defaultValue={defaultValue}
            >
                {
                    options.map(({ label: optionLabel, value }) => (
                        <MenuItem value={value} selected={value === defaultValue}>{optionLabel}</MenuItem>
                    ))
                }
            </Select> : <TextField fullWidth />}
        </FormControl>
    )
}

export default Dropdown;
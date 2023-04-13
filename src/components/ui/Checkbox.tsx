
interface checkboxProps {
    checked: boolean,
    toggleChecked: Function
}

export const Checkbox = (props: checkboxProps) => {
    const handleChange = (event:React.ChangeEvent<HTMLInputElement> ) => {
        props.toggleChecked();
        event.target.checked = props.checked;
        
    }
    return (
        <div>
            <input type="checkbox" checked={props.checked} onChange={(event) => handleChange(event)}>
            </input>
        </div>
    )

}
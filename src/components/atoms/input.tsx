interface AtomicInput extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'> {
    type: string;
    placeholder?: string;
}

const Input: React.FC<AtomicInput> = ({ onClick, type, placeholder,value, className, id,disabled }) => {

    return (
        <input type={type} value={value} placeholder={placeholder} className={className} id={id} disabled={disabled} />
    )
}

export default Input
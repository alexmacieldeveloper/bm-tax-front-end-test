interface Props {
    value: string;
    onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: Props) {
    return (
        <>
            <label htmlFor="search">Buscar empresa</label>
            <input
                id="search"
                type="text"
                placeholder="Digite o nome da empresa"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
}
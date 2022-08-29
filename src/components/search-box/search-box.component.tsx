import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
    className: string;
    handleChange: (event:ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
} 

const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange} />
);


export default SearchBox;
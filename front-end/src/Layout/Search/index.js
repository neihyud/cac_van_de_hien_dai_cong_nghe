import { useEffect, useState, useRef } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchServices from '../../services/searchService';
import { useDebounce } from '../../Hooks';

import './Search.scss';

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const debounced = useDebounce(searchValue, 600);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            return;
        }

        const fetchApi = async () => {
            const result = await searchServices.search(debounced);
            console.log(result);
        };
        fetchApi();
    }, [debounced]);
    const handleClearSearch = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element
        // solves this by creating a new parentNode context.
        <div>
            <div className="search">
                <input
                    type="text"
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search books"
                    onChange={handleChange}
                />
                {!!searchValue && (
                    <button className="clear" onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Search;

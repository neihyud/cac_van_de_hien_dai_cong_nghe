import { useEffect, useState, useRef, useContext } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchServices from '../../services/searchService';
import { useDebounce } from '../../Hooks';

import './Search.scss';
import axios from 'axios';
import { DataContext } from '../../context/DataContext';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    // const [books, setBooks] = useState([])
    const { books, setBooks, setIsSearch } = useContext(DataContext)
    const debounced = useDebounce(searchValue, 600);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setIsSearch(false)
            return;
        }

        // const fetchApi = async () => {
        //     const result = await searchServices.search(debounced);
        //     console.log(result);
        // };


        setIsSearch(true)
        axios.get(`http://localhost:8080/?title=${debounced}`)
            .then((res) => {
                console.log(res.data)
                setBooks(() => res.data)
            })
            .catch(err => console.log(err))

        // fetchApi();
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

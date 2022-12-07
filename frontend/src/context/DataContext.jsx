import { createContext, useState } from 'react';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const value = { data, setData, isSearch, setIsSearch };
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };

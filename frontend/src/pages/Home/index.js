import { Link } from 'react-router-dom';

import './Home.scss';

import { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { DataContext } from '../../context/DataContext';

const Table = ({ histories }) => {
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Last Updated</th>
            </tr>
        </thead>
        <tbody>
            {histories.map((history) => {
                return (
                    <>
                        <tr>
                            <td><Link to={`/author/${history.bookLink}`}>{history.book}</Link></td>
                        </tr>
                        <tr>
                            <td><Link to={`/author/${history.bookLink}`}>{history.book}</Link></td>
                        </tr>
                        <td>{history.createdAt}</td>
                    </>
                )
            })}
        </tbody>
    </table>
}

function Home() {

    const { isSearch, data } = useContext(DataContext)


    console.log("dat===========================", data)
    const [histories, setHistories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then((res) => setHistories(res.data))
            .catch((error) => console.log(error))
    }, [data])

    return (
        <div className="home">
            <p>Recently searched</p>
            {!histories.length ? <h2>Empty</h2> : <Table histories={histories} />}
            {data.map((d) => (<>TESt</>))}
        </div >
    );
}

export default Home;

import { Link } from 'react-router-dom';

import './Home.scss';

function Home() {
    return (
        <div className="home">
            <p>Recently searched</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>noi dung</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>noi dung</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>noi dung</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>noi dung</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>noi dung</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>noi dung</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;

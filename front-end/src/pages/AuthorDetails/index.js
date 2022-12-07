import { Link } from 'react-router-dom';

import './AuthorDetails.scss';
function Home() {
    return (
        <div className="authorDetials">
            <header className="authorDetailsHeader">
                <h1>AuthorName</h1>
                <small>was born in PlaceOfBirth</small>
            </header>

            <p>
                <strong>@item.AuthorName</strong> has written <strong>@item.AuthorBooks.Count()</strong> books. Go check
                them out below.
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of pages</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">noi dung</Link>
                        </td>
                        <td>noi dung</td>
                    </tr>
                </tbody>
            </table>
            <div className="lastUpdated">
                <p>Last updated: @item.DataAndTime</p>
            </div>
        </div>
    );
}

export default Home;

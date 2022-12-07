import React from 'react';
import { Link } from 'react-router-dom';
import './BookDetails.scss';
export default function BookDetails() {
    return (
        <div className="bookDetails">
            <header className="bookDetailsHeader">
                <div>
                    <h1>@item.Name</h1>
                    <small>
                        Written by <span>@Html.ActionLink@item.AuthorDetails.AuthorName, "AuthorDetails", new</span>
                    </small>
                </div>
            </header>
            <p>
                <strong>
                    <Link to="/">AuthorDetails</Link>
                </strong>
                has written <strong>@item.AuthorDetails.AuthorBooks.Count</strong> books. Check them out below.
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
                <p>Last updated: @item.AuthorDetails.DataAndTime</p>
            </div>
        </div>
    );
}

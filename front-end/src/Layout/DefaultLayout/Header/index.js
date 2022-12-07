import { Link } from 'react-router-dom';
import Search from '../../Search';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <div className="logo-holder">
                <div className="logo">
                    <Link to="/">
                        WebMantic<span>.</span>
                    </Link>
                </div>
                <Search />
            </div>
            <div className="here">
                <div className="header-content">
                    <h1>
                        <span>Book Search Application</span>
                    </h1>
                    <div className="text-container">
                        <p className="lead">
                            This application uses semantic web technology to gather the relevant data used within this
                        </p>
                        <p>application. Find out more with the link below.</p>
                    </div>
                    <div className="link_cour">
                        <a href="https://www.w3.org/standards/semanticweb/" target="_blank">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div className="control">
                <div className="searchBtn"></div>
                <i className="icon-search fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default Header;

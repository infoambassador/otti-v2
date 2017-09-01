 import React, {PropTypes} from 'react';
 import {Link, IndexLink} from 'react-router';
 import LoadingDots from './LoadingDots';

 const Header = ({loading}) => {
     return (
            <nav className="container-fluid navbar navbar-inverse">
                <div className="navbar-header">
                <IndexLink className="navbar-brand" to="/" activeClassName="active">Pluralsight Administration</IndexLink>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                    <li><Link to="/courses" activeClassName="active">Courses</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>{loading && <span><LoadingDots interval={30} dots={100}/>Loading</span>} </li>
                </ul>
                
            </nav> 
     );
 };

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

 export default Header;


/*
        <nav>
             <IndexLink to="/" activeClassName="active">Home</IndexLink>
             {" | "}
             <Link to="/about" activeClassName="active">About</Link>
             {" | "}
             <Link to="/courses" activeClassName="active">Courses</Link>
        </nav>
        */
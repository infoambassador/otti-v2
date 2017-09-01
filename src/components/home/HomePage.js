import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h2>Pluralsight Administration</h2>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-default btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
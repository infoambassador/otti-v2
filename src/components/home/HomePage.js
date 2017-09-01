import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h2>Online Texas Transfer Inventory</h2>
                <p>A web application interface for my favorite tool.</p>
                <Link to="about" className="btn btn-default btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
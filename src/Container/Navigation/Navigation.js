import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';

class Navigation extends Component {
    static propTypes = {
        logout: PropTypes.func
    };
    
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>Start</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
};

export default Navigation;

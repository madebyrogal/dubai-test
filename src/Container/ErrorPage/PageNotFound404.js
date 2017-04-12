import React, {Component} from 'react';
import {Link} from 'react-router';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import Navigation from './../Navigation/Navigation';

export default class PageNotFound404 extends Component {
    render() {
        return (
            <section>
                <Grid bsClass="container-fluid menu">
                    <Row>
                        <Navigation />
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Jumbotron>
                            <h1>Page not found :(</h1>
                            <p>You can go to.</p>
                            <p><Link to={'/'}><Button bsStyle="primary" to="">Home page</Button></Link></p>
                        </Jumbotron>
                    </Row>
                </Grid>
            </section>
        );
    }
}

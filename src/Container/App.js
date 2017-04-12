import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from './Navigation/Navigation';
import BrokerCarouser from './BrokerCarouser/BrokerCarouser';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';


/**
* App Component.
*/
class App extends Component {
    
    static propTypes = {
        children: PropTypes.node
    };

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
                        <BrokerCarouser />
                    </Row>
                </Grid>
            </section>
        );
    }
};

const mapStateToProps = (state) => ({
   
});

export default connect(mapStateToProps, {

})(App)

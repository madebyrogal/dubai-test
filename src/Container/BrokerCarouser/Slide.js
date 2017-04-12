import React, {Component, PropTypes} from 'react';

export default class Slide extends Component {
    static propTypes = {
        broker: PropTypes.object.isRequired,
        active: PropTypes.bool.isRequired
    }
    
    render() {
        return (
            <li className={this.props.active ? 'active' : ''}>
                <img src={this.props.broker.links.logo2x} className="logo img-responsive" alt="{this.props.broker.name}"/>
                <div className="content">
                    <h2>{this.props.broker.name}</h2>
                    <dl className="dl-horizontal">
                        <dt>Location</dt>
                        <dd>{this.props.broker.location}</dd>
                        <dt>Phone</dt>
                        <dd>{this.props.broker.phone}</dd>
                        <dt>About</dt>
                        <dd>{this.props.broker.description.substring(0, 1600) + ' ...'}</dd>
                    </dl>
                </div>
            </li>
        );
    }
};

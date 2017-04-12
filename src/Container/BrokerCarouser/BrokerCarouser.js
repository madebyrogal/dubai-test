import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getBrokers} from './../../Reducer/Brokers/actions';
import Slide from './Slide';

class BrokerCarouser extends Component {
    static propTypes = {
        brokers: PropTypes.object
    }
    
    constructor(props) {
        super(props);
        this.state = {
            slider: 0
        };
        this.prevSlider = this.prevSlider.bind(this);
        this.nextSlider = this.nextSlider.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    
    componentWillMount() {
        this.props.getBrokers();
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({total: Object.keys(nextProps.brokers).length});
    }
    
    prevSlider() {
        if(this.state.slider <= 0) {
            this.setState({slider: this.state.total - 1});
        } else {
            this.setState({slider: this.state.slider - 1});
        }
    }
    
    nextSlider() {
        if(this.state.slider >= this.state.total -1) {
            this.setState({slider: 0});
        } else {
            this.setState({slider: this.state.slider + 1});
        }
    }
    
    renderSliders() {
        if(this.props.brokers) {
            return Object.keys(this.props.brokers).map((index) => {
                return <Slide key={'slide-'+index} active={this.state.slider === parseInt(index, 10)} broker={this.props.brokers[index]} />;
            });
        }
    }
    
    componentDidMount() {
        this.timer = setInterval(this.nextSlider, 3000);
    }
    
    handleMouseEnter() {
        clearInterval(this.timer);
    }
    
    handleMouseLeave() {
        this.timer = setInterval(this.nextSlider, 3000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    render() {
        return (
            <section className="dubai-carousel" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <a className="nav-slider prev" href="#" onClick={this.prevSlider} />
                <ul>
                    {this.renderSliders()}
                </ul>
                <a className="nav-slider next" href="#" onClick={this.nextSlider} />
            </section>
        );
    }
};

const mapStateToProps = (state) => ({
    brokers: state.brokers
});

export default connect(mapStateToProps, {
    getBrokers
})(BrokerCarouser)

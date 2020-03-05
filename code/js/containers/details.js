import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render() {
        if (!this.props.car) {
            return (<p>Виберіть автомобіль...</p>);
        }
        return(
            <div>
                <h2>{this.props.car.name}</h2>
                <img src={this.props.car.img} width={500}/> <br />
                <p>{this.props.car.desc}</p>
                <p>Швидкість: {this.props.car.speed}, вага: {this.props.car.weight}</p>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        car: state.active
    };
}

export default connect(mapStateToProps)(Details);
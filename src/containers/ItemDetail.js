import React, { Component } from 'react'
import {connect} from 'react-redux'

class ItemDetail extends Component {
    render(){
        return(
            <div style={{backgroundColor : '#FFC433'}}>
                <span>Selected Item : </span>
                <span>{this.props.product.name}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.activeItem);
    return {
        product : state.activeItem
    };
}

export default connect(mapStateToProps)(ItemDetail)
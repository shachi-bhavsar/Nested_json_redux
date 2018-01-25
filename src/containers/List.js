import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectItem} from '../actions'
import {bindActionCreators} from 'redux'

class List extends Component {
    
    list (data){
        const child = (items) => {
            if(items){
                return <ul node={items}> {this.list(items)} </ul>
            }
        }
        return data.map((node) => {
            return <Item key = {node.id} name ={node.name} {...this.props} node={node}>
                    {child(node.items)}
                   </Item>
        })
    }
    render ()
    {
        if(!this.props.data)
            return <span>No data</span>
        else
            return (<ul>
                    {this.list(this.props.data)}
                </ul>)
    }
}

const mapStateToProps = (state) => {
    //console.log(state.data)
    return {
        data : state.data
    };
}
const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectItem : selectItem},dispatch)
}

class Item extends Component {
    constructor(){
        super();
        this.state = {
            expanded : false,
            name : "+"
        }
    }
    display (){
        if(this.state.expanded)
        {
            this.setState({
                expanded: !this.state.expanded,
                name: "+"
            }); 
        }
        else
        {
            this.setState({
                expanded: !this.state.expanded,
                name: "-"
            });
        }      
    }
    getExpandedText(props){
        if(this.state.expanded)
            return <span>{this.props.children}</span>;
        else
            return null;
    }
    render (){
        var expandedDiv = this.getExpandedText(this.props.children);
        return (<div style={{backgroundColor : '#E6FF33'}}>
            <li>           
                <button onClick={this.display.bind(this)}>{this.state.name} </button>
                <button onClick={() => this.props.selectItem(this.props.node)} > Get Name </button>
                <b>{this.props.name}<hr/>{ expandedDiv }</b>
            </li>
        </div>)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(List,Item)
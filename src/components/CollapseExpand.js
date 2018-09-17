import React, { Component } from 'react';

class CollapseExpand extends Component {

    state = {
        name: 'Expand all'
    };

    expandAll = () => {
        this.props.expandAll();
        const newName = this.state.name === 'Collapse all' ? 'Expand all' : 'Collapse all';
        this.setState({name: newName});
    };

    render() {
        return(
            <button className="expand__button" onClick={this.expandAll}>{this.state.name}</button>
        );
    }
}

export default CollapseExpand;
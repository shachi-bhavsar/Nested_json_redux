import React, { Component } from 'react';
import List from '../containers/List';
import ItemDetail from '../containers/ItemDetail'

class App extends Component {

  render() {
    return (
      <div style={{width : 500, backgroundColor : 'green'}}>
          <List/>
          <ItemDetail/>
      </div>
    );
  }
}

export default App;

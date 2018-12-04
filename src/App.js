// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;

import React from "react";
import 'react-tabulator/lib/styles.css';
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet
import ReactTableGrid from './Grid/reactTable.js';
import SearchGrid from './Grid/searchGrid.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchStatus: false
    }
  }

  searchBtn = () => {
    this.setState({searchStatus: true});
  }

  //add table holder element to DOM
  render(){
    return (
      <div>
        <SearchGrid searchBtn={() => this.searchBtn()}/>
        {(this.state.searchStatus) && <ReactTableGrid />}
      </div>
    );
  }
}

export default App;

//<div ref={el => (this.el = el)} />

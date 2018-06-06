import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setComputers, addComputers } from './actions/compucters';
import './App.css';

class App extends Component {
  render() {
    const {computers} = this.props.computers;
    const {setComputers, addComputers} = this.props;
    let comp;
    return(
      <div className="row">
        <div className="col s4">
          <Product computers={computers}/>
        </div>
      </div>
    )
  }
}
class Product extends Component {
  render() {
    const computers = this.props.computers;
    return (
      computers.map((comp) => {
        return(
          <div key={comp.id} className="card">
            <div className="card-image">
              <img src={comp.img}/>
              <span className="card-title" id='price' >{comp.name}</span>
            </div>
            <div className="card-content">
              <h2>{comp.price}</h2>
            </div>
            <div className="card-action">
              <a href="#">Buy</a>
            </div>
          </div>
          )
        }
      )
    )
  }
}
const mapState = state => ({
  ...state
});
const mapDispatch = dispatch => ({
  setComputers: computers => dispatch(setComputers(computers)),
});
export default connect(mapState, mapDispatch)(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var products= [
  {
      name: 'Multimedia 2400G',
      img: 'https://www.ttn.by/pics/items/kompyuter-ttn-multimedia-2400g.jpg',
      price: 927.97,
  },
  {
      name: 'Multimedia 2200G',
      img: 'https://www.ttn.by/pics/items/kompyuter-ttn-multimedia-2200g.jpg',
      price: 819.86,
  },
  {
      name: 'Gaming I8703k',
      img: 'https://www.ttn.by/pics/items/kompyuter-ttn-gaming-i8703k.jpg',
      price: 4139.58,
  },
  {
      name: 'Gaming I8702k',
      img: 'https://www.ttn.by/pics/items/kompyuter-ttn-gaming-i8702k_j.jpg',
      price: 3533.55,
  },
  {
      name: 'Gaming I8702',
      img: 'https://www.ttn.by/pics/items/kompyuter-ttn-gaming-i8702_j.jpg',
      price: 3545.79,
  },
  {
      name: 'Gaming I8701k',
      img: 'https://www.ttn.by/pics/items/kompyuter-ttn-gaming-i8701k_k.jpg',
      price: 3144.87,
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <List prod={products}/>
        <Product prod={products}/>
      </div>
    );
  }
}
class List extends Component {
  render() {
    return (
      <div className='List'>
        <i class="material-icons">
          keyboard_arrow_up
        </i>
        <img className="menu" src={this.props.prod[0].img}/>
        <img className="menu" src={this.props.prod[1].img}/>
        <img className="menu" src={this.props.prod[2].img}/>
        <img className="menu" src={this.props.prod[3].img}/>
        <img className="menu" src={this.props.prod[4].img}/>
        <i class="material-icons">
          keyboard_arrow_down
        </i>
      </div>
    )
  }
}
class Product extends Component {
  render() {
    return (
      <div className="Product">
        <div className="Product-desc">
          <h2>
            {this.props.prod[0].name}
          </h2>
          {this.props.prod[0].price}
        </div>
        <div className="Product-image">
          <button className='left button'>
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </button>
          <img src={this.props.prod[0].img}/>
          <button className='right button'>
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </button>
        </div>
      </div>
    );
  }
}
export default App;

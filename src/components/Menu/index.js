import React, { Component } from 'react';
import './Menu.css';
import image from './img/ICN32_hamburger@2x.png';



export default class Menu extends Component {
  constructor (props){
    super(props)

    this.state= {menuOpen : false}
  }

  toggleMenu = () => {
    this.setState ({menuOpen : !this.state.menuOpen})
  }

  render() {
    var { menuOpen } = this.state
    var menuClass = menuOpen ? 'open' : 'closed'
    return (


      <div
        className={`menu-wrap ${menuClass}`}
        onClick={this.toggleMenu}
      >
        <div className="menu">
          <div
            className="menu-btn"
            onClick={this.toggleMenu}
          ><img src={image} /></div>
          <ul>
            <li><a href="">Watch</a></li>
            <li><a href="">Done</a></li>
            <li><a href="">Outbox</a></li>
            <li><a href="">Inbox</a></li>
            <li><a href="">Settings</a></li>
          </ul>
        </div>
      </div>





    );
  }
}

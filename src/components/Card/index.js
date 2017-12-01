import React, { Component } from 'react';
import './Card.global.scss';

export default class Card extends Component {
  render() {
    var { title, recommends, desc, bannerSrc } = this.props
    var style
    if (bannerSrc){
      style  = {
        backgroundImage:
          `linear-gradient(-180deg,rgba(0,0,0,0.00) 40%, rgba(0,0,0,0.68) 100%),
          url("${bannerSrc}")`
        }
    } else{
      style  = {
        backgroundImage:
          `linear-gradient(-135deg, #903C68 0%, #4E2A3A 100%)`
        }
    }

    return (
      <div className="card" style={style}>

        <div className="card-topbar">
          <p className="recommends">{recommends}</p>
        </div>
        <div className="card-spacer-top"></div>
        <div className="card-info">
          <h2 className="series-title">{title}</h2>
          <p className="description">{desc}</p>
        </div>

        <div className="btnbar-wrap">
          <div className="btn-wrap accept"></div>
          <div className="btn-wrap decline"></div>
        </div>


      </div> //end card


    );
  }
}

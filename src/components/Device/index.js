import React, { Component } from 'react';
import Card from '../Card';
import Menu from '../Menu';
import Recommend from '../Recommend';
import './Device.css';



export default class Device extends Component {
  render() {
    return (
      <div className="Device">

        <div className="phone-wrap">
          <div className="phone iphone7">

            <Menu />
            <Recommend />
            <Card title="Legion" recommends="20" desc="lkajsldkjalskdj" bannerSrc="https://www.thetvdb.com/banners/fanart/original/320724-3.jpg"/>
            <Card title="Rick And Morty" recommends="20" desc="lkajsldkjalskdj" bannerSrc="https://www.thetvdb.com/banners/fanart/original/275274-10.jpg"/>
            <Card title="Helix" recommends="20" desc="lkajsldkjalskdj" bannerSrc="https://www.thetvdb.com/banners/fanart/original/265912-11.jpg"/>
            <Card title="Legion" recommends="20" desc="lkajsldkjalskdj" bannerSrc="https://www.thetvdb.com/banners/_cache/fanart/original/320724-3.jpg"/>
            <Card title="Legion" recommends="20" desc="lkajsldkjalskdj" bannerSrc="https://www.thetvdb.com/banners/_cache/fanart/original/320724-3.jpg"/>
            <Card title="Legion" recommends="20" desc="lkajsldkjalskdj" bannerSrc="https://www.thetvdb.com/banners/_cache/fanart/original/320724-3.jpg"/>

          </div>
        </div>





      </div> //end card


    );
  }
}

import React, { Component } from 'react';
import './RecommendFriend.global.scss';

export default class RecommendFriend extends Component {
  render() {


    return (
      <div className="recommend-friend-wrap">
        <div className="recommend-friend">
          <button className="btn btn-close">x</button>
          <h2>Recommend Show</h2>
          <p>Find a show to recommend to a friend</p>
          <form>
            <input type="text" name="SeriesName" />
          </form>
          <button className="btn btn-next">Next</button>
        </div>
      </div>


    );
  }
}

import React from "react"
import PropTypes from "prop-types"
import {debounce} from 'lodash'
import  { connect } from 'react-redux'
import Card from '../Card'
import {searchSeries, addSeries} from '../../actions'

class Watch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      results: null
    }
    this.debouncedDispatchQuery = debounce(this.dispatchQuery, 300)
  }

  handleInputChange = async (event) => {
    const search = event.target.value
    this.setState({ search })
    if (search.length > 2){
      this.debouncedDispatchQuery(search)
    }
  }

  dispatchQuery = async (search) => {
    const res = await this.props.dispatch(searchSeries(search))
    this.setState({results: res.payload.data})
  }

  addSeries = (id) => {
    this.props.dispatch(addSeries(id))
  }

  render() {
    const { series } = this.props
    const { search, results } = this.state
    return (
      <div className="App">
        { series.map( s => <Card
          title={s.seriesName}
          bannerSrc={s.artwork && `https://www.thetvdb.com/banners/${s.artwork.fileName}`}
        />)}
        <input onChange={this.handleInputChange} value={search} />
        <ul>
          { results && results.map( a => (
            <li>
              {a.seriesName}
              <button onClick={this.addSeries.bind(undefined, a.id)}>+</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(x=>x)(Watch)

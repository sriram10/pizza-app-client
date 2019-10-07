import React, { Component } from 'react';
import Card from '../components/Card/Card';
import triggerAPI from '../utils/triggerAPI';

class CardsGrid extends Component {
  state = {
    listData: [],
    searchData: [],
    error: null,
    searchText: ''
  }

  componentDidMount() {
    triggerAPI('pizza')
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.setState({
          listData: res.data,
          searchData: res.data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  onSearch = e => {
    this.setState({
      searchText: e.target.value,
      searchData: this.state.listData.filter(item => item.name.includes(e.target.value))
    })
  }

  onView = id => {
    
  }

  onSelect = id => {

  }

  render() {
    return (
      <div>
        <div>
          <label>Search Pizza: </label>
          <input className='search-input' type='text' value={this.state.searchText} onChange={this.onSearch} />
        </div>
        {
          this.state.error ? <p>Something went wrong</p> : null
        }
        <div>
          {
            Array.isArray(this.state.searchData) && this.state.searchData.length ? this.state.searchData.map(item => {
              return <Card
                key={item.id}
                {...item}
                view={this.onView}
                submit={this.onSelect}
                />
            }) : 'Look for some other pizza'
          }
        </div>
      </div>
    )
  }
}

export default CardsGrid;
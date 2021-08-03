import React, { Component } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'

class LoadMore extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount () {
  }

  loadBatch = () => {
    const loadCount = this.state.count
    axios({
      url: `${apiUrl}/next14`,
      method: 'GET',
      data: { loadCount }
    })
      .then(() => this.setState({ count: loadCount + 1 }))
      .catch(console.error)
  }
  render () {
    return (
      <button onClick={this.loadBatch}>Load More!</button>
    )
  }
}

export default LoadMore

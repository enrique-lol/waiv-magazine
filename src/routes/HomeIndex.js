import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { homeIndex } from '../api/article-auth.js'
import apiUrl from '../apiConfig'
import axios from 'axios'
// import { Card } from 'react-bootstrap'

class HomeIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: null
    }
  }
  componentDidMount () {
    const { msgAlert, user } = this.props
    if (!user) {
      msgAlert({
        heading: 'Log In or Join For Free',
        message: 'For free access, create an account',
        variant: 'warning'
      })
    }
    homeIndex(user)
      .then(res => this.setState({ articles: res.data.articles }))
      .then(() => console.log(`STATE: ${this.state.articles}`))
      // .then(res => console.log(`RESPONSE: ${res.data}`))
      .catch(error => {
        msgAlert({
          heading: 'Error',
          message: error.message,
          variant: 'danger'
        })
      })
  }

  loadBatch = () => {
    axios({
      url: `${apiUrl}/second14`,
      method: 'GET'
    })
      .then(res => this.setState({ articles: [...this.state.articles, res.data.articles] }))
      .then(() => console.log(`STATE: ${this.state.articles}`))
      .catch(console.error)
  }

  render () {
    const { articles } = this.state
    if (!articles) {
      return (
        <p>Coming soon ...</p>
      )
    }
    if (articles.length === 0) {
      return (
        <p>0 Live Articles</p>
      )
    }

    const articlesJsx = articles.map(article => (
      <Link to={`/home/articles/${article.id}`} key={article.id}>
        <article className='home-card'>
          <section className='top-card'>
            <img className='home-image' src={article.thumbnail}/>
          </section>

          <section className='bot-card'>
            <h3 className='roboto-mono thicc-letters'>{article.title}</h3>
            <p>{article.authorName}</p>
          </section>
        </article>
      </Link>
    ))
    return (
      <Fragment>
        <div className='bannana'>
          {!articlesJsx ? (
            <Skeleton count={2} height={500} width={640} />
          ) : (articlesJsx)}

        </div>
      </Fragment>
    )
  }
}

// <button onClick={this.loadBatch}>Load More!</button>

export default HomeIndex

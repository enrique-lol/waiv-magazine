import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
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

    const gridcluster1 = articles.slice(0, 4)
    const highlight = articles.slice(4, 5)
    const gridcluster2 = articles.slice(5, 9)
    const category = articles.slice(9, 10)
    const gridcluster3 = articles.slice(10, 14)

    const highlightJsx = highlight.map(article => (
      <Link to={`/articles/${article.id}`} key={article.id}>
        <article className='home-card hig'>
          <section className='left-card'>
            <img className='home-image' src={article.thumbnail}/>
          </section>

          <section className='right-card'>
            <div><h3 className='roboto-mono thicc-letters'>{article.quote}</h3></div>
            <div><h3 className='roboto-mono thicc-letters'>{article.summary}</h3></div>
          </section>
        </article>
      </Link>
    ))

    const categoryJsx = category.map(article => (
      <Link to={`/articles/${article.id}`} key={article.id}>
        <article className='home-card cat'>
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

    const gridcluster1Jsx = gridcluster1.map(article => (
      <Link to={`/articles/${article.id}`} key={article.id}>
        <article>
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
    const gridcluster2Jsx = gridcluster2.map(article => (
      <Link to={`/articles/${article.id}`} key={article.id}>
        <article>
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
    const gridcluster3Jsx = gridcluster3.map(article => (
      <Link to={`/articles/${article.id}`} key={article.id}>
        <article>
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
        <div className='content'>
          {gridcluster1Jsx}
        </div>
        <div>
          {highlightJsx}
        </div>
        <div className='content'>
          {gridcluster2Jsx}
        </div>
        <div className='content'>
          {categoryJsx}
        </div>
        <div className='content'>
          {gridcluster3Jsx}
        </div>
      </Fragment>
    )
  }
}

// <button onClick={this.loadBatch}>Load More!</button>

export default HomeIndex

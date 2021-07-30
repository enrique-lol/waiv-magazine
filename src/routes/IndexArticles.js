import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { articleIndex } from '../api/article-auth.js'
// import { Card } from 'react-bootstrap'

class ArticleIndex extends Component {
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
    articleIndex(user)
      .then(res => this.setState({ articles: res.data.articles }))
      .catch(error => {
        msgAlert({
          heading: 'Error',
          message: error.message,
          variant: 'danger'
        })
      })
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
            <img className='home-image' src={article.mainImageUrl}/>
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
        <div className='divider'>
          <h2 className='featured-text raleway'>Featured</h2>
        </div>
        <div className='bannana'>
          {articlesJsx}
        </div>
      </Fragment>
    )
  }
}

// <Card className='home-card'>
//   <Card.Img variant="top" src={article.mainImageUrl} />
//   <Card.Body>
//     <Card.Title className='roboto-mono thicc-letters'>{article.title}</Card.Title>
//     <Card.Text>
//       {article.authorName}
//     </Card.Text>
//   </Card.Body>
// </Card>

export default ArticleIndex

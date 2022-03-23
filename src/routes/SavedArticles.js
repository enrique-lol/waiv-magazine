import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
// import { retreiveArticles } from './../api/article-auth.js'

class SavedArticles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      savedArticles: null
    }
  }
  componentDidMount () {
    const { array } = this.props.array
    console.log(array)
    // retreiveArticles(array)
    // .then(res => this.setState({ savedArticles: res.data.savedArticles }))
    // .then(() => console.log(`STATE: ${this.state}`))
    // .then(res => console.log(`RESPONSE: ${res.data}`))
    // .catch(error => {
    //   msgAlert({
    //     heading: 'Error',
    //     message: error.message,
    //     variant: 'danger'
    //   })
    // })
  }

  render () {
    const { savedArticles } = this.state
    if (!savedArticles) {
      return (
        <p>Coming soon ...</p>
      )
    }
    if (savedArticles.length === 0) {
      return (
        <p>0 Live Articles</p>
      )
    }
    // /

    const articlesJsx = savedArticles.map(article => (
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
          {articlesJsx}
        </div>
      </Fragment>
    )
  }
}

export default SavedArticles

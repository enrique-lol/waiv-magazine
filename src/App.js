import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// Routes/pages
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
// import AllArticles from './components/AllArticles/AllArticles.js'
// import ViewArticle from './routes/ViewArticle.js'
import IndexArticles from './routes/IndexArticles.js'
import ViewArticle from './routes/ViewArticle.js'
import CreateArticle from './routes/CreateArticle.js'
import UpdateArticle from './routes/UpdateArticle.js'
// import AboutHome from './routes/AboutHome.js'
import FutureFeature from './routes/FutureFeature.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      guestId: '9e41c@f53D',
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user, guestId } = this.state

    return (
      <Fragment>
        <Header user={user} guestId={guestId} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <IndexArticles msgAlert={this.msgAlert} />
          )} />
          <Route exact path='/about' render={() => (
            <FutureFeature msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/my-profile' render={() => (
            <FutureFeature msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/home/create-article' render={() => (
            <CreateArticle msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/home' render={() => (
            <IndexArticles msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/home/articles/:id' render={() => (
            <ViewArticle msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/home/articles/:id/update/' render={() => (
            <UpdateArticle msgAlert={this.msgAlert} user={user} />
          )} />
        </main>

      </Fragment>
    )
  }
}

// <div>
//   <Route path="/index-articles" component={IndexArticles}/>
// </div>

export default App

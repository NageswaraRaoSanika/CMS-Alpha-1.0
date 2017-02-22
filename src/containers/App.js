import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchArticles, fetchingStarted } from '../actions/articles.js'

import { Link } from 'react-router';

class App extends Component {

  static propTypes = {
    articles: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { dispatch } = this.props 
    dispatch(fetchingStarted());
  }

  componentDidMount() {
    const { dispatch } = this.props 
    dispatch( fetchArticles() )
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    const { articles } = this.props
    if (articles.isFetchingArticles) {
      return (
        <div className='well'><h1>Loading</h1></div>
      )
    }

    let blogs = articles.articles

    const mappedArticles = blogs.length && blogs.map( tweet => {
    return (
      <div key={tweet.id} className="col-xs-12 col-sm-12 col-md-12" style={{padding:0}}>
        <div className="thumbnail" style={{margin:'2px',borderRadius:0,background:'#f2f2f2'}}>
          <div className="caption">
              <h4>{tweet.title}</h4><hr  style={{borderColor:'#673AB7'}} />
              <p>{tweet.article.substring(0,100)}</p>
          </div>
        </div>
      </div>
      )
    })

    return (
      <div className>
        <div className='col-md-3'>
          <h4 className='text-primary'>Welcome User</h4> <br/>
          <Link className='btn btn-primary' to="/addArticle" style={{ textDecoration: 'none' }}>Add Article</Link>
        </div>
        <div className='col-md-6'>
          {mappedArticles}
        </div>
        <div className='col-md-3'>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { articles } = state 

  return {
    articles
  }
}
 

export default connect(mapStateToProps)(App)
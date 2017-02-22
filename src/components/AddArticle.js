import React, { Component } from 'react'
import { addArticle } from '../actions/articles.js'
import { connect } from 'react-redux'

class AddArticle extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        let articleData = {
            title:this.refs['title'].value,
            article:this.refs['article'].value,
            user_id:1
        }
        const { dispatch } = this.props
        dispatch( addArticle(articleData))
        event.preventDefault();
    }

    render() {
        
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group">
                            <input type="text" ref='title' className="form-control"required placeholder="Article Title" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <textarea className="form-control textarea" rows="3" ref='article' placeholder="Put your article content here"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit" className="btn btn-primary pull-right">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => { return {} }

export default connect(mapStateToProps)(AddArticle)
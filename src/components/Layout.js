import React, { Component } from 'react'

export default class Layout extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" style={{background:'#673AB7'}}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" style={{color:'white'}} href="#">CMS Panel</a>
                        </div>
                    </div>
                </nav><br/><br/><br/>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
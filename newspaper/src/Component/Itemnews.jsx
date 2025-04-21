import React, { Component } from 'react'

export default class Itemnews extends Component {
    render() {
        return (
            <div>
                <div className="card mb-3" style={{ height: '35rem' }}>
                    <a href={this.props.url}><img src={this.props.imgurl ? this.props.imgurl : "newsimg.jpg"} className="card-img-top" style={{ height: '300px', backgroundSize: 'cover', objectFit: 'cover' }} alt="img" /></a>
                    <div className="card-body">
                        <h5 className="card-title fs-5">{this.props.title}...</h5>
                        <span className="badge text-bg-secondary my-1">{this.props.source}</span>
                        <p className="card-text ">{this.props.description}...</p>
                        <p className="card-text"><small className="text-body-secondary">{new Date(this.props.date).toGMTString()}</small></p>
                        <a href={this.props.url} className="btn btn-sm btn-primary fw-normal">Get full news</a>
                    </div>
                </div>
            </div>
        )
    }
}

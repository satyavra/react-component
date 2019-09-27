import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class Cards extends Component {
    render() {
        return (
            <div className="container">
            <div className="row mt-5">
            <div className="col-md-3">
            <div className="card">
            <img src={require('./img/1.jpg')} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="no-script-url" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card">
            <img src={require('./img/2.jpg')} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="no-script-url" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card">
            <img src={require('./img/3.jpg')} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="no-script-url" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card">
            <img src={require('./img/4.jpg')} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="no-script-url" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            )
        }
    }
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            businesses: [],
        };
    }

    render() {
        return (
            <div className="container">
            <section className="hero">
            <div className="hero-body">
            <div className="container">
            <h1 className="title">
            BLiT Businesses
        </h1>
        <h2 className="subtitle">
            by Bryce
        </h2>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-primary">
                                    <p className="title">Vertical...</p>
                                    <p className="subtitle">Top tile</p>
                                </article>
                                <article className="tile is-child notification is-warning">
                                    <p className="title">...tiles</p>
                                    <p className="subtitle">Bottom tile</p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title">Middle tile</p>
                                    <p className="subtitle">With an image</p>
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png"/>
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-danger">
                                <p className="title">Wide tile</p>
                                <p className="subtitle">Aligned with the right tile</p>
                                <div className="content">
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-success">
                            <div className="content">
                                <p className="title">Tall tile</p>
                                <p className="subtitle">With even more content</p>
                                <div className="content">

                                </div>
                            </div>
                        </article>
                    </div>
                </div>
        </div>
        </div>
        </section>
        <hr/>
        {this.state.businesses.map(business =>
                <div className="card" key={business.objectID}>
            <div className="card-content">
            <p className="title">
            {business['name']}
            </p>
            <p className="subtitle">
            {business['owner']}
            </p>
            </div>
            <footer className="card-footer">
            <p className="card-footer-item">
            <span>
            <a href="{business.url}">View Website</a>
        </span>
        </p>
        </footer>
        </div>
    )}
    </div>
    );
    }

    componentDidMount() {
        fetch('https://blacklatinoit.com/api/businesses')
            .then(response => response.json())
            .then(data => {
                var result = Object.keys(data).map((key) => {
                    return data[key];
                });
                console.log(result);
                this.setState({ businesses: result })
            });
    }
}

export default App;

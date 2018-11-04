import React, { Component } from 'react';
import Header from './header';
import FeaturedHouse from './featured-house';

import './main-page.css';
class App extends Component {

    // Option 1:
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    // Option 2:
    state = {};

    componentDidMount() {
        // LifeCycle Methods: Mounting
        // 1. Constructor(), 2. Render(), 3.  componentDidMount()
        this.fetchHouses();

        // LifeCycle Methods: Updating
        // 1. getDerivedStateFromProps(), 2. shouldComponentUpdate(), 3. render(), 4. componentDidUpdate()

        // LifeCycle Methods: UnMounting
        // componentDidUnmount()

        // LifeCycle Methods: Error Boundary
        // componentDidCatch()
    }

    fetchHouses = () => {
        fetch('/houses.json').
        then(response => response.json()).
        then(allhouses => {
            this.allhouses = allhouses;
            this.getFeaturedHouse();
        });
    }

    getFeaturedHouse = () => {
        if (this.allhouses) {
            const randomIndex = Math.floor(Math.random() * this.allhouses.length);
            const featuredHouse = this.allhouses[randomIndex];
            this.setState({
                featuredHouse
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Header subtitle="Providing houses all over the world" />
                <FeaturedHouse house={this.state.featuredHouse} />
            </div>
        )
    }
}

export default App;
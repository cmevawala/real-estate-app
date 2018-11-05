import React, { Component } from "react";
import Header from "./header.jsx";
import FeaturedHouse from "./featured-house.jsx";

import "./main-page.css";
import HouseFilter from "./house-filter.jsx";
import SearchResults from "../search-results/index.jsx";

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
    fetch("/houses.json")
      .then(response => response.json())
      .then(allhouses => {
        this.allhouses = allhouses;
        this.determineFeaturedHouse();
        this.determineUniqueCountries();
      });
  };

  determineFeaturedHouse = () => {
    if (this.allhouses) {
      const randomIndex = Math.floor(Math.random() * this.allhouses.length);
      const featuredHouse = this.allhouses[randomIndex];
      this.setState({
        featuredHouse
      });
    }
  };

  determineUniqueCountries = () => {
    const countries = this.allhouses
      ? Array.from(new Set(this.allhouses.map(h => h.country)))
      : [];
    countries.unshift(null);
    this.setState({ countries });
  };

  filterHouses = country => {
    this.setState({ activeHouse: null });
    const filteredHouses = this.allhouses.filter(h => h.country === country);
    this.setState({ filteredHouses });
    this.setState({ country });
  };

  setActiveHouse = house => {
    this.setState({ activeHouse: house });
  };

  render() {
    let activeComponent = null;
    
    if (this.state.country) {
      activeComponent = <SearchResults country={this.state.country} filteredHouses={this.state.filteredHouses} setActiveHouse={this.setActiveHouse} />
    }

    if (this.state.activeHouse) {
      activeComponent = <FeaturedHouse house={this.state.activeHouse} />
    }

    if (!activeComponent) {
      activeComponent = <FeaturedHouse house={this.state.featuredHouse} />
    }

    return (
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses} />
        {activeComponent}
      </div>
    );
  }
}

export default App;

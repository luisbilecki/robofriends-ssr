import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Page from '../layouts/main';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class Robots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: ''
    }
  }

  static async getInitialProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        robots: data,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots } = this.props;
    const { searchField } = this.state;

    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return <Page>
      <div>
        <Header />
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    </Page>;
  }
}

export default Robots;

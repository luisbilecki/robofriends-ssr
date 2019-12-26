import React, { Component } from 'react';
import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class Robots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { data } = this.props;
    const { searchField } = this.state;

    const filteredRobots = data.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return <div>
      <Header />
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>;
  }
}

export default Robots;

import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor(){
        super()

        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const State = this.state;
        const filteredRobots = State.robots.filter(robot => {
            return robot.name.toLowerCase().includes(State.searchfield.toLowerCase())
        })

        if(State.robots.length === 0) {
            return (
                <div className="tc">
                    <h1 className = "f1 tracked">RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <p className="loading f3 bg-light-green dib br3 pa2 ma2 bw2">Loading...</p>
                </div>
                )
        } else{
             // eslint-disable-next-line
            if (filteredRobots == false){
                return (
                    <div className="tc">
                        <h1 className = "f1 tracked">RoboFriends</h1>
                        <SearchBox searchChange = {this.onSearchChange} />
                        <p className="f3 bg-light-green dib br3 pa2 ma2 bw2">Nothing to display</p>
                    </div>
                    )
            }else{

            return (
                <div className="tc">
                    <h1 className = "f1 tracked">RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
                )
            }
        }
    }
   
}

export default App
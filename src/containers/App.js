import React, { Component, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

function App(){

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users))
    });

    function onSearchChange (event){
        setSearchField(event.target.value );
    }

        // const State = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        if(robots.length === 0) {
            return (
                <div className="tc">
                    <h1 className = "f1 tracked">RoboFriends</h1>
                    <SearchBox searchChange = {onSearchChange} />
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
                    <SearchBox searchChange = {onSearchChange} />
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
export default App;

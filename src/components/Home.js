import classes from "./Home.module.css";
import Coding from "./../img/Coding.jpg";

import {Component} from 'react';

export default class Home extends Component {
static displayName = Home.name;



state = {
numberOfRepos: 0
}

componentDidMount() {
    fetch('https://api.github.com/users/Mike424-star/repos')
    .then(response => response.json())
    .then(response => {
        this.setState({
            numberOfRepos: response.length
        })
    });
}
    

render()  {
    return (<div className={classes.Home}>
    <div className={classes.Container}>
        <h1 className={classes.Hello}>Hi !</h1>
        <h1>Welcome to my portfolio</h1>
        <h2>Total repos: {this.state.numberOfRepos} </h2>
    </div>
    <img className={classes.Coding} src={Coding} alt="Coding"></img>
    
    </div>);
}}

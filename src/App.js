import logo from './logo.svg';
import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import HomeContainer from './containers/home_container'
import ShowContainer from './containers/show_movie_container'


class App extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      all_movies: []

    }

  }


  componentDidMount(){
    console.log('hi')
      fetch('http://localhost:3000/movies')
        .then(res=> res.json())
        .then(resp=>{
          debugger
        console.log(resp)
      })
    

  }



  


  render () {
    return (
      <div className="App">


       <Router>
         <Route exact path ='/'>
           <HomeContainer movie_arr = {this.state.all_movies}/>
         </Route>



       </Router>
      </div>
    );
  }



}

export default App;

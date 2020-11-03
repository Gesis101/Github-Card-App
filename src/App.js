import './App.css';
import React from 'react';
import {Form} from './components/Form';
import CardList from './components/Cardlist';
// eslint-disable-next-line
//import Api from './components/Api';
import Card from './components/Card';

class App extends React.Component {
  /* constructor(props){
    super(props);
    this.state = {
      profiles: testData,
    };
  } */
  // Same thing as above -- instead of using a constructor
  state = {
    profiles: []
  }
  addNewProfile = (profileData) => {
   this.setState(prevState => ({
     profiles: [...prevState.profiles,profileData ]
   }))
  };

  render(){
    return(
      <div className="App">
    	  <div className="title">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} currentState={this.state.hasError}/>
        <CardList profiles={this.state.profiles}/>
        <Card />
    	</div>
    )
  }
  
}

export {App}

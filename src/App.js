import React from "react";
import { Form } from "./components/Form";
import CardList from "./components/Cardlist";
// eslint-disable-next-line
//import Api from './components/Api';
import Cards from "./components/Card";
import {Container, Typography} from "@material-ui/core";
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
  };
  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <Container 
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center">
        <div className="App">
        <Typography color="textPrimary" gutterBottom variant="h4" align='center'style={{"text-transform":"uppercase"}}>
          <div>{this.props.title}</div>
        </Typography>
          <Form
            onSubmit={this.addNewProfile}
            currentState={this.state.hasError}
          />
          <CardList profiles={this.state.profiles} />
          
        </div>
      </Container>
    );
  }
}

export { App };

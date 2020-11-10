import React from "react";
import { Form } from "./components/Form";
import CardList from "./components/Cardlist";
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
      <div>
      <Typography color="textPrimary" gutterBottom variant="h4" align='center' style={{"text-transform":"uppercase", boxShadow: "8px 8px 16px -7px #000000" }}>
            <div>{this.props.title}</div>
      </Typography>
      <Container 
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center">
        <div className="App">
          
          <Form
            onSubmit={this.addNewProfile}
            currentState={this.state.hasError}
          />
          <div className='cards'>
            <CardList profiles={this.state.profiles} />
          </div>
        </div>
      </Container>
      </div>
    );
  }
}

export { App };

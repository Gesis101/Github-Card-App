import React from 'react';
//import Axios from 'axios';
import Api from './Api';
import ErrorHandling from './Errors';
import { Input, Button, Alert} from '@material-ui/core';

   //handles form eventsx
class Form extends React.Component{
     state = {
          userName: '',
          hasError: ''
     }
     handleSubmit = async (event) => {
     event.preventDefault(); //Stop page from refreshing on submit. Avoid losing state
     try{
          this.setState({ hasError: ''})
          const api = new Api(); 
          const data = await api.retrieveUser(this.state.userName)
          this.props.onSubmit(data);

     }catch(e){
          console.log("Github API error", e);
        //  const err = new ErrorHandling(e);
          this.setState({ hasError: e})
     }
     //Reset after submit. Make sure to grab value before code below.
          this.setState({ userName: ''})
     };

render(){
     var err = this.state.hasError;
     return(
     <form onSubmit={this.handleSubmit} >
     <ErrorHandling data={this.state.hasError}/>
     <Input 
          type='text' 
          placeholder='Enter GitHub name' 
          value={this.state.userName} 
          onChange={event => this.setState({userName: event.target.value})}
          required
          autoFocus='true'
          error={this.err === '' ? 'false' : 'true'}
          />
     
     <Button color='inherit' style={{backgroundColor: "grey", margin: '5px'}}>Add Card</Button>
     </form>
     )
}
}

export {Form};
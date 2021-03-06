import React from 'react';
//import Axios from 'axios';
import Api from './Api';
import ErrorHandling from './Errors';
import { Input, Button, Container} from '@material-ui/core';

   //handles form eventsx
class Form extends React.Component{
     state = {
          userName: '',
          hasError: ''
     }
     handleSubmit = async (event) => {
     this.setState({ hasError: ''})
     event.preventDefault(); //Stop page from refreshing on submit. Avoid losing state
     try{
          const api = new Api(); 
          const data = await api.retrieveUser(this.state.userName)
          await this.props.onSubmit(data);

     }catch(e){
          console.log("Github API error", e);
        //  const err = new ErrorHandling(e);
          this.setState({ hasError: e})
     }
     //Reset after submit. Make sure to grab value before code below.
          this.setState({ userName: ''})
     };

render(){
     return(
      <div align='center' style={{marginTop: '10%'}}>
          <ErrorHandling data={this.state.hasError}/>
          <form onSubmit={this.handleSubmit} >
               <Input 
                    type='text' 
                    placeholder='Enter GitHub name' 
                    autoFocus='true'
                    value={this.state.userName} 
                    onChange={event => this.setState({userName: event.target.value})}
                    required
                    error={this.err === '' ? 'false' : 'true'}
                    />
               
               <Button color='inherit' style={{backgroundColor: "grey", margin: '5px'}}>Add Card</Button>
          </form>
     </div>
     )
}
}

export {Form};
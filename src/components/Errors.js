import React from 'react';
import Alert from '@material-ui/lab/Alert';

//passs state from Form to here;


class ErrorHandling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: this.props.data}; 
  }
  

  render() {
    if(this.props.data !== ''){
      return (
      <Alert severity="error">USERNAME NOT FOUND </Alert>
      )
    }else {
      return( <Alert style={{display: "none" }} severity="success">User found</Alert>)
    }
  }  
}
export default ErrorHandling
import React from 'react';

//passs state from Form to here;


class ErrorHandling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: this.props.data}; 
  }
  

  render() {
    if(this.props.data !== ''){
      return (
      <h5 style={{color: 'red'}} >USERNAME NOT FOUND </h5>
      )
    }else {
      return( <h5 style={{display: "none" }}> User found</h5>)
    }
  }  
}
export default ErrorHandling
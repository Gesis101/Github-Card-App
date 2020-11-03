import React from 'react';
import Axios from 'axios';

class Api extends React.Component{

     retrieveUser = async (userName) => {
       const res = await Axios.get(`https://api.github.com/users/${userName}`)
       //this.props.onSubmit(res.data)
       return res.data
     }
}

export default Api
import React from "react";
import { Card, CardContent} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';


class Cards extends React.Component {
  state = {
    'userSearched': false
  }
  set1 = () => {
    this.setState({'userSearched': true});
  };

  render() {
    const profile = this.props;
    
    if(profile.name){
    return (
      <div className="github-profile">
      <Card align='center'  style={{ margin:"10%"}}>
         <img src={`${profile.avatar_url}`} alt='' style={{ width: "100%" }} />
         <CardContent align='left'>
          <div className="info" style={{ marginLeft: "10px" }}>
            <div className="name" style={{ fontWeight: "600" }}>
              Name: {profile.name} 
    
            </div>
            <div className="name" style={{ fontWeight: "600" }}> 
              Username: {profile.login}
            </div>
            <div className="name" style={{ fontWeight: "600" }}>
              followers: {profile.followers}
            </div>
            <div className="company">{profile.company}</div>
          </div>
          </CardContent>
      </Card>
      </div>
    );
    }else{
      return(<div></div>
  )
    }
  }
}

export default Cards;

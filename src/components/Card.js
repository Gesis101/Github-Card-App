import React from 'react';

class Card extends React.Component{
     render(){
       const profile = this.props;
       return(
         <div className="github-profile">
              <img src={profile.avatar_url} alt="" style={{'width':'75px'}}/>
           <div className="info"  style={{ marginLeft: "10px"}}>
             <div className="name" style={{ fontWeight : '600'}}>{profile.name}</div>
             <div className="company">{profile.company}</div>
           </div>
            </div>    
         );
     }
}

export default Card;
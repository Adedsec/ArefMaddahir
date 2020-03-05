import React from "react";

import SnowStorm from "react-snowstorm";

class MainLayout extends React.Component {
  render() {
    return (
      <div className="main container">
        <SnowStorm
          animationinterval="70"
          flakesMaxActive="50"
          followMouse={true}
          targetElement={this.props.targetID}
          useTwinkleEffect={true}
          snowColor="#b5faff"
          excludeMobile={false}
        />
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;

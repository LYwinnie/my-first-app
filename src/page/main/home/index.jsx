import React from 'react';
import {Route} from 'react-router'
import { HashRouter as Router,Link } from "react-router-dom";
import {observer, inject} from 'mobx-react'
@observer
class Home extends React.Component{
  render() {
    return(
      <div>
        home
      </div>
    )
  }
}

export default Home;

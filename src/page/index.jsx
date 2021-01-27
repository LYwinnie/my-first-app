import React from 'react';
import { Route } from 'react-router'
import { HashRouter as Router, Switch } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import Main from './../page/main/index';
import './index.scss';
import routers from './../router/index.js'
@observer
class App extends React.Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <Router>
          {
            routers.map((item) => {
              return <Route key={item.name} path={item.path} exact={item.exact}
                render={props => (
                  //主要是为了传递嵌套路由到子组件 
                  //主要是为了传递嵌套路由到子组件 feature-liuyan
                  //主要是为了传递嵌套路由到子组件 feature-liuyan2
                  //主要是为了传递嵌套路由到子组件main
                  //主要是为了传递嵌套路由到子组件main3
                  //主要是为了传递嵌套路由到子组件main4
                  //主要是为了传递嵌套路由到子组件main5
                  //类似于 <User {...props} routes={routes} />
                  <item.component {...props} routers={item.children} />

                )} />
            })
          }
        </Router>
      </React.Fragment>
    )
  }
}

export default App;

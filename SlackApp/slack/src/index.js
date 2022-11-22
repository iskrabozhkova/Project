import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register';
import 'semantic-ui-css/semantic.min.css'
import firebase from '@firebase/app-compat';

class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.history.push("/");
      }
    })
  }
  render() {
  return (
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Switch>
  )
  }
}
const RootWithRouter = withRouter(Root);
ReactDOM.render(
  <Router>
    <RootWithRouter />
    </Router>,
  document.getElementById('root')
);
reportWebVitals();

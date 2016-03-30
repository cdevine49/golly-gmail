var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Auth = require('./utils/auth');

var Home = require('./components/home');
var Identifier = require('./components/identifier');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Welcome</h1>
        {this.props.children}
      </div>
    );
  }

});

// var requireAuth = function(nextState, replace) {
//   if (!Auth.loggedIn()) {
//     replace({
//       pathname: '/identifier',
//       state: { nextPathname: nextState.location.pathname }
//     });
//   }
// };
// onEnter={requireAuth}

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>
);
// <Route path='identifier' component={Identifier}></Route>
// <Route path='password' component={password}></Route>

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});

module.exports = App;

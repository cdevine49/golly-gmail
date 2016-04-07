var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var App = require('./components/app');
var EmailPreviewTable = require('./components/emailPreviewTable');
var EmailDetails = require('./components/emailDetails');
var LoginForm = require('./components/loginForm');
var SignupForm = require('./components/signupForm');

var SessionStore = require('./stores/sessionStore');
var ApiUtil = require('./utils/apiUtil');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App} onEnter={_ensureLoggedIn} >
        <IndexRoute component={EmailPreviewTable} />
        <Route path='inbox' component={EmailPreviewTable} />
          <Route path='inbox/:id' component={EmailDetails} />
        <Route path='starred' component={EmailPreviewTable}/>
          <Route path='starred/:id' component={EmailDetails} />
        <Route path='important' component={EmailPreviewTable}/>
          <Route path='important/:id' component={EmailDetails} />
        <Route path='outbox' component={EmailPreviewTable}/>
          <Route path='outbox/:id' component={EmailDetails}/>
        <Route path='search-results' component={EmailPreviewTable}/>
          <Route path='search-results/:id' component={EmailDetails}/>
      </Route>

      <Route path='/login' component={LoginForm}/>
      <Route path='/signup' component={SignupForm}/>

    </Router>,
    document.getElementById('root')
  );
});

function _ensureLoggedIn(nextState, replace, callback) {
  if (!SessionStore.currentUserFetched()) {
    ApiUtil.fetchCurrentUser(_redirectUnlessLoggedIn);
  } else {
    _redirectUnlessLoggedIn();
  }

  function _redirectUnlessLoggedIn() {
    if (!SessionStore.isLoggedIn()) {
      replace('/login');
    }
    callback();
  }
}


module.exports = App;

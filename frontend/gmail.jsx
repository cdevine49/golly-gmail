var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var App = require('./components/app');
var EmailPreviewTable = require('./components/emailPreviewTable');
var DraftPreviewTable = require('./components/draftPreviewTable');
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
        <Route path='inbox/:num' component={EmailPreviewTable} />
          <Route path='email/:id' component={EmailDetails} />
        <Route path='starred/:num' component={EmailPreviewTable}/>
        <Route path='important/:num' component={EmailPreviewTable}/>
        <Route path='outbox/:num' component={EmailPreviewTable}/>
        <Route path='search-results/:num' component={EmailPreviewTable}/>
        <Route path='drafts/:num' component={EmailPreviewTable} />
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

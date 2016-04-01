var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var App = require('./components/app');
var EmailPreviewTable = require('./components/emailPreviewTable');
var EmailDetails = require('./components/emailDetails');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var SessionStore = require('./utils/apiUtil');

// <Route path='/login' component={LoginForm}/>
// <Route path='/signin' component={SigninForm}/>

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={EmailPreviewTable} />
        <Route path='inbox/:id' component={EmailDetails} />
      </Route>
    </Router>,
    document.getElementById('root')
  );
});

module.exports = App;

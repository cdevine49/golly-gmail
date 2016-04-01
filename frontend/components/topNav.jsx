var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SessionStore = require('../stores/sessionStore');
var Search = require('./search.jsx');


var TopNav = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function() {
    this.sessionStoreToken = SessionStore.addListener(this._onChange);
    this._onChange();
  },

  componentWillUnmount: function () {
    this.sessionStoreToken.remove();
  },

  _onChange: function () {
    if (!SessionStore.isLoggedIn()) {
      this.context.router.push('/login');
    }
  },

  render: function() {
    return (
      <header className='header group'>
        <nav className='topnav-above group'>
          <button onClick={ApiUtil.logout}>Logout</button>
        </nav>
      </header>
    );
  }

});

module.exports = TopNav;

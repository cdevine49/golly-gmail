var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SessionStore = require('../stores/sessionStore');
var ClickStore = require('../stores/clickStore');
var Search = require('./search.jsx');
var Link = require('react-router').Link;

var TopNav = React.createClass({

  getInitialState: function() {
    return {
      account_dropdown: false
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function() {
    this.sessionStoreToken = SessionStore.addListener(this._onChange);
    this.clickStoreToken = ClickStore.addListener(this._handleAppClick);
    this._onChange();
  },

  componentWillUnmount: function () {
    this.sessionStoreToken.remove();
    this.clickStoreToken.remove();
  },

  _onChange: function () {
    if (!SessionStore.isLoggedIn()) {
      this.context.router.push('/login');
    }
  },

  _handleAppClick: function () {
    this.setState({account_dropdown: false});
  },

  _handleAccountBoxClick: function (e) {
    e.stopPropagation();
  },

  _handleBadgeClick: function (e) {
    e.stopPropagation();
    this.setState({account_dropdown: !this.state.account_dropdown});
  },

  _newAccount: function() {
    var callback = function () { this.context.router.push("/signup/"); }.bind(this);
    ApiUtil.logout(callback);
  },

  render: function() {
    return (
      <header className='main-header header-top group'>
        <div className='GollyGmail-logo-header'>GollyGmail</div>
        <Search />
        <div className='header-right group'>
          <span className='header-name'>{SessionStore.currentUser().first_name}</span>
          <span className='header-badge' onClick={this._handleBadgeClick}>{SessionStore.currentUser().first_name[0].toUpperCase()}</span>
        </div>
        <div className={this.state.account_dropdown ? 'account-box' : 'account-box hidden'} onClick={this._handleAccountBoxClick}>
          <div className='account-info group'>
            <div className='profile-pic'></div>
            <div className='user-info'>
              <span className='name'>{SessionStore.currentUser().first_name + ' ' + SessionStore.currentUser().last_name}</span>
              <span className='email'>{SessionStore.currentUser().gollygmail}</span>
              <a className='connect-with-facebook' href="auth/facebook">Connect Facebook</a>
            </div>
          </div>
          <div className='signin-signup-links group'>
            <button className='new-account-link' onClick={this._newAccount}>Add account</button>
            <button className='account-box-logout-button' onClick={ApiUtil.logout}>Logout</button>
          </div>
        </div>
      </header>
    );
  }

});

// <Link className='my-account-link' to={'/account/'}>My   account</Link>
module.exports = TopNav;

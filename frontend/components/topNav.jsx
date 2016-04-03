var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SessionStore = require('../stores/sessionStore');
var Search = require('./search.jsx');
var Link = require('react-router').Link;

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
      <header className='main-header'>
        <section className='header-top group'>
        <div className='GollyGmail-logo-header'>GollyGmail</div>
        <Search />
        <div className='header-right group'>
          <span className='header-name'>{SessionStore.currentUser().first_name}</span>
          <span className='header-badge'>{SessionStore.currentUser().first_name[0].toUpperCase()}</span>
        </div>
        <div className='account-box hidden'>
          <div className='account-info group'>
            <div className='profile-pic'></div>
            <div className='user-info'>
              <span className='name'>{SessionStore.currentUser().first_name + ' ' + SessionStore.currentUser().last_name}</span>
              <span className='email'>{SessionStore.currentUser().gollygmail}</span>
            </div>
          </div>
          <div className='signin-signup-links group'>
            <Link className='new-account-link' to={'/signup/'}>Add account</Link>
            <button className='account-box-logout-button' onClick={ApiUtil.logout}>Logout</button>
          </div>
        </div>
      </section>
        <nav className='header-navbar'></nav>
      </header>
    );
  }

});

// $(document).ready(function(){
//       $('.account-box').on('click', function(event){
//         debugger
//         console.log('click - form');
//         event.stopPropagation();
//       });
//
//
//       $('.header-badge').click(function(event){
//         debugger
//         $('.account-box').toggle();
//         event.stopPropagation();
//       });
//
      // $('html').click(function(event){
      //   debugger
      //   console.log('click - body');
      //   //hide the form if the body is clicked
      //   $('.account-box').css('display','none');
      // });
//
    // });

// <Link className='my-account-link' to={'/account/'}>My   account</Link>
module.exports = TopNav;

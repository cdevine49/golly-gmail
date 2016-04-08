var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SessionStore = require('../stores/sessionStore');
var Link = require('react-router').Link;

var LoginForm = React.createClass({

  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  getInitialState: function() {
    // Add Footer to Login and Sign Up Pages
    return {
      username: '',
      password: ''
    };
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    var router = this.context.router;
    ApiUtil.login(this.state, function () {
      router.push('/inbox/');
    });
  },

  _handleDemo: function (e) {
    e.preventDefault();
    var router = this.context.router;
    ApiUtil.login({username: 'conor', password: 'password'}, function () {
      router.push('/inbox/');
    });
  },

  _updateUsername: function (e) {
    this.setState({ username: e.currentTarget.value });
  },

  _updatePassword: function (e) {
    this.setState({ password: e.currentTarget.value });
  },

  render: function() {
    return (
      <section className='login-page'>
        <h1 id='test' className='GollyGmail-logo-login'>GollyGmail</h1>
        <h1 className='login-page-main-header'>One Account. Not much of Google.</h1>
        <h2 className='login-page-sub-header'>Sign in to continue to GollyGmail</h2>
        <section className='login-form-section'>
          <form onSubmit={this._handleSubmit} className='login-form'>
            <label htmlFor='login-username-label' className='login-username-label'></label>
              <input
                id='login-username'
                className='login-username-input'
                placeholder='Enter your email'
                type='text'
                onChange={this._updateUsername}
                value={this.state.username} />

              <label htmlFor='login-password-label' className='login-password-label'></label>
              <input
                id='login-password'
                className='login-password-input'
                placeholder='Password'
                type='password'
                onChange={this._updatePassword}
                value={this.state.password} />
              <button className='login-submit'>Log In</button>
              <a className='signin-with-facebook' href="auth/facebook">Sign In With Facebook</a>
              <p className='signin-with-facebook-disclaimer'>(You have to create and connect and account first)</p>
          </form>
          <div className='signin-link-and-logo'>
            <Link className='signup-from-signin-link' to={'/signup/'}>Create account</Link>
            <p className='signin-bottom-text'>One GollyGmail Account for nothing Google.</p>
            <div className='signup-multiple-gmail-logo'></div>
          </div>
        </section>
      </section>
    );
  }

});

// <div className='demo-signin' onClick={this._handleDemo}>Sign In as Conor</div>;





module.exports = LoginForm;

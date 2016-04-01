var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SessionStore = require('../stores/sessionStore');
var Link = require('react-router').Link;

var LoginForm = React.createClass({

  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    var router = this.context.router;
    ApiUtil.login(this.state, function () {
      router.push('/inbox');
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
      <section>
        <form onSubmit={this._handleSubmit}>
          <label>Username
            <input type='text' onChange={this._updateUsername} value={this.state.username} />
          </label>

          <label>Password
            <input type='password' onChange={this._updatePassword} value={this.state.password} />
          </label>
          <button>Log In</button>
        </form>
        <Link to={'/signup/'}>Create an Account</Link>
      </section>
    );
  }

});






module.exports = LoginForm;

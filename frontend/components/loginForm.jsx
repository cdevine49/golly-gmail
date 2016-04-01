var React = require('react');
var ApiUtil = require('../utils/apiUtil');

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
    ApiUtil.login(this.state, _sendtoInbox());
  },

  _sendtoInbox: function () {
    router.push('/inbox');
  },

  _updateUsername: function (e) {
    this.setState({ username: e.currentTarget.value });
  },

  _updatePassword: function () {
    this.setState({ password: e.currentTarget.value });
  },

  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <label>Username
          <input type='text' onChange={this._updateUsername} value={this.state.username} />
        </label>

        <label>Password
          <input type='password' onChange={this._updatePassword} value={this.state.password} />
        </label>
      </form>
    );
  }

});






module.exports = LoginForm;

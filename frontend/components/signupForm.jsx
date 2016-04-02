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
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      password_confirmation: '',
      birthday_month: '05',
      birthday_day: '30',
      birthday_year: '1991',
      gender: 'Male'

    };
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    var router = this.context.router;
    ApiUtil.signin(this.state, function () {
      router.push('/inbox');
    });
  },

  _updateFirstname: function (e) {
    this.setState({ first_name: e.currentTarget.value });
  },

  _updateLastname: function (e) {
    this.setState({ last_name: e.currentTarget.value });
  },

  _updateUsername: function (e) {
    this.setState({ username: e.currentTarget.value });
  },

  _updatePassword: function (e) {
    this.setState({ password: e.currentTarget.value });
  },

  _updatePasswordConfirmation: function (e) {
    this.setState({ password_confirmation: e.currentTarget.value });
  },

  _updateBirthdayMonth: function (e) {
    this.setState({ birthday_month: e.currentTarget.value });
  },

  _updateBirthday_day: function (e) {
    this.setState({ birthday_day: e.currentTarget.value });
  },

  _updateBirthday_year: function (e) {
    this.setState({ birthday_year: e.currentTarget.value });
  },

  _updateGender: function (e) {
    this.setState({ gender: e.currentTarget.value });
  },

  render: function() {
    return (
      <section>
        <header className='sign-up-header'>
          <nav className='sign-up-nav'>
            <Link className='sign-in-from-sign-up' to={'/login/'}>Sign in</Link>
          </nav>
        </header>
        <form onSubmit={this._handleSubmit}>
          <label htmlFor='first_name'>Name</label>
            <input
              type='text'
              id='first_name'
              onChange={this._updateFirstname}
              value={this.state.first_name} />
            <label htmlFor='last_name'></label>
            <input
              type='text'
              id='last_name'
              onChange={this._updateLastname}
              value={this.state.last_name} />
          <label htmlFor='username'>Choose your username</label>
            <input
              type='text'
              id='username'
              onChange={this._updateUsername}
              value={this.state.username} />
          <label htmlFor='password'>Create a password</label>
            <input
              type='password'
              id='password'
              onChange={this._updatePassword}
              value={this.state.password} />
          <label htmlFor='confirm-password'>Confirm your password</label>
            <input
              type='password'
              id='confirm_password'
              onChange={this._updatePasswordConfirmation}
              value={this.state.password_confirmation} />
          <label htmlFor='birthday'>Birthday</label>
            <select id='birthday' onChange={this._updateBirthdayMonth}>
              <option value='01'>January</option>
              <option value='02'>February</option>
              <option value='03'>March</option>
              <option value='04'>April</option>
              <option value='05'>May</option>
              <option value='06'>June</option>
              <option value='07'>July</option>
              <option value='08'>August</option>
              <option value='09'>September</option>
              <option value='10'>October</option>
              <option value='11'>November</option>
              <option value='12'>December</option>
            </select>
            <input
              type='number'
              placeholder='Day'
              onChange={this._updateBirthday_day}
              value={this.state.birthday_day} />
            <input
              type='number'
              placeholder='Year'
              onChange={this._updateBirthday_year}
              value={this.state.birthday_year} />
          <label htmlFor='gender'>Gender</label>
            <select id='gender' onChange={this._updateGender}>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
          <button>Create Account</button>
        </form>
      </section>
    );
  }

});


module.exports = LoginForm;

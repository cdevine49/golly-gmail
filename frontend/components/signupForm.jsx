var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SessionStore = require('../stores/sessionStore');
var UserStore = require('../stores/userStore');
var Link = require('react-router').Link;

var SignupForm = React.createClass({

  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  getInitialState: function() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      birthdayMonth: '01', //Make sure this works with no number hard coded
      birthdayDay: '',
      birthdayYear: '',
      gender: 'Male',
      firstNameEntered: false,
      lastNameEntered: false,
      usernameEntered: false,
      usernameExists : false,
      passwordEntered: false,
      passwordConfirmationEntered: false
    };
  },

  componentDidMount: function() {
    ApiUtil.usernames();
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    var router = this.context.router;
    if (this.state.password !== this.state.passwordConfirmation) {
      alert("Passwords have to match");
    } else {
      ApiUtil.signup(this.state, function () {
        router.push('/inbox/');
      });
    }
  },

  _updateFirstname: function (e) {
    this.setState({ firstName: e.currentTarget.value });
  },

  _updateLastname: function (e) {
    this.setState({ lastName: e.currentTarget.value });
  },

  _updateUsername: function (e) {
    this.setState({ username: e.currentTarget.value });
  },

  _updatePassword: function (e) {
    this.setState({ password: e.currentTarget.value, passwordConfirmation: '', passwordConfirmationEntered: false });
  },

  _updatePasswordConfirmation: function (e) {
    this.setState({ passwordConfirmation: e.currentTarget.value });
  },

  _updateBirthdayMonth: function (e) {
    this.setState({ birthdayMonth: e.currentTarget.value });
  },

  _updateBirthday_day: function (e) {
    this.setState({ birthdayDay: e.currentTarget.value });
  },

  _updateBirthday_year: function (e) {
    this.setState({ birthdayYear: e.currentTarget.value });
  },

  _updateGender: function (e) {
    this.setState({ gender: e.currentTarget.value });
  },

  // Error message display

  _focusFirstName: function() {
    this.setState({firstNameEntered: false});
  },

  _blurFirstName: function() {
      this.setState({firstNameEntered: true});
  },

  _focusLastName: function() {
    this.setState({lastNameEntered: false});
  },

  _blurLastName: function() {
      this.setState({lastNameEntered: true});
  },

  _focusUsername: function() {
    this.setState({usernameEntered: false});
  },

  _blurUsername: function() {
    this.setState({usernameEntered: true});
  },

  _focusPassword: function() {
    this.setState({passwordEntered: false});
  },

  _blurPassword: function() {
    this.setState({passwordEntered: true});
  },

  _focusPasswordConfirmation: function() {
    this.setState({passwordConfirmationEntered: false});
  },

  _blurPasswordConfirmation: function() {
    this.setState({passwordConfirmationEntered: true});
  },

  render: function() {
    return (
      <main className='sign-up-page'>
        <header className='sign-up-header'>
          <nav className='sign-up-nav'>
            <Link className='sign-in-from-sign-up' to={'/login/'}>Sign in</Link>
          </nav>
        </header>
        <section className='sign-up-content'>
          <h1 className='sign-up-title'>Create your GollyGmail Account</h1>
          <section className='group'>
            <section className='sign-up-sidebar'>
              <h2 className='sign-up-sidebar-first-third'>One account is all you get</h2>
              <h3 className='sign-up-sidebar-second-fourth'>One free account connects you to nothing</h3>
              <div className='sign-up-multiple-gmail-logo'></div>
              <h2 className='sign-up-sidebar-first-third'>Take it where your laptop goes</h2>
              <h3 className='sign-up-sidebar-second-fourth'>One of these should work</h3>
              <div className='sign-up-computer-img'></div>
            </section>
            <form className='sign-up-form' onSubmit={this._handleSubmit}>
              <div className='sign-up-set'>
                <label htmlFor='firstName' className='sign-up-name-box-label'>Name</label>
                <input
                  type='text'
                  id='firstName'
                  placeholder='First'
                  className={'sign-up-first-name' + (this.state.firstNameEntered && this.state.firstName === '' ? ' sign-up-errors' : '')}
                  onChange={this._updateFirstname}
                  onFocus={this._focusFirstName}
                  onBlur={this._blurFirstName}
                  value={this.state.firstName} />

                <input
                  type='text'
                  id='lastName'
                  placeholder='Last'
                  className={'sign-up-last-name' + (this.state.lastNameEntered && this.state.lastName === '' ? ' sign-up-errors' : '')}
                  onChange={this._updateLastname}
                  onFocus={this._focusLastName}
                  onBlur={this._blurLastName}
                  value={this.state.lastName} />

                <span className={'error-message' + ((this.state.firstNameEntered && this.state.firstName === '') || this.state.lastNameEntered && this.state.lastName === '' ? '' : ' hidden')}>You can't leave this empty.</span>
              </div>

              <div className='sign-up-set'>
                <label htmlFor='username'>Choose your username</label>
                <input
                  type='text'
                  id='username'
                  className={'sign-up-username' + (this.state.usernameEntered && this.state.username === '' ? ' sign-up-errors' : '')}
                  onChange={this._updateUsername}
                  onFocus={this._focusUsername}
                  onBlur={this._blurUsername}
                  value={this.state.username} />
                <span className='atgollygmail'>@gollygmail.com</span>
                <span className={'error-message' + (this.state.usernameEntered && this.state.username === '' ? '' : ' hidden')}>You can't leave this empty.</span>
                <span className={'error-message' + ((this.state.usernameEntered && this.state.username !== '' && (this.state.username.length > 30 || this.state.username.length < 6)) ? '' : ' hidden')}>Please use between 6 and 30 characters.</span>
                <span className={'error-message' + (this.state.usernameEntered && UserStore.usernameExists(this.state.username) ? '' : ' hidden')}>Someone already has that username. Try another?</span>
              </div>

              <div className='sign-up-set'>
                <label htmlFor='password'>Create a password</label>
                <input
                  type='password'
                  id='password'
                  className='sign-up-password'
                  onChange={this._updatePassword}
                  onFocus={this._focusPassword}
                  onBlur={this._blurPassword}
                  value={this.state.password} />

                <span className={'error-message' + (this.state.passwordEntered && this.state.password === '' ? '' : ' hidden')}>You can't leave this empty.</span>
                <span className={'error-message' + (this.state.passwordEntered && this.state.password !== '' && this.state.password.length <= 8 ? '' : ' hidden')}>Short passwords are easy to guess. Try one with at least 8 characters.</span>
                <span className={'error-message' + (this.state.passwordEntered && this.state.password.length > 100 ? '' : ' hidden')}>Must have at most 100 characters</span>

              </div>

              <div className='sign-up-set'>
                <label htmlFor='confirm-password'>Confirm your password</label>
                <input
                  type='password'
                  id='confirm_password'
                  className='sign-up-password-confirm'
                  onChange={this._updatePasswordConfirmation}
                  onFocus={this._focusPasswordConfirmation}
                  onBlur={this._blurPasswordConfirmation}
                  value={this.state.passwordConfirmation} />

                <span className={'error-message' + (this.state.passwordConfirmationEntered && this.state.password === '' && this.state.passwordConfirmation === '' ? '' : ' hidden')}>You can't leave this empty.</span>
                <span className={'error-message' + (this.state.passwordConfirmationEntered && this.state.passwordConfirmation !== this.state.password ? '' : ' hidden')}>These passwords don't match. Try again?</span>

              </div>

              <div className='sign-up-set'>
                <label htmlFor='birthday'>Birthday</label>
                <select id='birthday' className='sign-up-birthday-month-dropdown' defaultValue='Month' onChange={this._updateBirthdayMonth}>
                  <option className='hidden'>Month</option>
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
                  type='text'
                  placeholder='Day'
                  className='sign-up-birthday-day'
                  onChange={this._updateBirthday_day}
                  value={this.state.birthdayDay} />
                <input
                  type='text'
                  placeholder='Year'
                  className='sign-up-birthday-year'
                  onChange={this._updateBirthday_year}
                  value={this.state.birthdayYear} />
              </div>

              <div className='sign-up-set'>
                <label htmlFor='gender'>Gender</label>
                <select id='gender' className='sign-up-gender' onChange={this._updateGender}>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>
              </div>

              <button className='sign-up-submit'>Sign Up</button>
            </form>
          </section>
        </section>
      </main>
    );
  }

});


module.exports = SignupForm;

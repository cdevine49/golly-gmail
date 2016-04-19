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
      birthdayMonth: null, //Make sure this works with no number hard coded
      birthdayDay: '',
      birthdayYear: '',
      gender: 'Male',
      firstNameEntered: false,
      lastNameEntered: false,
      usernameEntered: false,
      usernameExists : false,
      passwordEntered: false,
      passwordConfirmationEntered: false,
      birthdayDayEntered: false,
      birthdayMonthEntered: false,
      birthdayYearEntered: false,
      genderEntered: false
    };
  },

  componentDidMount: function() {
    ApiUtil.usernames();
  },

  _handleSubmit: function (e) {
    e.preventDefault();
    [
      'FirstName',
      'LastName',
      'Username',
      'Password',
      'PasswordConfirmation',
      'BirthdayMonth',
      'BirthdayDay',
      'BirthdayYear',
      'Gender'
    ].forEach(function (option) {
      this._entered(option, true);
    }.bind(this));
    // var router = this.context.router;
    // if (this.state.password !== this.state.passwordConfirmation) {
    //   alert("Passwords have to match");
    // } else {
    //   ApiUtil.signup(this.state, function () {
    //     router.push('/inbox/');
    //   });
    // }
  },

  _update: function (option, e) {
    switch (option) {
    case "FirstName":
      this.setState({firstName: e.currentTarget.value});
      break;
    case "LastName":
      this.setState({lastName: e.currentTarget.value});
      break;
    case "Username":
      this.setState({username: e.currentTarget.value});
      break;
    case "Password":
      this.setState({password: e.currentTarget.value, passwordConfirmation: '', passwordConfirmationEntered: false });
      break;
    case "PasswordConfirmation":
      this.setState({passwordConfirmation: e.currentTarget.value});
      break;
    case "BirthdayDay":
      this.setState({birthdayDay: e.currentTarget.value});
      break;
    case "BirthdayMonth":
      this.setState({birthdayMonth: e.currentTarget.value});
      break;
    case "BirthdayYear":
      this.setState({birthdayYear: e.currentTarget.value});
      break;
    case "Gender":
      this.setState({gender: e.currentTarget.value});
      break;
    }
  },

  // Error message display

  _entered: function (option, boolean) {
    switch (option) {
      case "FirstName":
        this.setState({firstNameEntered: boolean});
        break;
      case "LastName":
        this.setState({lastNameEntered: boolean});
        break;
      case "Username":
        this.setState({usernameEntered: boolean});
        break;
      case "Password":
        this.setState({passwordEntered: boolean});
        break;
      case "PasswordConfirmation":
        this.setState({passwordConfirmationEntered: boolean});
        break;
      case "BirthdayDay":
        this.setState({birthdayDayEntered: boolean});
        break;
      case "BirthdayMonth":
        this.setState({birthdayMonthEntered: boolean});
        break;
      case "BirthdayYear":
        this.setState({birthdayYearEntered: boolean});
        break;
      case "Gender":
        this.setState({genderEntered: boolean});
        break;
    }
  },

  render: function() {

    return (
      <main className='sign-up-page' onClick={this._handlePageClick}>
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
            <form className='sign-up-form'>
              <div className='sign-up-set'>
                <label htmlFor='firstName' className='sign-up-name-box-label'>Name</label>
                <input
                  type='text'
                  id='firstName'
                  placeholder='First'
                  className={'sign-up-first-name' + (this.state.firstNameEntered && this.state.firstName === '' ? ' sign-up-errors' : '')}
                  onChange={this._update.bind(null, "FirstName")}
                  onFocus={this._entered.bind(null, "FirstName", false)}
                  onBlur={this._entered.bind(null, "FirstName", true)}
                  value={this.state.firstName} />

                <input
                  type='text'
                  id='lastName'
                  placeholder='Last'
                  className={'sign-up-last-name' + (this.state.lastNameEntered && this.state.lastName === '' ? ' sign-up-errors' : '')}
                  onChange={this._update.bind(null, "LastName")}
                  onFocus={this._entered.bind(null, "LastName", false)}
                  onBlur={this._entered.bind(null, "LastName", true)}
                  value={this.state.lastName} />

                <span className={'error-message' + ((this.state.firstNameEntered && this.state.firstName === '') || this.state.lastNameEntered && this.state.lastName === '' ? '' : ' hidden')}>You can't leave this empty.</span>
              </div>

              <div className='sign-up-set'>
                <label htmlFor='username'>Choose your username</label>
                <input
                  type='text'
                  id='username'
                  className={'sign-up-username' + (this.state.usernameEntered && (this.state.username.length > 30 || this.state.username.length < 6 || UserStore.usernameExists(this.state.username)) ? ' sign-up-errors' : '')}
                  onChange={this._update.bind(null, "Username")}
                  onFocus={this._entered.bind(null, "Username", false)}
                  onBlur={this._entered.bind(null, "Username", true)}
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
                  className={'sign-up-password' + (this.state.passwordEntered && (this.state.password.length < 8 || this.state.password.length > 100) ? ' sign-up-errors' : '')}
                  onChange={this._update.bind(null, "Password")}
                  onFocus={this._entered.bind(null, "Password", false)}
                  onBlur={this._entered.bind(null, "Password", true)}
                  value={this.state.password} />

                <span className={'error-message' + (this.state.passwordEntered && this.state.password === '' ? '' : ' hidden')}>You can't leave this empty.</span>
                <span className={'error-message' + (this.state.passwordEntered && this.state.password !== '' && this.state.password.length < 8 ? '' : ' hidden')}>Short passwords are easy to guess. Try one with at least 8 characters.</span>
                <span className={'error-message' + (this.state.passwordEntered && this.state.password.length > 100 ? '' : ' hidden')}>Must have at most 100 characters</span>

              </div>

              <div className='sign-up-set'>
                <label htmlFor='confirm-password'>Confirm your password</label>
                <input
                  type='password'
                  id='confirm_password'
                  className={'sign-up-password-confirm' + (this.state.passwordConfirmationEntered && (this.state.passwordConfirmation === '' || this.state.passwordConfirmation !== this.state.password) ? ' sign-up-errors' : '')}
                  onChange={this._update.bind(null, "PasswordConfirmation")}
                  onFocus={this._entered.bind(null, "PasswordConfirmation", false)}
                  onBlur={this._entered.bind(null, "PasswordConfirmation", true)}
                  value={this.state.passwordConfirmation} />

                <span className={'error-message' + (this.state.passwordConfirmationEntered && this.state.password === '' && this.state.passwordConfirmation === '' ? '' : ' hidden')}>You can't leave this empty.</span>
                <span className={'error-message' + (this.state.passwordConfirmationEntered && this.state.passwordConfirmation !== this.state.password ? '' : ' hidden')}>These passwords don't match. Try again?</span>

              </div>

              <div className='sign-up-set'>
                <label htmlFor='birthday'>Birthday</label>
                <select id='birthday'
                  className={'sign-up-birthday-month-dropdown' + (this.state.birthdayMonthEntered && this.state.birthdayMonth === null ? ' sign-up-errors' : '')}
                  defaultValue='Month'
                  onChange={this._update.bind(null, "BirthdayMonth")}
                  onFocus={this._entered.bind(null, "BirthdayMonth", false)}
                  onBlur={this._entered.bind(null, "BirthdayMonth", true)}>
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
                  className={'sign-up-birthday-day' + (this.state.birthdayDayEntered && this.state.birthdayDay === '' ? ' sign-up-errors' : '')}
                  onChange={this._update.bind(null, "BirthdayDay")}
                  onFocus={this._entered.bind(null, "BirthdayDay", false)}
                  onBlur={this._entered.bind(null, "BirthdayDay", true)}
                  value={this.state.birthdayDay} />
                <input
                  type='text'
                  placeholder='Year'
                  className={'sign-up-birthday-year' + (this.state.birthdayYearEntered && this.state.birthdayYear === '' ? ' sign-up-errors' : '')}
                  onChange={this._update.bind(null, "BirthdayYear")}
                  onFocus={this._entered.bind(null, "BirthdayYear", false)}
                  onBlur={this._entered.bind(null, "BirthdayYear", true)}
                  value={this.state.birthdayYear} />

                <span className={'error-message' + (this.state.birthdayDayEntered && this.state.birthdayDay === '' || this.state.birthdayMonthEntered && this.state.birthdayMonth === null || this.state.birthdayYearEntered && this.state.birthdayYear === '' ? '' : ' hidden')}>You can't leave this empty.</span>
                <span className={'error-message' + (this.state.birthdayDayEntered && this.state.birthdayDay !== '' && (!parseInt(this.state.birthdayDay) || this.state.birthdayDay > 31 || this.state.birthdayDay < 1) ? '' : ' hidden')}>Hmm, the day doesn't look right. Be sure to use a number that is a day of the month.</span>
                <span className={'error-message' + (this.state.birthdayYearEntered && this.state.birthdayYear !== '' && (!parseInt(this.state.birthdayYear) || this.state.birthdayYear.length !== 4) ? '' : ' hidden')}>Hmm, the year doesn't look right. Be sure to use four digits.</span>
                <span className={'error-message' + (this.state.birthdayYearEntered && this.state.birthdayYear !== '' && parseInt(this.state.birthdayYear) && (this.state.birthdayYear > (new Date()).getFullYear() || this.state.birthdayMonthEntered && this.state.birthdayMonth > (new Date()).getMonth() && this.state.birthdayYear == (new Date()).getFullYear())? '' : ' hidden')}>This is my sports almanac.  Get your own.</span>

            </div>


              <div className='sign-up-set'>
                <label htmlFor='gender'>Gender</label>
                <select id='gender'
                  className='sign-up-gender'
                  onChange={this._update.bind(null, "Gender")}
                  onFocus={this._entered.bind(null, "Gender", false)}
                  onBlur={this._entered.bind(null, "Gender", true)}
                  >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>
              </div>

              <button className='sign-up-submit' onMouseDown={this._handleSubmit}>Sign Up</button>
            </form>
          </section>
        </section>
      </main>
    );
  }

});


module.exports = SignupForm;

// this.state.birthdayYear < (new Date()).getFullYear() - 125
// <span className={'error-message' + (this.state.passwordConfirmationEntered && this.state.passwordConfirmation !== this.state.password ? '' : ' hidden')}>These passwords don't match. Try again?</span>

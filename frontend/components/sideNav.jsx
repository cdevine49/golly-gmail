var React = require('react');
var ComposeForm = require('./composeForm.jsx');

var SideNav = React.createClass({

  getInitialState: function() {
    return {
      formOpen: false
    };
  },

  openComposeForm: function () {
    this.setState({formOpen: true});
  },

  handleClick: function () {

  },

  render: function() {

    return (
      <nav className='sidenav'>
        <button className='compose-button' onClick={this._openComposeForm}>Compose</button>
        <ul className='sidenav-links'>
        </ul>

        <ComposeForm />
      </nav>
    );
  }

});
// className='compose-form' formOpen={this.state.formOpen}
module.exports = SideNav;

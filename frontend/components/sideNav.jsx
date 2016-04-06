var React = require('react');
var ComposeForm = require('./composeForm.jsx');

var SideNav = React.createClass({

  getInitialState: function() {
    return {
      formOpen: false
    };
  },

  _composeForm: function () {
    this.setState({formOpen: !this.state.formOpen});
  },

  handleClick: function () {

  },

  render: function() {

    return (
      <nav className='sidenav'>
        <button className='compose-button' onClick={this._composeForm}>Compose</button>
        <ul className='sidenav-links'>
          <li><a href='#/inbox/'>Inbox</a></li>
          <li><a href='#/starred/'>Starred</a></li>
          <li><a href='#/important/'>Important</a></li>
          <li><a href='#/outbox/'>Sent Mail</a></li>
          <li><a href='#'>Drafts</a></li>
        </ul>
        {this.state.formOpen ? <ComposeForm onClose={this._composeForm}/> : ''}
      </nav>
    );
  }

});
// className='compose-form' formOpen={this.state.formOpen}
module.exports = SideNav;

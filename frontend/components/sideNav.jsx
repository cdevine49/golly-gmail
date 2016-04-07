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
        <div className='sidenav-links'>
          <a href='#/inbox/'>Inbox</a>
          <a href='#/starred/'>Starred</a>
          <a href='#/important/'>Important</a>
          <a href='#/outbox/'>Sent Mail</a>
          <a href='#'>Drafts</a>
        </div>
        {this.state.formOpen ? <ComposeForm onClose={this._composeForm}/> : ''}
      </nav>
    );
  }

});
// className='compose-form' formOpen={this.state.formOpen}
module.exports = SideNav;

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
        <button className='compose-button' onClick={this.props.onCompose}>Compose</button>
        <div className='sidenav-links'>
          <a href='#/inbox/1'>Inbox</a>
          <a href='#/starred/1'>Starred</a>
          <a href='#/important/1'>Important</a>
          <a href='#/outbox/1'>Sent Mail</a>
          <a href='#/drafts/1'>Drafts</a>
        </div>
      </nav>
    );
  }

});
// {this.state.formOpen ? <ComposeForm onClose={this._composeForm}/> : ''}
// className='compose-form' formOpen={this.state.formOpen}
module.exports = SideNav;

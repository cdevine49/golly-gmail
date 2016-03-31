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
          <li><a href="#" onClick={this.handleClick}>Inbox</a><span class='unread-count'>{this.unreadCount}</span></li>
          <li><a href="#" onClick={this.handleClick}>Starred</a></li>
          <li><a href="#" onClick={this.handleClick}>Important</a></li>
          <li><a href="#" onClick={this.handleClick}>Drafts</a></li>
        </ul>

        <ComposeForm />
      </nav>
    );
  }

});
// className='compose-form' formOpen={this.state.formOpen}
module.exports = SideNav;

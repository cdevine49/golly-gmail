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
    var mailbox_list = this.props.mailboxes.map(function(mailbox){
      return <li key={mailbox.id}
        onClick={this.props.onMailboxClick.bind(null, mailbox.id)}>
        {mailbox.name}
      </li>;
    }.bind(this));

    return (
      <nav className='sidenav'>
        <button className='compose-button' onClick={this._openComposeForm}>Compose</button>
        <ul className='sidenav-links'>
          { mailbox_list }
        </ul>

        <ComposeForm />
      </nav>
    );
  }

});
// className='compose-form' formOpen={this.state.formOpen}
module.exports = SideNav;

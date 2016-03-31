var React = require('react');
var ApiUtil = require('../utils/apiUtil');
var SideNav = require('./sideNav.jsx');
var MailboxStore = require('../stores/mailboxStore');
var EmailPreviewTable = require('./emailPreviewTable');


var Mailbox = React.createClass({

  getInitialState: function() {
    return {
      mailboxes: MailboxStore.all(),
      current_mailbox_id: null
    };
  },

  componentDidMount: function() {
    this.MailboxListener = MailboxStore.addListener(this._onChange);
    ApiUtil.fetchAllMailboxes();
  },

  componentWillUnmount: function() {
    this.MailboxListener.remove();
  },

  _onChange: function () {
    this.setState(
      { mailboxes: MailboxStore.all(), current_mailbox_id: MailboxStore.all()[0].id });
  },

  handleChangeMailbox: function (mailbox_id) {
    this.setState({current_mailbox_id: mailbox_id});
  },

  _emailsInMailbox: function (mailbox_id) {
    ApiUtil.fetchEmailsInMailbox(mailbox_id);
  },

  render: function () {

    return (
      <div>
        <SideNav
          mailboxes={this.state.mailboxes}
          onMailboxClick={this.handleChangeMailbox}/>
        <EmailPreviewTable
          key={this.state.current_mailbox_id}
          emails={this._emailsInMailbox} />
      </div>
    );
  }
});

module.exports = Mailbox;

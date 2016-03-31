var AppDispatcher = require('../dispatcher/dispatcher');
var EmailConstants = require('../constants/emailConstants');
var MailboxConstants = require('../constants/MailboxConstants');

ApiActions = {
  receiveAllEmails: function(emails) {
    var action = {
      actionType: EmailConstants.EMAILS_RECEIVED,
      emails: emails
    };
    AppDispatcher.dispatch(action);
  },

  receiveAllMailboxes: function(mailboxes) {
    var action = {
      actionType: MailboxConstants.MAILBOXES_RECEIVED,
      mailboxes: mailboxes
    };

    AppDispatcher.dispatch(action);
  }
};

module.exports = ApiActions;

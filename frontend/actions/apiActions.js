var AppDispatcher = require('../dispatcher/dispatcher');
var EmailConstants = require('../constants/EmailConstants');

ApiActions = {
  receiveAllEmails: function(emails) {
    AppDispatcher.dispatch({
      actionType: EmailConstants.EMAILS_RECEIVED,
      emails: emails
    });
  }
};

module.exports = ApiActions;

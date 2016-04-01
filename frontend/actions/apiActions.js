var AppDispatcher = require('../dispatcher/dispatcher');
var EmailConstants = require('../constants/emailConstants');

ApiActions = {
  receiveEmails: function(emails) {
    var action = {
      actionType: EmailConstants.EMAILS_RECEIVED,
      emails: emails
    };
    AppDispatcher.dispatch(action);
  },

};

module.exports = ApiActions;

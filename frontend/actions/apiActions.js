var AppDispatcher = require('../dispatcher/dispatcher');
var EmailConstants = require('../constants/emailConstants');
var SessionConstants = require('../constants/sessionConstants');

ApiActions = {
  receiveEmails: function(emails) {
    var action = {
      actionType: EmailConstants.EMAILS_RECEIVED,
      emails: emails
    };
    AppDispatcher.dispatch(action);
  },

  currentUserReceived: function(currentUser) {
      var action = {
        actionType: SessionConstants.CURRENT_USER_RECEIVED,
        currentUser: currentUser
      };
      AppDispatcher.dispatch(action);
    },

    logout: function() {
      AppDispatcher.dispatch({
        actionType: SessionConstants.LOGOUT
      });
    }

};

module.exports = ApiActions;

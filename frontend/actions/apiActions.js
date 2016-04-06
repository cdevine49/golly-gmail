var AppDispatcher = require('../dispatcher/dispatcher');
var EmailConstants = require('../constants/emailConstants');
var SessionConstants = require('../constants/sessionConstants');

ApiActions = {
  receiveEmails: function(response) {
    var action = {
      actionType: EmailConstants.EMAILS_RECEIVED,
      emails: response.emails,
      meta: response.meta
    };
    AppDispatcher.dispatch(action);
  },

  receiveEmail: function(email) {
    var action = {
      actionType: EmailConstants.EMAIL_RECEIVED,
      email: email
    };
    AppDispatcher.dispatch(action);
  },

  // updateEmail: function (email) {
  //   var action = {
  //     actionType: EmailConstants.EMAIL_UPDATED,
  //     email: email
  //   };
  //   AppDispatcher.dispatch(action);
  // },

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

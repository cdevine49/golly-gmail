var AppDispatcher = require('../dispatcher/dispatcher');
var EmailConstants = require('../constants/emailConstants');
var SessionConstants = require('../constants/sessionConstants');
var UserConstants = require('../constants/userConstants');

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

  receiveDraft: function(draft) {
    var action = {
      actionType: EmailConstants.EMAIL_CREATED,
      draft: draft
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
  },

  users: function(users) {
    var action = {
      actionType: UserConstants.USERS,
      users: users.users
    };
    AppDispatcher.dispatch(action);
  }

};

module.exports = ApiActions;
